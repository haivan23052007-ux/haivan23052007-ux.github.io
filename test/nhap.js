document.addEventListener('DOMContentLoaded', () => {
    let globalDatabase = null;

    // ========================================================
    // PHẦN 0: LOAD DỮ LIỆU THẬT TỪ DATABASE
    // ========================================================
    const initRealData = async () => {
        try {
            // Sử dụng dữ liệu JS đã được nạp qua script tag
            if (typeof EVENT_DATABASE !== 'undefined') {
                globalDatabase = EVENT_DATABASE;
            } else {
                throw new Error("Không tìm thấy EVENT_DATABASE. Hãy kiểm tra lại file events.js");
            }
            
            // Lưu dữ liệu vào bộ nhớ đệm (localStorage) để các trang sau có thể dùng ngay
            // mà không cần phải thực hiện liên kết/truy vấn qua tệp JSON nữa.
            localStorage.setItem('auratix_database_cache', JSON.stringify(globalDatabase));
            
            const events = globalDatabase.events;

            // 1. Đổ dữ liệu vào Slider chính
            const sliderTrack = document.getElementById('carouselTrack');
            if (sliderTrack) {
                sliderTrack.innerHTML = events.slice(0, 10).map((ev) => `
                    <div class="carousel-card" style="background: url('${ev.banner}') center/cover" onclick="goToDetail('${ev.id}')">
                        <div class="card-content"><h3>${ev.title}</h3><button class="btn-detail">Xem chi tiết</button></div>
                    </div>
                `).join('');
            }

            // 2. Sự kiện đặc biệt (Portrait)
            const specialTrack = document.getElementById('specialEventsTrack');
            if (specialTrack) {
                specialTrack.innerHTML = events.slice(0, 15).map(ev => `
                    <div class="evt-card portrait" onclick="goToDetail('${ev.id}')">
                        <div class="evt-img-placeholder" style="background-image: url('${ev.banner}')"></div>
                    </div>
                `).join('');
            }

            // 3. Sự kiện xu hướng (Landscape)
            const trendingTrack = document.getElementById('trendingEventsTrack');
            if (trendingTrack) {
                trendingTrack.innerHTML = events.slice(0, 10).map((ev, i) => `
                    <div class="evt-card landscape" onclick="goToDetail('${ev.id}')">
                        <div class="evt-img-placeholder" style="background-image: url('${ev.banner}')"></div>
                        <span class="rank-number">${i+1}</span>
                    </div>
                `).join('');
            }

            // 4. Gợi ý
            const suggestionsTrack = document.getElementById('suggestionsTrack');
            if (suggestionsTrack) {
                suggestionsTrack.innerHTML = events.slice(5, 12).map(ev => renderStandardCard(ev)).join('');
            }

            // 5. Hiển thị các Grid danh mục (Mặc định giới hạn 8 thẻ)
            renderGrid('concert', 'concertGrid', 8);
            renderGrid('special', 'specialGrid', 8);
            renderGrid('sport', 'sportGrid', 8);
            renderGrid('game', 'gameGrid', 8);
            renderGrid('workshop', 'workshopGrid', 8);
            renderGrid('visit', 'visitGrid', 8);
            renderGrid('specialT', 'specialTGrid', 8);
            renderGrid('specialV', 'specialVGrid', 8);
            renderGrid('specialA', 'specialAGrid', 8);
            renderGrid('specialH', 'specialHGrid', 8);
            renderGrid('specialC', 'specialCGrid', 8);
            renderGrid('other', 'otherGrid', 8);

            // Sau khi render xong mới khởi tạo các Slider JS
            setTimeout(setupSliders, 100);

        } catch (error) {
            console.error("Lỗi tải dữ liệu:", error);
        }
    };

    const renderStandardCard = (ev) => {
        const schedules = globalDatabase.schedules.filter(s => String(s.eventId) === String(ev.id));
        const firstDate = schedules.length > 0 ? EventStore.formatDate(schedules[0].date) : "Đang cập nhật";
        const price = schedules.length > 0 ? "Từ " + EventStore.formatCurrency(EventStore.getLowestPrice(schedules[0])) : "Liên hệ";
        
        return `
            <div class="standard-card" onclick="goToDetail('${ev.id}')">
                <div class="st-img-wrapper">
                    <div class="st-img" style="background-image: url('${ev.banner}')"></div>
                </div>
                <div class="st-info">
                    <h3 class="st-title">${ev.title}</h3>
                    <div class="st-price">${price}</div>
                    <div class="st-date"><i class="fa-regular fa-calendar-days"></i> ${firstDate}</div>
                </div>
            </div>
        `;
    };

    const renderGrid = (cat, gridId, limit = null) => {
        const grid = document.getElementById(gridId);
        if (!globalDatabase || !grid) return;
        let filtered = globalDatabase.events.filter(e => e.category === cat);
        if (limit) filtered = filtered.slice(0, limit);
        grid.innerHTML = filtered.map(ev => renderStandardCard(ev)).join('');
    };

    renderAuthArea();
    initRealData();

    // ========================================================
    // PHẦN 1: BANNER CHÍNH QUAY VÒNG (CAROUSEL TRÊN CÙNG)
    // ========================================================
    function setupSliders() {
        const track = document.getElementById('carouselTrack');
        
        if (track) { 
        const cards = Array.from(document.querySelectorAll('.carousel-card'));
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const dotsContainer = document.getElementById('dotsContainer');

        const totalOriginal = cards.length; 
        
        const cloneFirst = cards[0].cloneNode(true);
        const cloneSecond = cards[1].cloneNode(true);
        const cloneLast = cards[totalOriginal - 1].cloneNode(true);
        
        track.insertBefore(cloneLast, cards[0]);
        track.appendChild(cloneFirst);
        track.appendChild(cloneSecond);
        
        let currentIndex = 0; 
        let isTransitioning = false;
        
        if(dotsContainer) {
            for (let i = 0; i < totalOriginal; i++) {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                if (i === 0) dot.classList.add('active');
                dot.addEventListener('click', () => {
                    if (!isTransitioning) updateSlider(i);
                });
                dotsContainer.appendChild(dot);
            }
        }
        const dots = document.querySelectorAll('#dotsContainer .dot');
        
        function updateSlider(index, smooth = true) {
            isTransitioning = smooth; 
            currentIndex = index;
            
            const cardWidth = cards[0].offsetWidth;
            const gap = 20;
            const domIndex = currentIndex + 1; 
            const moveDistance = (cardWidth + gap) * domIndex;
            
            track.style.transition = smooth ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none';
            track.style.transform = `translateX(-${moveDistance}px)`;
            
            dots.forEach(d => d.classList.remove('active'));
            let dotIndex = currentIndex;
            if (currentIndex === totalOriginal) dotIndex = 0; 
            if (currentIndex === -1) dotIndex = totalOriginal - 1; 
            if (dots[dotIndex]) dots[dotIndex].classList.add('active');
        }
        
        track.addEventListener('transitionend', (e) => {
            if (e.propertyName !== 'transform') return;
            isTransitioning = false;
            
            if (currentIndex === totalOriginal) {
                updateSlider(0, false);
            } else if (currentIndex === -1) {
                updateSlider(totalOriginal - 1, false);
            }
        });
        
        if(nextBtn) nextBtn.addEventListener('click', () => { if (!isTransitioning) updateSlider(currentIndex + 1); });
        if(prevBtn) prevBtn.addEventListener('click', () => { if (!isTransitioning) updateSlider(currentIndex - 1); });
        
        updateSlider(0, false);
    }

    // ========================================================
    // PHẦN 2: CÁC DANH SÁCH SỰ KIỆN Ở DƯỚI
    // ========================================================
    const eventSections = document.querySelectorAll('.event-section');

    eventSections.forEach(section => {
        const sliderTrack = section.querySelector('.scroll-track');
        const listPrevBtn = section.querySelector('.list-prev');
        const listNextBtn = section.querySelector('.list-next');
        const listDotsContainer = section.querySelector('.list-dots');
        
        if (!sliderTrack) return;

        const listCards = Array.from(sliderTrack.children);
        const listTotalOriginal = listCards.length;
        if (listTotalOriginal === 0) return;

        const isTrendingSection = section.querySelector('.rank-number') !== null;

        if (isTrendingSection) {
            // ----------------------------------------------------
            // LOGIC A: KHÔNG XOAY VÒNG (Dành riêng cho Sự kiện xu hướng)
            // ----------------------------------------------------
            sliderTrack.style.width = 'auto';
            sliderTrack.style.overflowX = 'auto';
            sliderTrack.style.transform = 'none';
            sliderTrack.style.scrollBehavior = 'smooth';

            const updateTrendingDots = () => {
                if (!listDotsContainer) return;
                const pages = Math.ceil(sliderTrack.scrollWidth / sliderTrack.clientWidth);
                const activeIndex = Math.round(sliderTrack.scrollLeft / sliderTrack.clientWidth);

                if (listDotsContainer.children.length !== pages) {
                    listDotsContainer.innerHTML = '';
                    for (let i = 0; i < pages; i++) {
                        const dot = document.createElement('div');
                        dot.classList.add('dot');
                        if (i === activeIndex) dot.classList.add('active');
                        listDotsContainer.appendChild(dot);
                    }
                } else {
                    const dots = listDotsContainer.querySelectorAll('.dot');
                    dots.forEach((dot, index) => {
                        dot.classList.toggle('active', index === activeIndex);
                    });
                }

                if(listPrevBtn) listPrevBtn.style.opacity = sliderTrack.scrollLeft <= 0 ? '0.3' : '1';
                if(listNextBtn) listNextBtn.style.opacity = sliderTrack.scrollLeft >= (sliderTrack.scrollWidth - sliderTrack.clientWidth - 5) ? '0.3' : '1';
            };

            sliderTrack.addEventListener('scroll', updateTrendingDots);
            window.addEventListener('resize', updateTrendingDots);
            setTimeout(updateTrendingDots, 200);

            if (listNextBtn) listNextBtn.addEventListener('click', () => sliderTrack.scrollBy({ left: sliderTrack.clientWidth, behavior: 'smooth' }));
            if (listPrevBtn) listPrevBtn.addEventListener('click', () => sliderTrack.scrollBy({ left: -sliderTrack.clientWidth, behavior: 'smooth' }));

            let isDown = false;
            let startX, scrollLeft;

            sliderTrack.addEventListener('mousedown', (e) => {
                isDown = true;
                sliderTrack.style.scrollBehavior = 'auto'; 
                startX = e.pageX - sliderTrack.offsetLeft;
                scrollLeft = sliderTrack.scrollLeft;
            });
            sliderTrack.addEventListener('mouseleave', () => { isDown = false; sliderTrack.style.scrollBehavior = 'smooth'; });
            sliderTrack.addEventListener('mouseup', () => { isDown = false; sliderTrack.style.scrollBehavior = 'smooth'; });
            sliderTrack.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - sliderTrack.offsetLeft;
                const walk = (x - startX) * 1.5; 
                sliderTrack.scrollLeft = scrollLeft - walk;
            });

        } else {
            // ----------------------------------------------------
            // LOGIC B: XOAY VÒNG VÔ TẬN (Dành cho các sự kiện còn lại)
            // ----------------------------------------------------
            const clonesStart = listCards.slice(0, 4).map(card => card.cloneNode(true));
            const clonesEnd = listCards.slice(-4).map(card => card.cloneNode(true));

            clonesEnd.forEach(clone => sliderTrack.insertBefore(clone, sliderTrack.firstChild));
            clonesStart.forEach(clone => sliderTrack.appendChild(clone));

            let listCurrentIndex = 4; 
            let listIsTransitioning = false;
            
            const getListCardWidth = () => sliderTrack.children[0].offsetWidth + 20;

            sliderTrack.style.transition = 'none';
            sliderTrack.style.transform = `translateX(-${listCurrentIndex * getListCardWidth()}px)`;

            function moveListSlider(newIndex, smooth = true) {
                listIsTransitioning = smooth;
                listCurrentIndex = newIndex;
                
                sliderTrack.style.transition = smooth ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none';
                sliderTrack.style.transform = `translateX(-${listCurrentIndex * getListCardWidth()}px)`;
                
                if (listDotsContainer) {
                    const listDots = listDotsContainer.querySelectorAll('.dot');
                    listDots.forEach(d => d.classList.remove('active'));
                    
                    let dotIndex = Math.floor((listCurrentIndex - 4) / 2);
                    if (dotIndex < 0) dotIndex = Math.floor((listTotalOriginal - 1) / 2);
                    if (dotIndex >= Math.ceil(listTotalOriginal / 2)) dotIndex = 0;
                    
                    if (listDots[dotIndex]) listDots[dotIndex].classList.add('active');
                }
            }

            sliderTrack.addEventListener('transitionend', () => {
                listIsTransitioning = false;
                if (listCurrentIndex <= 0) {
                    moveListSlider(listTotalOriginal, false);
                } else if (listCurrentIndex >= listTotalOriginal + 4) {
                    moveListSlider(4, false); 
                }
            });

            if (listNextBtn) listNextBtn.addEventListener('click', () => { if (!listIsTransitioning) moveListSlider(listCurrentIndex + 2); });
            if (listPrevBtn) listPrevBtn.addEventListener('click', () => { if (!listIsTransitioning) moveListSlider(listCurrentIndex - 2); });

            let isDown = false;
            let startX, currentTranslate, prevTranslate;

            sliderTrack.addEventListener('mousedown', (e) => {
                isDown = true;
                listIsTransitioning = true;
                sliderTrack.style.transition = 'none';
                startX = e.pageX;
                
                const transformMatrix = window.getComputedStyle(sliderTrack).getPropertyValue('transform');
                if (transformMatrix !== 'none') {
                    currentTranslate = parseInt(transformMatrix.split(',')[4].trim());
                } else {
                    currentTranslate = 0;
                }
                prevTranslate = currentTranslate;
            });

            sliderTrack.addEventListener('mouseleave', () => { isDown = false; });
            sliderTrack.addEventListener('mouseup', (e) => {
                if (!isDown) return;
                isDown = false;
                
                const movedBy = currentTranslate - prevTranslate;
                
                if (movedBy < -100) moveListSlider(listCurrentIndex + 1); 
                else if (movedBy > 100) moveListSlider(listCurrentIndex - 1); 
                else moveListSlider(listCurrentIndex); 
            });

            sliderTrack.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const currentX = e.pageX;
                const diff = currentX - startX;
                currentTranslate = prevTranslate + diff;
                sliderTrack.style.transform = `translateX(${currentTranslate}px)`;
            });

            if (listDotsContainer) {
                const pages = Math.ceil(listTotalOriginal / 2);
                listDotsContainer.innerHTML = '';
                for (let i = 0; i < pages; i++) {
                    const dot = document.createElement('div');
                    dot.classList.add('dot');
                    if (i === 0) dot.classList.add('active');
                    listDotsContainer.appendChild(dot);
                }
            }
        }
    });
    }

    // ========================================================
    // PHẦN: LỌC DANH MỤC TRANG CHỦ
    // ========================================================
    const filterDashboard = (category) => {
        if (window.event) window.event.preventDefault();
        
        const sections = document.querySelectorAll('.cat-section');
        const homeSections = ['#ticketbox-slider', '#special-events-section', '#trending-events-section', '#suggestions-section'];
        
        if (category === 'all') {
            sections.forEach(s => {
                s.style.display = 'block';
                const gridId = s.querySelector('.static-grid-4')?.id;
                const cat = s.getAttribute('data-cat');
                if (gridId && cat) renderGrid(cat, gridId, 8);
            });
            homeSections.forEach(id => { document.querySelector(id).style.display = 'block'; });
        } else {
            sections.forEach(s => {
                const isTarget = s.getAttribute('data-cat') === category;
                s.style.display = isTarget ? 'block' : 'none';
                if (isTarget) {
                    const gridId = s.querySelector('.static-grid-4')?.id;
                    if (gridId) renderGrid(category, gridId);
                }
            });
            homeSections.forEach(id => { document.querySelector(id).style.display = 'none'; });
        }
    };

    window.filterDashboard = filterDashboard; // Expose to global scope

});

// ========================================================
// PHẦN 3: CÁC HÀM XỬ LÝ AUTH (NẰM NGOÀI CÙNG ĐỂ DỄ GỌI)
// ========================================================

function renderAuthArea() {
    const authArea = document.getElementById('auth-area');
    if (!authArea) return; 

    // Lấy trạng thái đăng nhập từ bộ nhớ trình duyệt
    const isLoggedIn = localStorage.getItem('isLoggedIn'); 

    if (isLoggedIn) {
        // NẾU ĐÃ ĐĂNG NHẬP: Dùng JS để vẽ lại toàn bộ cụm "Tài khoản" và menu thả xuống
        authArea.innerHTML = `
            <div class="user-account-wrapper" style="position: relative; display: flex; align-items: center;">
                <a href="#" class="user-title" style="color: white; text-decoration: none; display: flex; align-items: center; gap: 5px; padding: 10px 0;">
                    <i class="fa-solid fa-circle-user"></i> Tài khoản <i class="fa-solid fa-caret-down" style="font-size: 12px;"></i>
                </a>
                
                <ul class="dropdown-account">
                    <li><a href="#"><i class="fa-regular fa-address-card" style="width: 20px;"></i> Thông tin cá nhân</a></li>
                    <li><a href="#"><i class="fa-solid fa-clock-rotate-left" style="width: 20px;"></i> Lịch sử đặt vé</a></li>
                    <li><a href="#"><i class="fa-solid fa-gear" style="width: 20px;"></i> Sự kiện của tôi</a></li>
                    <li class="logout-line"><a href="#" id="btn-logout"><i class="fa-solid fa-arrow-right-from-bracket" style="width: 20px;"></i> Đăng xuất</a></li>
                </ul>
            </div>
        `;

        // Bắt sự kiện click cho nút Đăng xuất vừa được tạo ra
        const btnLogout = document.getElementById('btn-logout');
        if (btnLogout) {
            btnLogout.addEventListener('click', function(e) {
                e.preventDefault(); 
                logout();
            });
        }

    } else {
        // NẾU CHƯA ĐĂNG NHẬP: Vẽ ra nút Đăng nhập và Đăng ký
        authArea.innerHTML = `
            <a href="ticketbox.html" style="color: white; text-decoration: none; font-weight: bold;"><i class="fa-solid fa-user"></i> Đăng nhập</a>
            <span style="color: white;">|</span>
            <a href="ticketbox.html" style="color: white; text-decoration: none; font-weight: bold;">Đăng ký</a>
        `;
    }
}

function logout() {
    // 1. Xóa cờ đánh dấu đăng nhập
    localStorage.removeItem('isLoggedIn');
    
    // 2. Chuyển hướng người dùng thẳng về trang index.html
    window.location.href = 'index.html'; 
}

// Hàm chuyển hướng đến trang chi tiết sự kiện trong thư mục test
window.goToDetail = (eventId) => {
    const db = JSON.parse(localStorage.getItem('auratix_database_cache'));
    localStorage.setItem("selectedEventId", String(eventId));
    
    // Đảm bảo suất diễn đầu tiên được chọn sẵn từ bộ nhớ đệm
    if (db && db.schedules) {
        const firstSchedule = db.schedules.find(s => String(s.eventId) === String(eventId));
        if (firstSchedule) localStorage.setItem("selectedScheduleId", firstSchedule.id);
    }
    window.location.href = "detai.html";
};
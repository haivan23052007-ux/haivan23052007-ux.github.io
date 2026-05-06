/**
 * Dữ liệu sự kiện được chuyển đổi từ events.json sang biến JavaScript
 */
const EVENT_DATABASE = {
  "events": [
    {
      "id": "1",
      "title": "Sky Concert",
      "category": "concert",
      "city": "TP.HCM",
      "banner": "https://tse1.mm.bing.net/th/id/OIP.V2oIAEIW48x_5CDizbhJBQHaFj?pid=ImgDet&w=474&h=355&rs=1&o=7&rm=3",
      "summary": "Đêm nhạc bùng nổ với nhiều bản hit và hiệu ứng sân khấu lớn.",
      "content": "Em khiến anh muốn trở thành Hà Nội boy - Sơn Tùng M-TP trở lại với Sky Hà Nội rồi đây!\nSau hành trình chinh phục hàng triệu trái tim với những bản hit đình đám, Sơn Tùng sẽ chính thức tái xuất tại sân khấu, mang đến nguồn năng lượng bùng nổ cùng những khoảnh khắc ngọt ngào khó quên.\nĐặc biệt, lần trở lại này diễn ra đúng dịp kỷ niệm chặng đường âm nhạc của anh, hứa hẹn biến đêm nhạc thành một hành trình cảm xúc không thể bỏ lỡ.",
      "venue": "Sân vận động TP.HCM",
      "seatMapId": "sky-concert-map"
    },
    {
      "id": "2",
      "title": "Gai Home",
      "category": "concert",
      "city": "Hà Nội",
      "banner": "https://salt.tkbcdn.com/ts/ds/74/ca/18/173014220d7b30fb44d26955187b13e9.png",
      "summary": "Concert quy tụ dàn anh tài bước ra từ gameshow âm nhạc nổi bật.",
      "content": "Đêm diễn quy tụ dàn anh tài bước ra từ gameshow Anh Trai Vượt Ngàn Chông Gai. Khán giả sẽ được tận hưởng một sân khấu âm nhạc chuyên nghiệp, nơi những màn trình diễn được dàn dựng với quy mô lớn và cảm xúc rõ ràng.",
      "venue": "Sân vận động Mỹ Đình",
      "seatMapId": "stadium-a"
    },
    {
      "id": "3",
      "title": "[Hà Nội] Slay",
      "category": "concert",
      "city": "Hà Nội",
      "banner": "https://salt.tkbcdn.com/ts/ds/0d/f6/60/d6722de4650d93d531c088ae38ee8ce1.jpg",
      "summary": "Concert theo mô hình arena với nhiều hạng vé rõ ràng.",
      "content": "Sự kiện dành cho khán giả yêu không khí show quốc tế. Sân khấu được thiết kế theo kiểu arena, phù hợp cho nhiều hạng ghế từ VVIP đến khu đứng.",
      "venue": "Số 8 Nguyễn Công Hoan, Hà Nội",
      "seatMapId": "slay-overview-map"
    },
    {
      "id": "4",
      "title": "Tháng 4",
      "category": "concert",
      "city": "Hà Nội",
      "banner": "https://salt.tkbcdn.com/ts/ds/5f/52/93/a8e3e31b0657d3203e006084a572ae26.jpg",
      "summary": "Đêm nhạc trữ tình, không gian gần và giàu cảm xúc.",
      "content": "Tôi ổn. Nghe quen không? 90% mọi người nói câu này đều đang nói dối.\nTHÁNG 4 - LỜI NÓI DỐI CỦA EM là một đêm nhạc nhiều cảm xúc với ca sĩ, band nhạc và tứ tấu trong không gian nhà hát.",
      "venue": "Nhà hát Ca Múa Nhạc Thăng Long",
      "seatMapId": "thang-4-jay-map"
    },
    {
      "id": "giai-boi-2026",
      "title": "Giải bơi",
      "category": "sport",
      "city": "TP.HCM",
      "banner": "https://pix.actiup.net/2026/03/13/1773391800670286/banner-ba%CC%81n-ve%CC%81.jpg",
      "summary": "Giải đấu bơi phong trào với khu khán đài chia 3 mức vé.",
      "content": "Giải bơi năm 2026 quy tụ các vận động viên phong trào và bán chuyên. Khán giả có thể chọn khán đài gần hồ thi đấu hoặc khu phổ thông.",
      "venue": "Cung thể thao dưới nước",
      "seatMapId": "aquatic-d"
    },
    {
      "id": "giai-bong-da-sinh-vien",
      "title": "Giải bóng đá sinh viên",
      "category": "sport",
      "city": "Hà Nội",
      "banner": "https://salt.tkbcdn.com/ts/ds/ec/9b/e4/4a28525adb60c8e14f1f10131f0d5dcb.png",
      "summary": "Giải đấu sinh viên với khu vực cổ động và khán đài thường.",
      "content": "Giải bóng đá sinh viên mang đến không khí thi đấu kịch tính, phù hợp cho cả sinh viên và khán giả phổ thông.",
      "venue": "Sân vận động Đại học Quốc gia",
      "seatMapId": "stadium-a"
    },
    {
      "id": "game-show-2026",
      "title": "Game Show",
      "category": "game",
      "city": "Hà Nội",
      "banner": "https://images.unsplash.com/photo-1522778526097-ce0a22ceb253",
      "summary": "Show tương tác trực tiếp với khu vực ngồi gần sân khấu và khu tiêu chuẩn.",
      "content": "Game Show 2026 là sự kiện giải trí tương tác, kết hợp mini game, phần thưởng và hoạt động cộng đồng cho người tham gia.",
      "venue": "Trung tâm hội nghị Hà Nội",
      "seatMapId": "hall-e"
    },
    {
      "id": "5",
      "title": "Những Thành Phố Mơ Màng Summer 2026",
      "category": "concert",
      "city": "Hà Nội",
      "banner": "https://salt.tkbcdn.com/ts/ds/7f/d7/82/571d1a2e987ca3d40c21d4ff98b2f682.png",
      "summary": "Concert quốc tế với set diễn quy mô lớn.",
      "content": "Nhà Hát Mơ Màng chính thức mở cửa và bản giao hưởng mùa hè của Những Thành Phố Mơ Màng đang chuẩn bị cất lời. Sẽ là một mùa hè sôi động, kỳ diệu, bùng nổ và vô vàn điều bất ngờ dành cho cư dân. 10 nghệ sĩ cùng kết hợp với dàn liveband chất lượng sẽ mang tới một trải nghiệm cực kỳ mãn nhãn và đặc biệt cho mùa hè năm nay!",
      "venue": "Sân vận động Hà Nội",
      "seatMapId": "dangcap"
    }
    ,
    {
      "id": "6",
      "title": "Tokyo Girls Collection Vietnam",
      "category": "concert",
      "city": "TP.HCM",
      "banner": "https://salt.tkbcdn.com/ts/ds/40/15/6a/e931051952f26e34af8cad59294f6ecc.jpg",
      "summary": "The Electric Runway Experience - World Tour 2024",
      "content": "Sự kiện thời trang đình đám Nhật Bản lần đầu đến Việt Nam.",
      "venue": "Saigon Exhibition Center (SECC)",
      "seatMapId": "slay-overview-map"
    },
    {
      "id": 7,
      "title": "Đêm nhạc Quang Dũng - Phương Phương Thảo - Hoàng Trang - Đông",
      "category": "concert",
      "city": "Thành phố Hồ Chí Minh",
      "banner": "https://salt.tkbcdn.com/ts/ds/30/77/2a/54dc1fc9a52c0123b262258f8af95aab.jpg",
      "summary": "Concert quốc tế với quy mô sân vận động.",
      "content": "BlackPink World Tour phiên bản sân vận động với nhiều khu khán đài và khu đứng phía trước sân khấu.",
      "venue": "Số 6 Mạc Đĩnh Chi, Phường Sài Gòn, Thành phố Hồ Chí Minh",
      "seatMapId": "slay-overview-map"
    },
    {
      "id": 8,
      "title": "1900 Future Hits #77: NEGAV ",
      "category": "concert",
      "city": "Hà Nội",
      "banner": "https://salt.tkbcdn.com/ts/ds/f8/cd/d1/3cd1c6127c3ccca706cecf2db2ab2357.jpg",
      "summary": "Concert quốc tế phiên bản arena.",
      "content": "'Em khiến anh muốn trở thành Hà Nội boy' - Negav quay trở lại với Hà Nội rồi đây!!\nSau một hành trình rực rỡ và ngôi vị Quán quân đầy thuyết phục tại Anh Trai Say Hi mùa 2, Negav sẽ chính thức quay trở lại sân khấu 1900 - hứa hẹn sẽ đem tới một nguồn năng lượng bùng nổ và cũng không kém phần ngọt ngào qua những bản hit triệu view đã làm nên tên tuổi của anh.\nQuay trở lại đúng dịp đặc biệt là sinh nhật của anh, Embes đã sẵn sàng để gặp lại Negav chưa?! ✨ ",
      "venue": "8B Tạ Hiện, Phường Hoàn Kiếm, Thành phố Hà Nội",
      "seatMapId": "slay-overview-map"
    },
    {
      "id": 9,
      "title": "APLUS HANOI presents A+GLOBAL #3: GOOM GUM ",
      "category": "concert",
      "city": "Hà Nội",
      "banner": "https://salt.tkbcdn.com/ts/ds/bf/8f/bf/f6c8f792e675acc6623268540ee60e5e.png",
      "summary": "Concert Việt Nam với không khí bùng nổ.",
      "content": "Em khiến anh muốn trở thành Hà Nội boy - Sơn Tùng M-TP trở lại với Sky Hà Nội rồi đây!\nSau hành trình chinh phục hàng triệu trái tim với những bản hit đình đám, Sơn Tùng sẽ chính thức tái xuất tại sân khấu, mang đến nguồn năng lượng bùng nổ cùng những khoảnh khắc ngọt ngào khó quên.\nĐặc biệt, lần trở lại này diễn ra đúng dịp kỷ niệm chặng đường âm nhạc của anh, hứa hẹn biến đêm nhạc thành một hành trình cảm xúc không thể bỏ lỡ.",
      "venue": "78 Yên Phụ, Phường Ba Đình, Thành phố Hà Nội",
      "seatMapId": "gai-home-born-pink-map"
    },
    {
      "id": 10,
      "title": "SPARK NITE: S.T SƠN THẠCH x NEKO LÊ",
      "category": "concert",
      "city": "Thành phố Hồ Chí Minh",
      "banner": "https://salt.tkbcdn.com/ts/ds/5e/e7/cc/3ab7025a398cbeff95cdaee943f4a58d.jpg",
      "summary": "Concert quốc tế với quy mô lớn.",
      "content": "Sự kiện concert quy mô lớn với hệ thống âm thanh ánh sáng hiện đại và nhiều hạng vé.",
      "venue": "Lầu 1, Nhà hát Bến Thành Số 6 Mạc Đĩnh Chi, Phường Sài Gòn, Thành phố Hồ Chí Minh",
      "seatMapId": "stadium-a"
    },
    {
      "id": 11,
      "title": "VinhVerse Concert",
      "category": "concert",
      "city": "Nghệ An",
      "banner": "https://salt.tkbcdn.com/ts/ds/5b/0b/ff/40eb7ec28f93290a179f768c7871e6da.jpeg",
      "summary": "Concert với khách mời Quang Hùng MasterD, Rhyder, 24K.Right, CôngB, Hiền Hồ .",
      "content": "Đêm diễn kết hợp nhiều nghệ sĩ quốc tế và khách mời đặc biệt, phù hợp khán giả trẻ.",
      "venue": "Số 6 đường Lê Mao, Phường Thành Vinh, Thành phố Vinh, Tỉnh Nghệ An",
      "seatMapId": "stadium-a"
    },
    {
      "id": 12,
      "title": "ANH TRAI \"SAY HI\" CONCERT - DAY 9",
      "category": "concert",
      "city": "Thành phố Hồ Chí Minh",
      "banner": "https://salt.tkbcdn.com/ts/ds/da/85/17/b6ffb722910203a125c0fd062b52d242.jpeg",
      "summary": "Concert quốc tế lưu diễn.",
      "content": "World Tour là show lưu diễn quốc tế với sân khấu biểu diễn quy mô lớn và lịch diễn nhiều điểm.",
      "venue": "Khu Đô Thị Vạn Phúc, Phường Hiệp Bình, Thành phố Hồ Chí Minh",
      "seatMapId": "hall-e"
    },
    {
      "id": 13,
      "title": "Bùi Lan Hương FANCON",
      "category": "concert",
      "city": "Thành phố Hồ Chí Minh",
      "banner": "https://salt.tkbcdn.com/ts/ds/02/f2/3a/7071ef3959e5a7d8d96d2a76683e6054.jpg",
      "summary": "Concert R&B với màu sắc mạnh.",
      "content": "Show mang màu sắc R&B hiện đại, thiên về trải nghiệm sân khấu và visual nổi bật.",
      "venue": "Số 6 Mạc Đĩnh Chi, Phường Sài Gòn, Thành phố Hồ Chí Minh",
      "seatMapId": "festival-f"
    },
    {
      "id": 14,
      "title": " Đêm nhạc Minh Tuyết - Hoàng Hải",
      "category": "concert",
      "city": "Thành phố Hồ Chí Minh",
      "banner": "https://salt.tkbcdn.com/ts/ds/db/d5/c3/3ad4d14e219502eece6f5eeca4528e6f.jpg",
      "summary": "Concert quốc tế với lượng fan đông.",
      "content": "Show diễn quốc tế với sức chứa lớn, phù hợp cho mô hình bán vé nhiều hạng khu vực.",
      "venue": "Số 6 Mạc Đĩnh Chi, Phường Sài Gòn, Thành phố Hồ Chí Minh",
      "seatMapId": "stadium-a"
    },
    {
      "id": 15,
      "title": "BADASS CITY 2026 - Saigon Hiphop Festival",
      "category": "concert",
      "city": "Thành phố Hồ Chí Minh",
      "banner": "https://salt.tkbcdn.com/ts/ds/31/8c/ed/a7fde7618ba3609f9a1530f3e4fb75dd.jpeg",
      "summary": "Concert quốc tế với phong cách pop-rock.",
      "content": "Miley Cyrus live concert mang năng lượng sân khấu mạnh và set diễn thiên về performance.",
      "venue": "180/1 đường Nguyễn Tất Thành, Phường Xóm Chiếu, Thành phố Hồ Chí Minh",
      "seatMapId": "stadium-a"
    },
    {
      "id": 16,
      "title": "APLUS SAIGON PRESENTS: WADE",
      "category": "concert",
      "city": "Thành phố Hồ Chí Minh",
      "banner": "https://salt.tkbcdn.com/ts/ds/08/a0/a3/3e5095d527f378932aa84a2ddb7d3792.jpg",
      "summary": "Concert quốc tế phong cách thời trang và trình diễn.",
      "content": "G-Dragon Japan Tour là show mang tính trình diễn cao, kết hợp visual và hiệu ứng sân khấu.",
      "venue": "492 Võ Văn Kiệt, Quận 1, Thành Phố Hồ Chí Minh, Phường Cầu Ông Lãnh, Thành phố Hồ Chí Minh",
      "seatMapId": "hall-e"
    },
    {
      "id": 17,
      "title": "Đêm nhạc Bùi Anh Tuấn - Lâm Bảo Ngọc",
      "category": "concert",
      "city": "Hà Nội",
      "banner": "https://salt.tkbcdn.com/ts/ds/88/c7/87/d61b2b073b669f249c66ff36beb8f4c8.jpg",
      "summary": "Concert quốc tế với ban nhạc pop-rock.",
      "content": "Maroon 5 World Tour mang thiên hướng band live, phù hợp bố cục sân vận động hoặc arena.",
      "venue": "Sân vận động Hà Nội",
      "seatMapId": "stadium-a"
    },
    {
      "id": 18,
      "title": "SUPER JUNIOR 20th Anniversary TOUR in HO CHI MINH CITY",
      "category": "concert",
      "city": "Thành phố Hồ Chí Minh",
      "banner": "https://salt.tkbcdn.com/ts/ds/4c/33/45/0e36aee3253a98d8bbc82d8ad2462722.png",
      "summary": "Concert quốc tế.",
      "content": "Đêm diễn BlackPink World Tour với cấu trúc vé nhiều khu tiêu chuẩn và VIP.",
      "venue": "799 Đường Nguyễn Văn Linh, Phường Tân Phong, Quận 7, Thành Phố Hồ Chí Minh",
      "seatMapId": "slay-overview-map"
    },
    {
      "id": 19,
      "title": "APLUS SAIGON PRESENTS TRISHA VU - SOFT OPENING WEEKENDS",
      "category": "concert",
      "city": "Thành phố Hồ Chí Minh",
      "banner": "https://salt.tkbcdn.com/ts/ds/43/61/8c/f1d45d7cc1ac1e2984feba57f2c3c3a0.jpg",
      "summary": "Concert quốc tế.",
      "content": "Đêm diễn BlackPink World Tour với sân khấu và hiệu ứng hình ảnh lớn.",
      "venue": "492 Võ Văn Kiệt, Quận 1, Thành Phố Hồ Chí Minh",
      "seatMapId": "slay-overview-map"
    },
    {
      "id": 20,
      "title": "EXO PLANET #6 - EXhOrizon in HO CHI MINH CITY",
      "category": "concert",
      "city": "Thành phố Hồ Chí Minh",
      "banner": "https://salt.tkbcdn.com/ts/ds/62/e4/3a/a6addcde8ec3cc27a492e97a77ef9360.png",
      "summary": "Concert quốc tế.",
      "content": "Show diễn quốc tế với nhiều hạng vé và khu vực đứng sát sân khấu.",
      "venue": "799 Đường Nguyễn Văn Linh, Phường Tân Mỹ, Thành phố Hồ Chí Minh",
      "seatMapId": "slay-overview-map"
    },
    {
      "id": 21,
      "title": "SUN SONG - THE NEW BEGINNING | TĂNG PHÚC MINI CONCERT",
      "category": "concert",
      "city": "Thành phố Hồ Chí Minh",
      "banner": "https://salt.tkbcdn.com/ts/ds/2f/8c/40/7cf56be8bdb6bf21db0f4a71595c50bb.jpeg",
      "summary": "Concert quốc tế.",
      "content": "Đêm diễn quốc tế với trải nghiệm sân khấu trung tâm và khán đài bao quanh.",
      "venue": "116 Nguyễn Du, Thành phố Hồ Chí Minh",
      "seatMapId": "slay-overview-map"
    },
    {
      "id": 22,
      "title": "[DELODELO SHOW] TRẠM YÊU CONCERT 4 | BĂNG QUA ĐẠI DƯƠNG",
      "category": "concert",
      "city": "Hà Nội",
      "banner": "https://salt.tkbcdn.com/ts/ds/6b/50/1c/edca39451e8851155a0232b86027588b.jpeg",
      "summary": "Concert quốc tế.",
      "content": "Bản diễn BlackPink World Tour với mô hình vé nhiều tầng và khán đài vòng cung.",
      "venue": "Khu đô thị Park City Hà Nội, Lê Trọng Tấn, Dương Nội, Hà Nội, Thành phố Hà Nội",
      "seatMapId": "slay-overview-map"
    },
    {
      "id": 23,
      "title": "1900 Hip Hop Party #21: 24k.Right ",
      "category": "concert",
      "city": "Hà Nội",
      "banner": "https://salt.tkbcdn.com/ts/ds/46/b6/9d/9c968ff32ce4662f4936da2e123c5796.jpg",
      "summary": "Concert quốc tế.",
      "content": "Đêm diễn với cấu trúc khu đứng, VIP và khán đài tiêu chuẩn.",
      "venue": "8B Tạ Hiện, Phường Hoàn Kiếm, Thành phố Hà Nội",
      "seatMapId": "slay-overview-map"
    },
    {
      "id": 24,
      "title": "NO BILL FOR HER: 24K.RIGHT & MASON NGUYEN",
      "category": "concert",
      "city": "Thành phố Hồ Chí Minh",
      "banner": "https://salt.tkbcdn.com/ts/ds/82/94/e1/812a91c6a42fe9551d256cbfa2f8df48.jpg",
      "summary": "Concert quốc tế.",
      "content": "BlackPink World Tour với bố cục sân vận động và nhiều hạng vé khác nhau.",
      "venue": "148 Cống Quỳnh, Phường Bến Thành, Thành phố Hồ Chí Minh",
      "seatMapId": "slay-overview-map"
    },
    {
      "id": 25,
      "title": "BlackPink World Tour",
      "category": "concert",
      "city": "Thành phố Hồ Chí Minh",
      "banner": "https://salt.tkbcdn.com/ts/ds/5d/bd/4c/7e7634e6feb267283819752d0bbb162e.png",
      "summary": "Concert quốc tế.",
      "content": "Đêm diễn quốc tế với mô hình bán vé theo khu sân vận động.",
      "venue": "102 Bàu Cát 5, Phường Tân Bình, Thành phố Hồ Chí Minh",
      "seatMapId": "slay-overview-map"
    },
    {
      "id": 26,
      "title": "Giải bơi",
      "category": "sport",
      "city": "TP.HCM",
      "banner": "https://pix.actiup.net/2026/03/13/1773391800670286/banner-ba%CC%81n-ve%CC%81.jpg",
      "summary": "Giải bơi.",
      "content": "Giải bơi với các khu khán đài theo nhiều mức giá.",
      "venue": "TP.HCM",
      "seatMapId": "festival-f"
    },
    {
      "id": 27,
      "title": "Giải bóng đá sinh viên",
      "category": "sport",
      "city": "Hà Nội",
      "banner": "https://salt.tkbcdn.com/ts/ds/ec/9b/e4/4a28525adb60c8e14f1f10131f0d5dcb.png",
      "summary": "Thi đấu kịch tính.",
      "content": "Giải bóng đá sinh viên với không khí cổ động sôi động.",
      "venue": "Hà Nội",
      "seatMapId": "festival-f"
    },
    {
      "id": 28,
      "title": "VIETNAM COLLEGIATE BASKETBALL CHAMPIONSHIP 2025 - 2026 ",
      "category": "sport",
      "city": "Hà Nội",
      "banner": "https://salt.tkbcdn.com/ts/ds/ca/3a/69/b7f0645cdbfecb2552850fab14c225a6.jpg",
      "summary": "Thi đấu kịch tính.",
      "content": "VBA là Giải Bóng Rổ Chuyên Nghiệp đầu tiên tại Việt Nam được xây dựng theo mô hình chuyên nghiệp quốc tế. Ra đời vào năm 2016, đến nay số lượng đội tuyển tham gia VBA đã nâng lên con số 7 gồm Thang Long Warriors, Hanoi Buffaloes, Cantho Catfish, HCMC Wings, Saigon Heat, Danang Dragons và Nha Trang Dolphins.Được thành lập vào năm 2011, Saigon Heat là đội bóng rổ chuyên nghiệp đầu tiên đại diện Việt Nam tham dự Giải Bóng rổ nhà nghề Đông Nam Á – ABL. Hiện tại, Saigon Heat là nhà đương kim vô địch 3 lần liên tiếp trong lịch sử giải đấu Giải Bóng Rổ Chuyên Nghiệp Việt Nam – mùa giải VBA 2019 và 2020 và 2022, 2023 Vé đã mua không được đổi trả với bất kỳ lý do gì!",
      "venue": "17 Phạm Hùng, Phường Cầu Giấy, Thành phố Hà Nội",
      "seatMapId": "festival-f"
    },
    {
      "id": 29,
      "title": "VBA 2024 - SAIGON HEAT VS NHA TRANG DOLPHINS",
      "category": "sport",
      "city": "Hà Nội",
      "banner": "https://salt.tkbcdn.com/ts/ds/9b/70/96/d5fcba94a5390448be39e32f22519b31.jpg",
      "summary": "Thi đấu kịch tính.",
      "content": "Game show tương tác trực tiếp với nhiều khu ghế tiêu chuẩn.",
      "venue": "Số 86 đường 23, Phường Tân Phú, Quận 7, Thành Phố Hồ Chí Minh",
      "seatMapId": "festival-f"
    },
    {
      "id": 30,
      "title": "Giải đấu PICKLEBALL TỨ HÙNG 2026",
      "category": "sport",
      "city": "Hà Nội",
      "banner": "https://salt.tkbcdn.com/ts/ds/df/b5/42/ff357cffe19a0020eaa8361dbdd8233e.jpeg",
      "summary": "Thi đấu kịch tính.",
      "content": "Game show tương tác trực tiếp với nhiều khu ghế tiêu chuẩn.",
      "venue": "70 An Dương, Hồng Hà, Hà Nội, Phường Hồng Hà, Thành phố Hà Nội",
      "seatMapId": "festival-f"
    },
    {
      "id": 31,
      "title": "VBA STAR X 2025 | Final 1 - Home Game of Hanoi Buffaloes",
      "category": "sport",
      "city": "Hà Nội",
      "banner": "https://salt.tkbcdn.com/ts/ds/c9/18/51/89c8571be5519fad0bb9f888e12a4295.jpg",
      "summary": "Thi đấu kịch tính.",
      "content": "Game show tương tác trực tiếp với nhiều khu ghế tiêu chuẩn.",
      "venue": "101 Võ Chí Công, Phường Xuân La, Quận Tây Hồ, Thành Phố Hà Nội",
      "seatMapId": "hall-e"
    },
    {
      "id": 32,
      "title": "Saigon Pro-Am Basketball Cup 2025",
      "category": "sport",
      "city": "Thành Phố Hồ Chí Minh",
      "banner": "https://salt.tkbcdn.com/ts/ds/d1/83/f4/429a8d3e1a7b59835d0a911da65fce48.jpg",
      "summary": "Thi đấu kịch tính.",
      "content": "Game show tương tác trực tiếp với nhiều khu ghế tiêu chuẩn.",
      "venue": "Số 2 Hồ Xuân Hương, Phường 06, Quận 3, Thành Phố Hồ Chí Minh",
      "seatMapId": "hall-e"
    },
    {
      "id": 33,
      "title": "PPA TOUR ASIA - VIETNAM CUP 2025",
      "category": "sport",
      "city": "Đà Nẵng",
      "banner": "https://salt.tkbcdn.com/ts/ds/ce/e9/46/578d016dc7517ff4495e6306d09ff1b9.jpeg",
      "summary": "Thi đấu kịch tính.",
      "content": "Game show tương tác trực tiếp with nhiều khu ghế tiêu chuẩn.",
      "venue": "Đường Phan Đăng Lưu, Phường Hòa Cường Bắc, Quận Hải Châu, Thành Phố Đà Nẵng",
      "seatMapId": "hall-e"
    },
    {
      "id": 34,
      "title": "VBA STAR X 2025 | Game 17 - Danang Dragons vs Ho Chi Minh City Wings",
      "category": "sport",
      "city": "Đà Nẵng",
      "banner": "https://salt.tkbcdn.com/ts/ds/b7/2c/4e/b3ac54fc3962ec3c791aad44b5268909.jpg",
      "summary": "Thi đấu kịch tính.",
      "content": "Game show tương tác trực tiếp with nhiều khu ghế tiêu chuẩn.",
      "venue": "Số 7 Duy Tân, Phường Hòa Cường Bắc, Quận Hải Châu, Thành Phố Đà Nẵng",
      "seatMapId": "hall-e"
    },
    {
      "id": 35,
      "title": "Chung Kết Muay Thai Rampage x Road to One - FINALE",
      "category": "sport",
      "city": "Thành Phố Hồ Chí Minh",
      "banner": "https://salt.tkbcdn.com/ts/ds/49/41/95/e76f6cc9b2f136ec397cbe181ce82d43.jpg",
      "summary": "Thi đấu kịch tính.",
      "content": "Game show tương tác trực tiếp with nhiều khu ghế tiêu chuẩn.",
      "venue": "Số 86 đường 23, Phường Tân Phú, Quận 7, Thành Phố Hồ Chí Minh",
      "seatMapId": "festival-f"
    },
    {
      "id": 36,
      "title": "VIETNAM PRO-AM BASKETBALL CHAMPIONSHIP 2025 - 2026",
      "category": "sport",
      "city": "Hà Nội",
      "banner": "https://salt.tkbcdn.com/ts/ds/2d/31/3d/4b0f9252bc35025a06be58f823fcd231.jpg",
      "summary": "Thi đấu kịch tính.",
      "content": "Game show tương tác trực tiếp with nhiều khu ghế tiêu chuẩn.",
      "venue": "35 TRẦN QUÝ KIÊN, Quận Cầu Giấy, Thành Phố Hà Nội",
      "seatMapId": "festival-f"
    },
    {
      "id": 37,
      "title": "Hanoi Pro-Am Basketball Championship 2026",
      "category": "sport",
      "city": "Hà Nội",
      "banner": "https://salt.tkbcdn.com/ts/ds/7f/66/cc/fb7e3ff3e6c96e8aceed9b4a875222f8.jpg",
      "summary": "Thi đấu kịch tính.",
      "content": "Game show tương tác trực tiếp with nhiều khu ghế tiêu chuẩn.",
      "venue": " Nhà Thi Đấu Phường Cầu Giấy - 35 Trần Quý Kiên, Phường Cầu Giấy, Thành phố Hà Nội",
      "seatMapId": "festival-f"
    },
    {
      "id": 38,
      "title": "GIẢI CHẠY \"30 STEPS OF MEMORIES - 30 CHẶNG KÝ ỨC SUỐI TIÊN\"",
      "category": "sport",
      "city": "Hà Nội",
      "banner": "https://salt.tkbcdn.com/ts/ds/07/05/49/90cb4f68655f43e07248d1fd8aa4b649.jpg",
      "summary": "Thi đấu kịch tính.",
      "content": "Game show tương tác trực tiếp with nhiều khu ghế tiêu chuẩn.",
      "venue": "KHU DU LỊCH VĂN HÓA SUỐI TIÊN\n120 Xa lộ Hà Nội, Phường Tân Phú, Quận 9, Thành Phố Hồ Chí Minh",
      "seatMapId": "festival-f"
    },
    {
      "id": 39,
      "title": "Dogathon - Chạy vì Tương lai Chó Mèo Việt Nam",
      "category": "sport",
      "city": "Hà Nội",
      "banner": "https://salt.tkbcdn.com/ts/ds/94/c2/82/7bf0d237cb4319780d280e9d72b9be3e.png",
      "summary": "Lễ hội truyền thống với nhiều hoạt động văn hóa.",
      "content": "Tên sự kiện: Lễ hội Đền Hùng 2026\n\nHoạt động chính:\n- Lễ cúng tổ tiên\n- Biểu diễn nghệ thuật dân gian\n- Trò chơi dân gian",
      "venue": "Công viên Cảnh Đồi\nPhú Mỹ Hưng, Quận 7, Thành Phố Hồ Chí Minh",
      "seatMapId": "festival-f"
    },
    {
      "id": 40,
      "title": "Valentine",
      "category": "specialV",
      "city": "Trái tim người bạn yêu",
      "banner": "https://tse2.mm.bing.net/th/id/OIP.ciXmGpSpy4T0Sy20EtyZGAHaEo?rs=1&pid=ImgDetMain&o=7&rm=3",
      "summary": "Sự kiện đặc biệt.",
      "content": "Sự kiện Valentine with không gian trải nghiệm và khu vào cổng đơn giản.",
      "venue": "Bên cạnh người bạn giúp bạn cảm thấy hạnh phúc nhất",
      "seatMapId": "festival-f"
    },
    {
      "id": 41,
      "title": "VIETCHARM: KHI DI SẢN HÓA VŨ ĐIỆU - Live The Legacy",
      "category": "art",
      "city": "Thành phố Hồ Chí Minh",
      "banner": "https://salt.tkbcdn.com/ts/ds/66/a5/7b/2deaf91c7f537d93a6aeeef77728335f.png",
      "summary": "Lễ hội văn hóa with nhiều khu hoạt động và vé vào cổng miễn phí.",
      "content": "Tên sự kiện: Lễ hội Văn hóa & Ẩm thực Hà Nội 2026\n\nHoạt động chính:\n- Múa rối nước\n- Quan họ\n- Ẩm thực 50 gian hàng\n- Workshop thủ công",
      "venue": "Khuôn viên Dinh Độc Lập\n108 Nguyễn Du, Phường Sài Gòn, Thành phố Hồ Chí Minh",
      "seatMapId": "festival-f"
    },
      {
      "id": 42,
      "title": "Sân khấu 5B : Kịch thiếu nhi 'TRẠM CỨU HỘ ĐỘNG VẬT'",
      "category": "art",
      "city": "Thành phố Hồ Chí Minh",
      "banner": "https://salt.tkbcdn.com/ts/ds/93/17/38/c1f681c6a360754fcb9ef908d357a872.jpg",
      "summary": "Lễ hội văn hóa with nhiều khu hoạt động và vé vào cổng miễn phí.",
      "content": "Muôn loài động vật sinh sống hòa hợp giữa rừng xanh, làm bạn cùng cô y tá tốt bụng. Một ngày, tất cả phải bắt tay nhau, đoàn kết phá vỡ âm mưu bắt cóc của nhóm thợ săn, bảo vệ sự phát triển bền vững của tự nhiên. Vở kịch 120 phút tưng bừng, nhiều ca khúc, vũ đạo vui nhộn với phần trình diễn ảo thuật của nghệ sỹ Huỳnh Nhu.",
      "venue": "Nhà hát Kịch Sân khấu Nhỏ\n5B Võ Văn Tần, Thành phố Hồ Chí Minh",
      "seatMapId": "festival-f"
    },
      {
      "id": 43,
      "title": "Ký Ức Hội An - Hoi An Memories Show",
      "category": "art",
      "city": "Hội An ",
      "banner": "https://salt.tkbcdn.com/ts/ds/e4/84/c6/a10198f2f8506dd66369cf3a883f713f.jpg",
      "summary": "Lễ hội văn hóa with nhiều khu hoạt động và vé vào cổng miễn phí.",
      "content": `Phần 1: SINH MỆNH - KÝ ỨC HỘI AN VỀ THUỞ KHAI HOANG LẬP ẤP
Một vùng đất mới được bắt đầu từ những mầm sống, những sinh mệnh được sinh ra, cất tiếng khóc chào đời, mở ra những kỷ nguyên mới mẻ. Đó cũng là khởi nguyên của câu chuyện mà chiếc khung cửi ngàn năm kể lại. Sợi tơ vương dệt nên từ những nhịp kéo đầu tiên trên con đường thời gian, những tà áo dài trắng, đưa khán giả trở về cùng “Sinh mệnh”.
Phần 2: ĐÁM CƯỚI - KÝ ỨC HỘI AN THỜI KỲ VĂN HOÁ CHĂM PA
Dựa trên câu chuyện bang giao nổi tiếng trong lịch sử - hôn lễ của Huyền Trân công chúa và Vua Chế Mân, "Đám Cưới" tái hiện lại khung cảnh muôn màu rực rỡ của quá khứ vàng son và ý chí gây dựng sự bình yên, hưng thịnh cho dân tộc của cha ông xưa.
Phần 3: ĐÈN VÀ BIỂN - KÝ ỨC HỘI AN TRONG GIAI ĐOẠN CHUYỂN MÌNH
Vươn mình ra biển lớn, những người con trai Hội An đầy khí phách mang trong mình dòng máu hào hùng luôn sẵn sàng đương đầu sóng gió vì một tương lai phồn vinh cho đất nước. Những chàng trai ấy, dù phải vượt qua bao khó khăn, thử thách vẫn luôn vững lòng hướng về phía trước bởi sâu trong tim họ, ánh đèn ấm áp nơi quê nhà vẫn luôn cháy trong tim, ánh lửa soi đường cho họ chính là tình yêu bất diệt của những người con gái Hội An thủy chung, son sắt.


PHẦN 4: HỘI NHẬP - KÝ ỨC HỘI AN VỀ THỜI KỲ GIAO THOA VĂN HOÁ ĐA QUỐC GIA
Sợi tơ thời gian bừng sáng trên khung cửi ký ức, mở ra một không gian đẹp đẽ... Với cửa biển rộng mở như tấm lòng của người dân nơi đây, Hội An đã trở thành một cảng thị tấp nập với bản sắc văn hóa độc đáo đến từ nhiều quốc gia. Các thương nhân từ khắp nơi trên thế giới, đã mang tới nơi đây không chỉ là các sản vật mà còn là những giá trị văn minh của toàn nhân loại tạo nên một thương cảng Hội An vàng son rực rỡ một thời.

PHẦN 5: ÁO DÀI - SỰ KẾT HỢP PHỐ HỘI HOÀI CỔ VÀ HIỆN ĐẠI
Năm tháng trôi đi, Hội An qua bao thăng trầm, vẫn vẹn nguyên dáng vẻ của một mảnh đất bình yên, thơ mộng, đẹp dịu dàng như tà áo dài của người con gái Việt. Vẻ đẹp đó đã vượt qua không gian và thời gian, làm nên biểu tượng thiêng liêng của đất nước.
`,
      "venue": `Ký Ức Hội An - Hoi An Memories Show
Hội An Memories Land - Lối vào đường Nguyễn Tri Phương, Phường Cẩm Nam, Thành Phố Hội An, Tỉnh Quảng Nam`,
      "seatMapId": "festival-f"
    },
          {
      "id": 44,
      "title": "Chào Show",
      "category": "art",
      "city": "Thành phố Hồ Chí Minh",
      "banner": "https://salt.tkbcdn.com/ts/ds/04/ae/18/9ee650dff5237d8bcfdb2f92aa049e1c.jpg",
      "summary": "Lễ hội văn hóa with nhiều khu hoạt động và vé vào cổng miễn phí.",
      "content": `Chương trình nghệ thuật đặc sắc Chào Show tôn vinh âm nhạc Việt Nam qua 30 nhạc cụ dân tộc độc đáo, có thể nói là dàn nhạc cụ dân tộc đầy đủ và độc lạ nhất hiện nay trong nước, mà chỉ hành trình sưu tầm tái tạo nhạc cụ cũng đã là một câu chuyện kì thú. Với 12 chương nhạc mang đậm tinh thần âm nhạc dân gian, do Trần Mạnh Hùng, một trong những nhạc sĩ hàng đầu của nền khí nhạc Việt nam sáng tác riêng cho Chào Show, chương trình đưa khán giả vào hành trình khám phá các vùng miền từ Bắc vào Nam, thưởng thức Bản sắc Việt trong âm nhạc. Được đạo diễn bởi đạo diễn Tất Mi Loan.
Một điểm độc đáo nữa của Chào Show là sự kết hợp ngoạn mục giữa âm nhạc, hình ảnh, và 8 món ăn chơi từ ẩm thực đặc trưng của từng vùng miền.  Sân khấu Chào Show là nơi đầu tiên tại Việt Nam đầu tư Hệ thống âm thanh Immersive Audio, công nghệ âm thanh  mới nhất hiện nay. Giải pháp công nghệ này cho phép người nghe trải nghiệm âm thanh 3D, và ngồi ở bất kì vị trí nào trong khán phòng lớn cũng thưởng thức được âm thanh  như ngồi ở vị trí trung tâm.`,
      "venue": "số 6 Nguyễn Siêu, Phường Sài Gòn, Thành phố Hồ Chí Minh",
      "seatMapId": "festival-f"
    },
          {
      "id": 45,
      "title": "Nhà Hát Kịch IDECAF: Quạ Hồng Tung Cánh",
      "category": "art",
      "city": "Thành phố Hồ Chí Minh",
      "banner": "https://salt.tkbcdn.com/ts/ds/c9/a9/12/6b50399d3b054c1d548adeb905ee452a.jpeg",
      "summary": "Lễ hội văn hóa with nhiều khu hoạt động và vé vào cổng miễn phí.",
      "content": `Vở diễn: Quạ Hồng Tung Cánh 

Tác giả & Đạo diễn: Quang Thảo 

Diễn viên: Thanh Thủy, Mỹ Duyên, Đình Toàn, Đại Nghĩa, Trịnh Minh Dũng và Quang Thảo`,
      "venue": "Số 28 Lê Thánh Tôn., Phường Bến Nghé, Quận 1, Thành Phố Hồ Chí Minh",
      "seatMapId": "festival-f"
    },
          {
      "id": 46,
      "title": "Sân Khấu Hồng Vân: Ảnh Ảo",
      "category": "art",
      "city": "Thành phố Hồ Chí Minh",
      "banner": "https://salt.tkbcdn.com/ts/ds/84/e6/f5/f82c3cea1f2badc2a7416b6555e466fe.jpg",
      "summary": "Lễ hội văn hóa with nhiều khu hoạt động và vé vào cổng miễn phí.",
      "content": `Giới thiệu sự kiện:

Tác giả: Minh Hoàng

Đạo diễn: Lê Nguyễn Tuấn Anh

Cố vấn nghệ thuật: NSND Hồng Vân

Thiết kế sân khấu: Trần Đông - Văn Xin

Thực hiện trang trí: Cty VTTM

Ánh sáng: Dũng Râu Âm thanh: Hiền Phương - Hiếu Sabo

Thành phần Diễn viên: NSƯT PHẠM THỊ THANH VÂN (ỐC THANH VÂN) vai CÔ ÚT NGUYỄN HOÀ HIỆP vai ÔNG TIẾN LẠC HOÀNG LONG vai ÔNG SỬU LÊ NGUYỄN TUẤN DŨNG vai KHÔI BÙI CÔNG DANH vai ÔNG NAM LÊ NGUYỄN TUẤN ANH vai LÝ TIỀN TÀI NGUYỄN NGỌC KHÁNH TIÊN (KHÁNH TIÊN LEONA) vai THUỶ TRẦN TRÚC ANH vai BÉ YẾN CAO PHƯƠNG THUÝ vai GIÚP VIỆC TRẦN PHAN HOÀNG YẾN vai GIÚP VIỆC TÔ KIM NGÂN vai GIÚP VIỆC`,
      "venue": "643 Điện Biên Phủ, (Nhà văn hóa Sinh Viên), Phường 01, Quận 3, Thành Phố Hồ Chí Minh",
      "seatMapId": "festival-f"
    },
          {
      "id": 47,
      "title": "APLUS SAIGON PRESENTS: OLYMPE",
      "category": "art",
      "city": "Thành phố Hồ Chí Minh",
      "banner": "https://salt.tkbcdn.com/ts/ds/e2/79/c4/c04f9af3fd9c50f44a68978d9d58fc2d.jpg",
      "summary": "Lễ hội văn hóa with nhiều khu hoạt động.",
      "content": `Từ những lễ hội âm nhạc lớn nhất hành tinh, Tomorrowland, ULTRA Music Festival và Awakenings đến các sàn nhảy huyền thoại như Amnesia và Pacha Ibiza, OLYMPE đã xây dựng dấu ấn với những set nhạc đầy mê hoặc, kết hợp giữa giai điệu sâu lắng và nguồn năng lượng bùng nổ. Xuất thân là một nghệ sĩ piano cổ điển, nay chinh phục các sàn nhảy trên khắp thế giới, âm nhạc của cô linh hoạt giữa house, garage, tech-house và techno - mạnh mẽ, giàu cảm xúc và cực kỳ cá tính.`,
      "venue": "492 Võ Văn Kiệt, Quận 1, Thành phố Hồ Chí Minh, Phường Cầu Ông Lãnh, Thành phố Hồ Chí Minh",
      "seatMapId": "festival-f"
    },
          {
      "id": 48,
      "title": "TEDxUMT University 2025 | WHERE X MARK THE SPARK",
      "category": "art",
      "city": "Hà Nội",
      "banner": "https://salt.tkbcdn.com/ts/ds/0a/d8/81/3e370f32bd15a23a766886d0ee38ee98.png",
      "summary": "Lễ hội văn hóa with nhiều khu hoạt động và vé vào cổng miễn phí.",
      "content": `Năm 2026, TEDxUMT University lần đầu tiên được tổ chức tại Trường Đại học Quản lý và Công nghệ TP.HCM (UMT), với mong muốn tạo nên một diễn đàn nơi những ý tưởng đột phá và câu chuyện truyền cảm hứng được lan tỏa rộng rãi.

Với chủ đề “WHERE X MARK THE SPARK”, sự kiện năm nay đặt ra một câu hỏi cốt lõi: Làm thế nào để khám phá và thắp lên "tia lửa" tiềm năng ẩn giấu bên trong mỗi chúng ta, giữa những áp lực và định kiến của xã hội? Thông qua những câu chuyện chân thực và góc nhìn sâu sắc, chương trình không chỉ truyền cảm hứng mà còn cung cấp những phương pháp thực tế, giúp người trẻ tự tin định nghĩa "ẩn số X" của riêng mình và can đảm tạo ra dấu ấn khác biệt.`,
      "venue": "Số 2 Đường 60CL, Khu phố 9, Phường Cát Lái, Quận 2, Thành Phố Hồ Chí Minh",
      "seatMapId": "festival-f"
    },
          {
      "id": 49,
      "title": "Thanh Gươm Và Bà Mẹ",
      "category": "art",
      "city": "Thành phố Hồ Chí Minh",
      "banner": "https://salt.tkbcdn.com/ts/ds/70/98/e1/ef05f5f1a17b9c627aea09750319d742.png",
      "summary": "Lễ hội văn hóa with nhiều khu hoạt động và vé vào cổng miễn phí.",
      "content": "Tên sự kiện: Lễ hội Văn hóa & Ẩm thực Hà Nội 2026\n\nHoạt động chính:\n- Múa rối nước\n- Quan họ\n- Ẩm thực 50 gian hàng\n- Workshop thủ công",
      "venue": "30 Trần Hưng Đạo, Phường Bến Thành, Thành phố Hồ Chí Minh",
      "seatMapId": "festival-f"
    },    
      {
      "id": 41,
      "title": "Lễ hội Văn hóa & Ẩm thực Hà Nội 2026",
      "category": "art",
      "city": "Hà Nội",
      "banner": "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      "summary": "Lễ hội văn hóa with nhiều khu hoạt động và vé vào cổng miễn phí.",
      "content": "Tên sự kiện: Lễ hội Văn hóa & Ẩm thực Hà Nội 2026\n\nHoạt động chính:\n- Múa rối nước\n- Quan họ\n- Ẩm thực 50 gian hàng\n- Workshop thủ công",
      "venue": "Công viên Hòa Bình",
      "seatMapId": "festival-f"
    },
          {
      "id": 41,
      "title": "Lễ hội Văn hóa & Ẩm thực Hà Nội 2026",
      "category": "art",
      "city": "Hà Nội",
      "banner": "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      "summary": "Lễ hội văn hóa with nhiều khu hoạt động và vé vào cổng miễn phí.",
      "content": "Tên sự kiện: Lễ hội Văn hóa & Ẩm thực Hà Nội 2026\n\nHoạt động chính:\n- Múa rối nước\n- Quan họ\n- Ẩm thực 50 gian hàng\n- Workshop thủ công",
      "venue": "Công viên Hòa Bình",
      "seatMapId": "festival-f"
    },
          {
      "id": 41,
      "title": "Lễ hội Văn hóa & Ẩm thực Hà Nội 2026",
      "category": "art",
      "city": "Hà Nội",
      "banner": "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      "summary": "Lễ hội văn hóa with nhiều khu hoạt động và vé vào cổng miễn phí.",
      "content": "Tên sự kiện: Lễ hội Văn hóa & Ẩm thực Hà Nội 2026\n\nHoạt động chính:\n- Múa rối nước\n- Quan họ\n- Ẩm thực 50 gian hàng\n- Workshop thủ công",
      "venue": "Công viên Hòa Bình",
      "seatMapId": "festival-f"
    },
          {
      "id": 41,
      "title": "Lễ hội Văn hóa & Ẩm thực Hà Nội 2026",
      "category": "art",
      "city": "Hà Nội",
      "banner": "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      "summary": "Lễ hội văn hóa with nhiều khu hoạt động và vé vào cổng miễn phí.",
      "content": "Tên sự kiện: Lễ hội Văn hóa & Ẩm thực Hà Nội 2026\n\nHoạt động chính:\n- Múa rối nước\n- Quan họ\n- Ẩm thực 50 gian hàng\n- Workshop thủ công",
      "venue": "Công viên Hòa Bình",
      "seatMapId": "festival-f"
    },
          {
      "id": 41,
      "title": "Lễ hội Văn hóa & Ẩm thực Hà Nội 2026",
      "category": "art",
      "city": "Hà Nội",
      "banner": "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      "summary": "Lễ hội văn hóa with nhiều khu hoạt động và vé vào cổng miễn phí.",
      "content": "Tên sự kiện: Lễ hội Văn hóa & Ẩm thực Hà Nội 2026\n\nHoạt động chính:\n- Múa rối nước\n- Quan họ\n- Ẩm thực 50 gian hàng\n- Workshop thủ công",
      "venue": "Công viên Hòa Bình",
      "seatMapId": "festival-f"
    },
          {
      "id": 41,
      "title": "Lễ hội Văn hóa & Ẩm thực Hà Nội 2026",
      "category": "art",
      "city": "Hà Nội",
      "banner": "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      "summary": "Lễ hội văn hóa with nhiều khu hoạt động và vé vào cổng miễn phí.",
      "content": "Tên sự kiện: Lễ hội Văn hóa & Ẩm thực Hà Nội 2026\n\nHoạt động chính:\n- Múa rối nước\n- Quan họ\n- Ẩm thực 50 gian hàng\n- Workshop thủ công",
      "venue": "Công viên Hòa Bình",
      "seatMapId": "festival-f"
    },
          {
      "id": 41,
      "title": "Lễ hội Văn hóa & Ẩm thực Hà Nội 2026",
      "category": "art",
      "city": "Hà Nội",
      "banner": "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      "summary": "Lễ hội văn hóa with nhiều khu hoạt động và vé vào cổng miễn phí.",
      "content": "Tên sự kiện: Lễ hội Văn hóa & Ẩm thực Hà Nội 2026\n\nHoạt động chính:\n- Múa rối nước\n- Quan họ\n- Ẩm thực 50 gian hàng\n- Workshop thủ công",
      "venue": "Công viên Hòa Bình",
      "seatMapId": "festival-f"
    },
          {
      "id": 41,
      "title": "Lễ hội Văn hóa & Ẩm thực Hà Nội 2026",
      "category": "art",
      "city": "Hà Nội",
      "banner": "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      "summary": "Lễ hội văn hóa with nhiều khu hoạt động và vé vào cổng miễn phí.",
      "content": "Tên sự kiện: Lễ hội Văn hóa & Ẩm thực Hà Nội 2026\n\nHoạt động chính:\n- Múa rối nước\n- Quan họ\n- Ẩm thực 50 gian hàng\n- Workshop thủ công",
      "venue": "Công viên Hòa Bình",
      "seatMapId": "festival-f"
    },
          {
      "id": 41,
      "title": "Lễ hội Văn hóa & Ẩm thực Hà Nội 2026",
      "category": "art",
      "city": "Hà Nội",
      "banner": "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      "summary": "Lễ hội văn hóa with nhiều khu hoạt động và vé vào cổng miễn phí.",
      "content": "Tên sự kiện: Lễ hội Văn hóa & Ẩm thực Hà Nội 2026\n\nHoạt động chính:\n- Múa rối nước\n- Quan họ\n- Ẩm thực 50 gian hàng\n- Workshop thủ công",
      "venue": "Công viên Hòa Bình",
      "seatMapId": "festival-f"
    },
          {
      "id": 41,
      "title": "Lễ hội Văn hóa & Ẩm thực Hà Nội 2026",
      "category": "art",
      "city": "Hà Nội",
      "banner": "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      "summary": "Lễ hội văn hóa with nhiều khu hoạt động và vé vào cổng miễn phí.",
      "content": "Tên sự kiện: Lễ hội Văn hóa & Ẩm thực Hà Nội 2026\n\nHoạt động chính:\n- Múa rối nước\n- Quan họ\n- Ẩm thực 50 gian hàng\n- Workshop thủ công",
      "venue": "Công viên Hòa Bình",
      "seatMapId": "festival-f"
    },
          {
      "id": 41,
      "title": "Lễ hội Văn hóa & Ẩm thực Hà Nội 2026",
      "category": "art",
      "city": "Hà Nội",
      "banner": "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      "summary": "Lễ hội văn hóa with nhiều khu hoạt động và vé vào cổng miễn phí.",
      "content": "Tên sự kiện: Lễ hội Văn hóa & Ẩm thực Hà Nội 2026\n\nHoạt động chính:\n- Múa rối nước\n- Quan họ\n- Ẩm thực 50 gian hàng\n- Workshop thủ công",
      "venue": "Công viên Hòa Bình",
      "seatMapId": "festival-f"
    },
          {
      "id": 41,
      "title": "Lễ hội Văn hóa & Ẩm thực Hà Nội 2026",
      "category": "art",
      "city": "Hà Nội",
      "banner": "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      "summary": "Lễ hội văn hóa with nhiều khu hoạt động và vé vào cổng miễn phí.",
      "content": "Tên sự kiện: Lễ hội Văn hóa & Ẩm thực Hà Nội 2026\n\nHoạt động chính:\n- Múa rối nước\n- Quan họ\n- Ẩm thực 50 gian hàng\n- Workshop thủ công",
      "venue": "Công viên Hòa Bình",
      "seatMapId": "festival-f"
    },
          {
      "id": 41,
      "title": "Lễ hội Văn hóa & Ẩm thực Hà Nội 2026",
      "category": "art",
      "city": "Hà Nội",
      "banner": "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      "summary": "Lễ hội văn hóa with nhiều khu hoạt động và vé vào cổng miễn phí.",
      "content": "Tên sự kiện: Lễ hội Văn hóa & Ẩm thực Hà Nội 2026\n\nHoạt động chính:\n- Múa rối nước\n- Quan họ\n- Ẩm thực 50 gian hàng\n- Workshop thủ công",
      "venue": "Công viên Hòa Bình",
      "seatMapId": "festival-f"
    },
          {
      "id": 41,
      "title": "Lễ hội Văn hóa & Ẩm thực Hà Nội 2026",
      "category": "art",
      "city": "Hà Nội",
      "banner": "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      "summary": "Lễ hội văn hóa with nhiều khu hoạt động và vé vào cổng miễn phí.",
      "content": "Tên sự kiện: Lễ hội Văn hóa & Ẩm thực Hà Nội 2026\n\nHoạt động chính:\n- Múa rối nước\n- Quan họ\n- Ẩm thực 50 gian hàng\n- Workshop thủ công",
      "venue": "Công viên Hòa Bình",
      "seatMapId": "festival-f"
    },
          {
      "id": 41,
      "title": "Lễ hội Văn hóa & Ẩm thực Hà Nội 2026",
      "category": "art",
      "city": "Hà Nội",
      "banner": "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      "summary": "Lễ hội văn hóa with nhiều khu hoạt động và vé vào cổng miễn phí.",
      "content": "Tên sự kiện: Lễ hội Văn hóa & Ẩm thực Hà Nội 2026\n\nHoạt động chính:\n- Múa rối nước\n- Quan họ\n- Ẩm thực 50 gian hàng\n- Workshop thủ công",
      "venue": "Công viên Hòa Bình",
      "seatMapId": "festival-f"
    },
          {
      "id": 41,
      "title": "Lễ hội Văn hóa & Ẩm thực Hà Nội 2026",
      "category": "art",
      "city": "Hà Nội",
      "banner": "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      "summary": "Lễ hội văn hóa with nhiều khu hoạt động và vé vào cổng miễn phí.",
      "content": "Tên sự kiện: Lễ hội Văn hóa & Ẩm thực Hà Nội 2026\n\nHoạt động chính:\n- Múa rối nước\n- Quan họ\n- Ẩm thực 50 gian hàng\n- Workshop thủ công",
      "venue": "Công viên Hòa Bình",
      "seatMapId": "festival-f"
    },
          {
      "id": 41,
      "title": "Lễ hội Văn hóa & Ẩm thực Hà Nội 2026",
      "category": "art",
      "city": "Hà Nội",
      "banner": "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      "summary": "Lễ hội văn hóa with nhiều khu hoạt động và vé vào cổng miễn phí.",
      "content": "Tên sự kiện: Lễ hội Văn hóa & Ẩm thực Hà Nội 2026\n\nHoạt động chính:\n- Múa rối nước\n- Quan họ\n- Ẩm thực 50 gian hàng\n- Workshop thủ công",
      "venue": "Công viên Hòa Bình",
      "seatMapId": "festival-f"
    },
          {
      "id": 41,
      "title": "Lễ hội Văn hóa & Ẩm thực Hà Nội 2026",
      "category": "art",
      "city": "Hà Nội",
      "banner": "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      "summary": "Lễ hội văn hóa with nhiều khu hoạt động và vé vào cổng miễn phí.",
      "content": "Tên sự kiện: Lễ hội Văn hóa & Ẩm thực Hà Nội 2026\n\nHoạt động chính:\n- Múa rối nước\n- Quan họ\n- Ẩm thực 50 gian hàng\n- Workshop thủ công",
      "venue": "Công viên Hòa Bình",
      "seatMapId": "festival-f"
    },
  ],
  "schedules": [
    {
      "id": "s1",
      "eventId": "1",
      "date": "2026-05-10",
      "time": "19:00 - 23:00",
      "location": "TP.HCM",
      "zonePrices": { "RED": 500000, "YELLOW": 300000, "GREEN": 200000 }
    },
    {
      "id": "s1_hp",
      "eventId": "1",
      "date": "2026-05-18",
      "time": "19:00 - 23:00",
      "location": "Hải Phòng",
      "zonePrices": { "RED": 550000, "YELLOW": 350000, "GREEN": 250000 }
    },
    {
      "id": "s1_hn",
      "eventId": "1",
      "date": "2026-05-31",
      "time": "20:00 - 23:00",
      "location": "Hà Nội",
      "zonePrices": { "RED": 700000, "YELLOW": 450000, "GREEN": 300000 }
    },
    {
      "id": "s2",
      "eventId": "2",
      "date": "2026-05-15",
      "time": "19:00 - 23:00",
      "location": "Hà Nội",
      "zonePrices": {
        "BORNPINK": 8800000,
        "VIP": 6800000,
        "SPECIALA": 5800000,
        "SPECIALB": 4800000,
        "GA": 3800000,
        "BALCONY_GREEN": 3300000,
        "BALCONY_ORANGE": 2800000,
        "BALCONY_PINK": 2300000
      }
    },
    {
      "id": "s3",
      "eventId": "3",
      "date": "2026-05-19",
      "time": "19:30 - 22:30",
      "location": "Hà Nội",
      "zonePrices": {
        "FANZONE": 2700000,
        "SVIP": 5500000,
        "VIP": 4300000,
        "GA1": 1600000,
        "GA2": 1100000,
        "GA3": 800000,
        "CAT1": 1600000,
        "CAT2": 1300000,
        "SKY1": 12500000,
        "SKY2": 8500000
      }
    },
    {
      "id": "s4",
      "eventId": "4",
      "date": "2026-04-17",
      "time": "20:00 - 22:00",
      "location": "Hà Nội",
      "zonePrices": {
        "CAT1": 388000,
        "CAT2": 348000,
        "CAT3": 308000,
        "CAT4": 268000,
        "CAT5": 218000,
        "GACENTER": 308000,
        "PA_SIDE": 388000,
        "PA_CENTER": 388000,
        "PB_SIDE": 348000,
        "PB_CENTER": 348000,
        "PC_SIDE": 308000
      }
    },
    {
      "id": "giai-boi-2026-05-20",
      "eventId": "giai-boi-2026",
      "date": "2026-05-20",
      "time": "08:00 - 17:00",
      "location": "TP.HCM",
      "zonePrices": { "A1": 300000, "A2": 200000, "A3": 100000 }
    },
    {
      "id": "s27",
      "eventId": "27",
      "date": "2026-05-25",
      "time": "15:00 - 21:00",
      "location": "Hà Nội",
      "zonePrices": {
        "VIP": 3800000,
        "SHINJUKU": 2400000,
        "SHIBUYA": 1800000,
        "HARAJUKU": 1200000,
        "GINZA": 800000,
        "SKYLOUNGE": 5500000
      }
    },
    {
      "id": "game-show-2026-05-25",
      "eventId": "game-show-2026",
      "date": "2026-05-25",
      "time": "18:00 - 21:00",
      "location": "Hà Nội",
      "zonePrices": { "FRONT": 500000, "CENTER": 350000, "STANDARD": 200000 }
    },
    {
      "id": "festival-2026-04-20",
      "eventId": "le-hoi-am-thuc-ha-noi-2026",
      "date": "2026-04-20",
      "time": "09:00 - 22:00",
      "location": "Công viên Hòa Bình",
      "zonePrices": { "ENTRY": 0 }
    },
    {
      "id": "s5",
      "eventId": "5",
      "date": "2026-05-15",
      "time": "19:00 - 23:00",
      "location": "Hà Nội",
      "zonePrices": {
        "TINH_HOA": 6000000,
        "DANG_CAP": 3000000,
        "BIEU_TUONG": 2200000,
        "DAU_AN": 1800000,
        "KET_NOI": 900000,
        "HAO_QUANG": 0,
        "TUONG_LAI": 0,
        "TU_DO": 0
      }
    },
    {
      "id": "s6",
      "eventId": "6",
      "date": "2026-05-15",
      "time": "19:00 - 23:00",
      "location": "TP.HCM",
      "zonePrices": { "GA1": 1500000, "VIP": 4000000, "SKY1": 12000000 }
    },
    {
      "id": "10001",
      "eventId": 10,
      "date": "2026-05-15",
      "time": "19:00 - 23:00",
      "location": "Hà Nội",
      "zonePrices": { "RED": 1200000, "YELLOW": 900000, "GREEN": 700000 }
    },
    {
      "id": "30001",
      "eventId": 30,
      "date": "2026-05-25",
      "time": "18:00 - 22:00",
      "location": "Hà Nội",
      "zonePrices": { "ENTRY": 150000 }
    }
  ],
  "seatMaps": [
    {
      "id": "tgc-vietnam-map",
      "type": "custom-zones",
      "canvas": { "width": 800, "height": 600 },
      "stageLabel": "STAGE & RUNWAY",
      "sections": [
        { "id": "VIP-LEFT", "label": "VIP", "priceKey": "VIP", "x": 230, "y": 170, "width": 60, "height": 180, "color": "#facc15", "selectable": true },
        { "id": "VIP-RIGHT", "label": "VIP", "priceKey": "VIP", "x": 510, "y": 170, "width": 60, "height": 180, "color": "#facc15", "selectable": true },
        { "id": "VIP-FRONT", "label": "VIP", "priceKey": "VIP", "x": 300, "y": 360, "width": 200, "height": 40, "color": "#10b981", "selectable": true },
        { "id": "SHINJUKU-LEFT", "label": "SHINJUKU", "priceKey": "SHINJUKU", "x": 150, "y": 170, "width": 70, "height": 180, "color": "#ff0a0a", "selectable": true },
        { "id": "SHINJUKU-RIGHT", "label": "SHINJUKU", "priceKey": "SHINJUKU", "x": 580, "y": 170, "width": 70, "height": 180, "color": "#ff89ac", "selectable": true }
      ]
    },
    {
      "id": "thang-4-jay-map",
      "type": "custom-zones",
      "canvas": { "width": 1000, "height": 760 },
      "stageLabel": "STAGE / 舞台",
      "sections": [
        { "id": "THANG4-PA1", "label": "PA1", "priceKey": "PA_SIDE", "x": 172, "y": 90, "width": 48, "height": 74, "color": "#ec4899" },
        { "id": "THANG4-GA-CENTER", "label": "GA CENTER", "priceKey": "GACENTER", "x": 292, "y": 292, "width": 280, "height": 110 }
      ]
    },
    {
      "id": "slay-overview-map",
      "type": "custom-zones",
      "canvas": { "width": 1000, "height": 700 },
      "stageLabel": "STAGE",
      "sections": [
        { "id": "SLAY-VIP-A", "label": "VIP A", "priceKey": "VIP", "x": 376, "y": 120, "width": 120, "height": 144 },
        { "id": "SLAY-GA1A", "label": "GA 1A", "priceKey": "GA1", "x": 60, "y": 372, "width": 146, "height": 110 },
        { "id": "SLAY-SKY1", "label": "SKY LOUNGE 1", "priceKey": "SKY1", "x": 214, "y": 616, "width": 300, "height": 56 }
      ]
    },
    {
      "id": "sky-concert-map",
      "type": "custom-zones",
      "stageLabel": "STAGE",
      "sections": [
        { "id": "CAT1A", "label": "CAT 1A", "priceKey": "RED", "color": "#2563eb", "x": 120, "y": 110, "width": 90, "height": 80 },
        { "id": "CAT2A", "label": "CAT 2A", "priceKey": "YELLOW", "color": "#f97316", "x": 120, "y": 200, "width": 90, "height": 80 },
        { "id": "GA3A", "label": "GA 3A", "priceKey": "GREEN", "color": "#16a34a", "x": 220, "y": 110, "width": 90, "height": 80 }
      ]
    },
    {
      "id": "dangcap",
      "type": "custom-zones",
      "canvas": { "width": 500, "height": 550 },
      "stageLabel": "STAGE",
      "sections": [
        { "id": "TINH_HOA", "label": "TINH HOA", "priceKey": "TINH_HOA", "x": 170, "y": 110, "width": 180, "height": 28, "color": "#FF5722" },
        { "id": "DANG_CAP", "label": "ĐẲNG CẤP", "priceKey": "DANG_CAP", "x": 170, "y": 148, "width": 180, "height": 28, "color": "#FF0000" }
      ]
    },
    {
      "id": "arena-b",
      "stageLabel": "ARENA",
      "zones": [
        { "id": "VVIP", "name": "Khu VVIP", "color": "#dc2626", "rows": 3, "cols": 6 },
        { "id": "VIP", "name": "Khu VIP", "color": "#f97316", "rows": 4, "cols": 7 }
      ]
    },
    {
      "id": "theatre-c",
      "stageLabel": "SÂN KHẤU",
      "zones": [
        { "id": "ORCHESTRA", "name": "Tầng trệt", "color": "#ef4444", "rows": 5, "cols": 10 }
      ]
    },
    {
      "id": "aquatic-d",
      "stageLabel": "HỒ THI ĐẤU",
      "zones": [
        { "id": "A1", "name": "Khán đài A1", "color": "#0ea5e9", "rows": 4, "cols": 9 },
        { "id": "A2", "name": "Khán đài A2", "color": "#14b8a6", "rows": 4, "cols": 8 }
      ]
    },
    {
      "id": "hall-e",
      "stageLabel": "MAIN SHOW",
      "zones": [
        { "id": "FRONT", "name": "Khu FRONT", "color": "#ec4899", "rows": 3, "cols": 8 },
        { "id": "CENTER", "name": "Khu CENTER", "color": "#8b5cf6", "rows": 4, "cols": 8 },
        { "id": "STANDARD", "name": "Khu STANDARD", "color": "#06b6d4", "rows": 5, "cols": 8 }
      ]
    },
    {
      "id": "festival-f",
      "stageLabel": "CỔNG VÀO",
      "zones": [
        { "id": "ENTRY", "name": "Vé vào cổng", "color": "#22c55e", "rows": 2, "cols": 6 }
      ]
    }
  ]
};
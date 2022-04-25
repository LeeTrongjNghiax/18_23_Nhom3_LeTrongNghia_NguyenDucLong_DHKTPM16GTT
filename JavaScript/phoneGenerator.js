phoneGenerator = () => {
	let phoneName = sessionStorage.getItem("phoneName");
	console.log(phoneName)
	console.log(phones)

	let phone;
	let kt = false;

	for (let i = 0; i < phones.length; i++) {
		if (phoneName == phones[i].name) {
			phone = phones[i];
			kt = true;
			break;
		}
	}

	if (kt == false) {
		phone = new Phone(
			"iPhone 13 Pro Max 128GB",
			"29350000", [
					"../Image/iphone13_pro_max/1.jpg",
					"../Image/iphone13_pro_max/2.jpg",
					"../Image/iphone13_pro_max/3.jpg"
			],
			`Đánh giá iPhone 13 Pro Max - Hiệu năng vô đối, camera cực đỉnh
		iPhone 12 ra mắt cách đây chưa lâu, thì những tin đồn mới nhất về iPhone 13 Pro Max đã khiến bao tín đồ công nghệ ngóng chờ. Cụm camera được nâng cấp, màu sắc mới, đặc biệt là màn hình 120Hz với phần notch được làm nhỏ gọn hơn chính là những điểm làm cho thu hút mọi sự chú ý trong năm nay.
		
		Thiết kế cạnh phẳng sang trọng, nhiều màu sắc nổi bật
		Dòng iPhone 12 được Apple áp dụng ngôn ngữ thiết kế tương tự iPhone 12 năm ngoái với phần cạnh viền máy được dát phẳng sang trọng cùng bốn góc được làm bo cong nhẹ, đây có thể được xem là một thiết kế hoài cổ từ dòng iPhone 5 trước đó. Vì thế mà iPhone 13 Pro Max nói riêng, cũng như dòng điện thoại iPhone 13 nói chung, cũng sẽ đi theo ngôn ngữ thiết kế này.
		
		Điểm thay đổi lớn trên 13 Pro Max có thể là phần nhô của cụm camera. Trong khi đó mặt trước của thiết bị được phủ một lớp Ceramic Shield, loại vật liệu cứng hơn bất kỳ loại kính điện thoại thông minh nào hiện có trên thị trường, giúp bảo vệ màn hình iPhone hiệu quả.
		
		Thiết kế cạnh phẳng sang trọng, nhiều màu sắc nổi bật
		
		Xét về chất liệu, iPhone 13 Pro Max vẫn áp dụng chất liệu thép không gỉ như thế hệ trước đó. Mặt này cũng được phủ một lớp kính mờ giúp hạn chế bám bụi bẩn và vân tay. Ngoài ra, điện thoại cũng sẽ đảm bảo được khả năng chống bụi / nước chuẩn IP68.
		
		Về màu sắc, iPhone 13 phiên bản Pro Max sẽ được ra mắt với nhiều tùy chọn màu sắc khác nhau. Trong đó gồm một số màu nổi bật như: vàng, bạc, xanh, đen,...
		
		Màn hình với tai nhỏ nhỏ hơn, tốc độ làm tươi 120 Hz
		Một trong những yếu tố khiến iPhone 13 Pro Max đáng mong chờ đó là thiết kế notch "tai thỏ" được thu gọn lại. Ngoài kích cỡ màn hình 6.7 inch với tấm nền Super Retina XDR OLED, máy sẽ có thiết kế notch được thu hẹp lại, giúp tăng tỷ lệ hiển thị trên màn hình điện thoại. Tất nhiên, những cảm biến quan trọng như TrueDepth, Face ID hoặc camera selfie đều sẽ giữ nguyên vị trí.
		
		Màn hình notch thu nhỏ với tốc độ làm tươi 120 Hz
		
		Rất nhiều nguồn tin cho biết iPhone 13 Pro Max sẽ tăng cường trải nghiệm hình ảnh lên rất nhiều thông qua ProMotion - tích năng giúp đẩy tốc độ làm tươi màn ảnh lên 120 Hz. Đây cũng là chiếc iPhone đầu tiên có tốc độ làm tươi cao lên đến 120Hz, giúp hình ảnh chuyển động mượt mà hơn.
		
		Ngoài ra, những tính năng bổ trợ khác như Dolby Vision, True-tone hoặc gam màu rộng chuẩn HDR10 vẫn sẽ được tích hợp vào iPhone 13 Pro Max.  
		
		Camera nâng cấp, chụp ảnh chất lượng, quay phim chuyên nghiệp
		Như mọi chiếc iPhone mới khác, camera luôn là yếu tố được người dùng quan tâm nhất, và iPhone 13 Pro Max sẽ không làm người dùng thất vọng. Giống với ngôn ngữ thiết kế cho thân máy, ngôn ngữ thiết kế cho camera thường không xảy ra trong thời gian ngắn. Đó là lý do chiếc điện thoại này vẫn sẽ có bộ camera 3 ống kính xếp xen kẽ thành một cụm vuông, đặt ở góc trên bên trái của lưng máy.  
		
		Thay đổi lớn về camera đầu tiên nằm ở cảm biến. Máy được trang bị camera góc siêu rộng cải tiến lớn với ống kính khẩu độ f/1.8 và len 6P. Camera siêu rộng hiện tại trên iPhone 12 Pro Max đang ở khẩu độ f/2.4 và len 5P, nên nâng cấp trên sẽ cải thiện ảnh chụp thiếu sáng rất nhiều.
		
		Cảm biến LiDAR vẫn sẽ hiện diện trên iPhone 13 Pro Max. Tuy nhiên Apple dự kiến mang cảm biến này lên cả gia đình iPhone 13 và không dành riêng chỉ cho các máy Pro. Điều này được cho là nhằm mang đến trải nghiệm thực tế tăng cường (AR) tốt nhất cho tất cả người dùng.
		
		Camera nâng cấp đáng kể về cảm biến lẫn tính năng chụp ảnh
		
		Camera selfie không thay đổi so với model tiền nhiệm. Có thể iPhone 13 Pro Max sẽ chụp ảnh selfie góc rộng hơn một chút, nhưng còn lại phần lớn ở camera selfie đều giữ nguyên như trước. Và những tính năng như selfie slow-mo, memoji và animoji cũng sẽ hiện diện như nhiều tin đồn cho biết.
		
		Vi xử lý nâng cấp, dung lượng pin cải thiện
		Giống với nhiều thế hệ iPhone mới, vi xử lý dự đoán sẽ được nâng cấp lên một bậc với hiệu năng cải thiện đáng kể cùng khả năng hỗ trợ mạng 5G. Trong trường hợp này, iPhone 13 Pro Max sẽ mang trong mình chip Apple A15 Bionic với nhiều nâng cấp khác nhau, cả về hiệu năng xử lý lẫn kết nối internet tốc độ cao.
		
		Theo nhà sản xuất công bố, chip A15 thế hệ mới này cho hiệu năng đồ họa nhanh hơn tới 50% so với các thiết bị smartphone khác. Ngoài ra, khả năng kết nối 5G cũng được cải thiện đáng kể, cùng với đó là chế độ dữ liệu thông minh, giảm tốc độ khi không cần thiết để tiết kiệm điện năng.
		
		Vi xử lý nâng cấp hiệu năng, loại bỏ hoàn toàn cổng kết nối
		
		iPhone 13 Pro Max cũng được trang bị viên pin dung lượng lớn hơn, cho thời gian sử dụng tăng lên khoảng 2,5 giờ so với thế hệ trước đó. Máy cũng sẽ được trang bị công nghệ sạc nhanh và sạc nhanh không dây.
		
		viên pin dung lượng lớn
		
		Điện thoại iPhone 13 Pro Max giá bao nhiêu? Ra mắt khi nào?
		Điện thoại iPhone 13 Pro Max được ra mắt vào ngày 14 tháng 9 năm 2021 tại sự kiện "California Streaming" diễn ra trực tuyến tương tự năm ngoái cùng với 3 phiên bản khác là iPhone 13, 13 mini và 13 Pro.
		
		Với giá bán dao động từ 35 triệu ~ 50 triệu VNĐ (tùy theo RAM và bộ nhớ trong), Khách hàng có thể mua iPhone 13 Pro Max chính hãng VN/A tại CellphoneS để nhận ngay mức giá tốt nhất cùng nhiều ưu đãi hấp dẫn qua tổng đài tư vấn 1800.2097.`,
			new PhoneStatis(
					"6.7 inches",
					"OLED",
					`Camera góc rộng: 12MP, ƒ/1.5\nCamera góc siêu rộng: 12MP, ƒ/1.8\nCamera tele : 12MP, /2.8`,
					"12MP, ƒ/2.2",
					"Apple A15",
					"6 GB",
					"128 GB",
					"4,325mAh",
					"2 SIM (nano-SIM và eSIM)",
					"iOS 15",
					"2778 x 1284 pixel",
					"240g"
			)
	);
	}

	//.container

	document.querySelector("body > .container-fluid > .container").appendChild( document.createElement("header") )

	document.querySelector("body > .container-fluid > .container").appendChild( document.createElement("div") )
	document.querySelector(".container > div").setAttribute("class", "row");
	document.querySelector(".container > div").style.height = "450px";

	document.querySelector("body > .container-fluid > .container").appendChild( document.createElement("div") )
	document.querySelector(".container > div:nth-of-type(2)").setAttribute("class", "row");

	//.container > header

	document.querySelector(".container > header").appendChild( document.createElement("div") );
	document.querySelector(".container > header > div").setAttribute("class", "row");

	document.querySelector(".container > header > div").appendChild( document.createElement("h1") );
	document.querySelector(".container > header > div > h1").appendChild( document.createTextNode(phone.name) );

	//.container > div:nth-of-type(1)

	document.querySelector(".container > div:nth-of-type(1)").appendChild( document.createElement("div") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1)").setAttribute("class", "col-md-7");

	document.querySelector(".container > div:nth-of-type(1)").appendChild( document.createElement("div") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2)").setAttribute("class", "col-md-5");

	//.container > div:nth-of-type(2)

	document.querySelector(".container > div:nth-of-type(2)").appendChild( document.createElement("div") );
	document.querySelector(".container > div:nth-of-type(2) > div:nth-of-type(1)").setAttribute("class", "col-md-7");

	document.querySelector(".container > div:nth-of-type(2)").appendChild( document.createElement("div") );
	document.querySelector(".container > div:nth-of-type(2) > div:nth-of-type(2)").setAttribute("class", "col-md-5");

	//.container > div:nth-of-type(1) > div:nth-of-type(1)

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1)").appendChild( document.createElement("div") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div").setAttribute("id", "myCarousel");
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div").setAttribute("class", "carousel slide");
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div").setAttribute("data-ride", "carousel");

	//.container > div:nth-of-type(1) > div:nth-of-type(1) > div

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div").appendChild( document.createElement("ol") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > ol").setAttribute("class", "carousel-indicators");

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div").appendChild( document.createElement("div") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > div").setAttribute("class", "carousel-inner");

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div").appendChild( document.createElement("a") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > a").setAttribute("class", "left carousel-control");
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > a").setAttribute("href", "#myCarousel");
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > a").setAttribute("data-slide", "prev");

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div").appendChild( document.createElement("a") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > a:nth-of-type(2)").setAttribute("class", "right carousel-control");
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > a:nth-of-type(2)").setAttribute("href", "#myCarousel");
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > a:nth-of-type(2)").setAttribute("data-slide", "next");

	//.container > div:nth-of-type(1) > div:nth-of-type(1) > div > ol

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > ol").appendChild( document.createElement("li") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > ol > li").setAttribute("data-target", "#myCarousel");
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > ol > li").setAttribute("data-slide-to", "0");
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > ol > li").setAttribute("class", "active");

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > ol").appendChild( document.createElement("li") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > ol > li:nth-of-type(2)").setAttribute("data-target", "#myCarousel");
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > ol > li:nth-of-type(2)").setAttribute("data-slide-to", "1");
	
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > ol").appendChild( document.createElement("li") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > ol > li:nth-of-type(3)").setAttribute("data-target", "#myCarousel");
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > ol > li:nth-of-type(3)").setAttribute("data-slide-to", "2");

	//.container > div:nth-of-type(1) > div:nth-of-type(1) > div > div

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > div").appendChild( document.createElement("div") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > div > div").setAttribute("class", "item active");

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > div").appendChild( document.createElement("div") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > div > div:nth-of-type(2)").setAttribute("class", "item");

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > div").appendChild( document.createElement("div") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > div > div:nth-of-type(3)").setAttribute("class", "item");

	//.container > div:nth-of-type(1) > div:nth-of-type(1) > div > div > div:nth-of-type(1)

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > div > div:nth-of-type(1)").appendChild( document.createElement("img") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > div > div:nth-of-type(1) > img").setAttribute("src", phone.imgs[0]);

	//.container > div:nth-of-type(1) > div:nth-of-type(1) > div > div > div:nth-child(2)

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > div > div:nth-of-type(2)").appendChild( document.createElement("img") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > div > div:nth-of-type(2) > img").setAttribute("src", phone.imgs[1]);

	//.container > div:nth-of-type(1) > div:nth-of-type(1) > div > div > div:nth-child(3)

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > div > div:nth-of-type(3)").appendChild( document.createElement("img") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > div > div:nth-of-type(3) > img").setAttribute("src", phone.imgs[2]);

	//.container > div:nth-of-type(1) > div:nth-of-type(1) > div > a:nth-child(1)

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > a:nth-of-type(1)").appendChild( document.createElement("span") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > a:nth-of-type(1) > span").setAttribute("class", "glyphicon glyphicon-chevron-left");

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > a:nth-of-type(1)").appendChild( document.createElement("span") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > a:nth-of-type(1) > span:nth-of-type(2)").setAttribute("class", "sr-only");

	//.container > div:nth-of-type(1) > div:nth-of-type(1) > div > a:nth-of-type(2)

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > a:nth-of-type(2)").appendChild( document.createElement("span") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > a:nth-of-type(2) > span").setAttribute("class", "glyphicon glyphicon-chevron-right");

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > a:nth-of-type(2)").appendChild( document.createElement("span") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(1) > div > a:nth-of-type(2) > span:nth-of-type(2)").setAttribute("class", "sr-only");

	//.container > div:nth-of-type(1) > div:nth-of-type(2)

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2)").appendChild( document.createElement("h2") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > h2").setAttribute("class", "col-md-12");

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2)").appendChild( document.createElement("div") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1)").setAttribute("class", "row");
	
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2)").appendChild( document.createElement("div") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2)").setAttribute("class", "row");

	//.container > div:nth-of-type(1) > div:nth-of-type(2) > h2

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > h2").appendChild( document.createTextNode(phone.price + "đ") );

	//.container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1)

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1)").appendChild( document.createElement("div") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div").setAttribute("class", "col-md-12");

	//.container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div").appendChild( document.createElement("button") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div > button").setAttribute("class", "col-md-12 btn btn-default");
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div > button").setAttribute("id", "btnMuaNgay");

	//.container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div > button

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div > button").appendChild( document.createElement("h4") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div > button").appendChild( document.createElement("p") );

	//.container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div > button > h4

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div > button > h4").appendChild( document.createTextNode("Mua ngay") );

	//.container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div > button > p

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div > button > p").appendChild( document.createTextNode("(Giao hàng tận nhà hay nhận tại cửa hàng)") );

	//.container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2)

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2)").appendChild( document.createElement("div") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div").setAttribute("class", "col-md-6");

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2)").appendChild( document.createElement("div") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2)").setAttribute("class", "col-md-6");

	//.container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div").appendChild( document.createElement("button") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div > button").setAttribute("id", "traGopQuaDienThoai");
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div > button").setAttribute("class", "btn btn-default");

	//.container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div > button

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div > button").appendChild( document.createElement("h4") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div > button").appendChild( document.createElement("p") );

	//.container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div > button > h4

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div > button > h4").appendChild( document.createTextNode("Trả Góp 0%") );
	
	//.container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div > button > p

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div > button > p").appendChild( document.createTextNode("Duyệt hồ sơ trong ̀5 phút") );

	//.container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2)

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2)").appendChild( document.createElement("button") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > button").setAttribute("id", "traGopQuaThe");
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > button").setAttribute("class", "btn btn-default");

	//.container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > button

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > button").appendChild( document.createElement("h4") );
	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > button").appendChild( document.createElement("p") );

	//.container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > button > h4

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > button > h4").appendChild( document.createTextNode("Trả Góp Qua Thẻ") );
	
	//.container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > button > p

	document.querySelector(".container > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(2) > div:nth-of-type(2) > button > p").appendChild( document.createTextNode("Visa, MasterCard, FECredit") );
	
	//.container > div:nth-of-type(2) > div:nth-of-type(1)

	document.querySelector(".container > div:nth-of-type(2) > div:nth-of-type(1)").appendChild( document.createElement("div") );
	document.querySelector(".container > div:nth-of-type(2) > div:nth-of-type(1) > div").setAttribute("id", "moTa");

	document.querySelector(".container > div:nth-of-type(2) > div:nth-of-type(1)").appendChild( document.createElement("div") );
	document.querySelector(".container > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2)").setAttribute("id", "btnMoRongVaThuGon");

	//.container > div:nth-of-type(2) > div:nth-of-type(1) > div#moTa

	document.querySelector("#moTa").appendChild( document.createElement("h3") );
	document.querySelector("#moTa > h3").appendChild( document.createTextNode("Đánh giá " + phone.name) );
	document.querySelector("#moTa").appendChild( document.createElement("p") );
	document.querySelector("#moTa > p").appendChild( document.createTextNode(phone.description) );

	//.container > div:nth-of-type(2) > div:nth-of-type(1) > div#btnMoRongVaThuGon

	document.querySelector("#btnMoRongVaThuGon").appendChild( document.createElement("button") );
	document.querySelector("#btnMoRongVaThuGon > button").setAttribute("id", "btnMoRong");
	document.querySelector("#btnMoRongVaThuGon > button").appendChild( document.createTextNode("Mở rộng") )

	document.querySelector("#btnMoRongVaThuGon").appendChild( document.createElement("button") );
	document.querySelector("#btnMoRongVaThuGon > button:last-child").setAttribute("id", "btnThuGon");
	document.querySelector("#btnMoRongVaThuGon > button:last-child").appendChild( document.createTextNode("Thu gọn") )

	//.container > div:nth-of-type(2) > div:nth-of-type(2)

	document.querySelector(".container > div:nth-of-type(2) > div:nth-of-type(2)").appendChild( document.createElement("div") );
	document.querySelector(".container > div:nth-of-type(2) > div:nth-of-type(2) > div").setAttribute("id", "thongSo");

	//.container > div:nth-of-type(2) > div:nth-of-type(2) > div#thongSo

	document.querySelector("#thongSo").appendChild( document.createElement("table") );
	document.querySelector("#thongSo > table").setAttribute("class", "table");
	document.querySelector("#thongSo > table").setAttribute("role", "table");

	//.container > div:nth-of-type(2) > div:nth-of-type(2) > div#thongSo > table

	document.querySelector("#thongSo > table").appendChild( document.createElement("caption") );
	document.querySelector("#thongSo > table > caption").style.fontWeight = "bolder";
	document.querySelector("#thongSo > table > caption").style.fontSize = "24px";

	document.querySelector("#thongSo > table").appendChild( document.createElement("tbody") );

	//.container > div:nth-of-type(2) > div:nth-of-type(2) > div#thongSo > table > caption

	document.querySelector("#thongSo > table > caption").appendChild( document.createTextNode("Thông số kỹ thuật") )

	//.container > div:nth-of-type(2) > div:nth-of-type(2) > div#thongSo > table > tbody

	document.querySelector("#thongSo > table > tbody").appendChild( document.createElement("tr") );
	document.querySelector("#thongSo > table > tbody").appendChild( document.createElement("tr") );
	document.querySelector("#thongSo > table > tbody").appendChild( document.createElement("tr") );
	document.querySelector("#thongSo > table > tbody").appendChild( document.createElement("tr") );
	document.querySelector("#thongSo > table > tbody").appendChild( document.createElement("tr") );
	document.querySelector("#thongSo > table > tbody").appendChild( document.createElement("tr") );
	document.querySelector("#thongSo > table > tbody").appendChild( document.createElement("tr") );
	document.querySelector("#thongSo > table > tbody").appendChild( document.createElement("tr") );
	document.querySelector("#thongSo > table > tbody").appendChild( document.createElement("tr") );
	document.querySelector("#thongSo > table > tbody").appendChild( document.createElement("tr") );
	document.querySelector("#thongSo > table > tbody").appendChild( document.createElement("tr") );
	document.querySelector("#thongSo > table > tbody").appendChild( document.createElement("tr") );

	//.container > div:nth-of-type(2) > div:nth-of-type(2) > div#thongSo > table > tr:nth-of-type(1)

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(1)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(1) > th").appendChild( document.createTextNode("Màn hình") )

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(1)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(1) > th:nth-of-type(2)").appendChild( document.createTextNode(phone.statis.screenSize) )

	//.container > div:nth-of-type(2) > div:nth-of-type(2) > div#thongSo > table > tr:nth-of-type(2)

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(2)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(2) > th").appendChild( document.createTextNode("Công nghệ màn hình") )

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(2)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(2) > th:nth-of-type(2)").appendChild( document.createTextNode(phone.statis.screenTech) )

	//.container > div:nth-of-type(2) > div:nth-of-type(2) > div#thongSo > table > tr:nth-of-type(3)

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(3)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(3) > th").appendChild( document.createTextNode("Camera sau") )

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(3)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(3) > th:nth-of-type(2)").appendChild( document.createTextNode(phone.statis.rearCamera) )

	//.container > div:nth-of-type(2) > div:nth-of-type(2) > div#thongSo > table > tr:nth-of-type(4)

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(4)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(4) > th").appendChild( document.createTextNode("Camera trước") )

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(4)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(4) > th:nth-of-type(2)").appendChild( document.createTextNode(phone.statis.frontCamera) )

	//.container > div:nth-of-type(2) > div:nth-of-type(2) > div#thongSo > table > tr:nth-of-type(5)

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(5)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(5) > th").appendChild( document.createTextNode("Chipset") )

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(5)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(5) > th:nth-of-type(2)").appendChild( document.createTextNode(phone.statis.chipset) )

	//.container > div:nth-of-type(2) > div:nth-of-type(2) > div#thongSo > table > tr:nth-of-type(6)

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(6)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(6) > th").appendChild( document.createTextNode("RAM") )

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(6)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(6) > th:nth-of-type(2)").appendChild( document.createTextNode(phone.statis.ram) )

	//.container > div:nth-of-type(2) > div:nth-of-type(2) > div#thongSo > table > tr:nth-of-type(7)

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(7)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(7) > th").appendChild( document.createTextNode("Bộ nhớ trong") )

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(7)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(7) > th:nth-of-type(2)").appendChild( document.createTextNode(phone.statis.internalMemory) )

	//.container > div:nth-of-type(2) > div:nth-of-type(2) > div#thongSo > table > tr:nth-of-type(8)

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(8)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(8) > th").appendChild( document.createTextNode("Dung lượng pin") )

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(8)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(8) > th:nth-of-type(2)").appendChild( document.createTextNode(phone.statis.batteryCapacity) )

	//.container > div:nth-of-type(2) > div:nth-of-type(2) > div#thongSo > table > tr:nth-of-type(9)

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(9)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(9) > th").appendChild( document.createTextNode("Thẻ sim") )

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(9)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(9) > th:nth-of-type(2)").appendChild( document.createTextNode(phone.statis.simSlot) )

	//.container > div:nth-of-type(2) > div:nth-of-type(2) > div#thongSo > table > tr:nth-of-type(10)

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(10)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(10) > th").appendChild( document.createTextNode("Hệ điều hành") )

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(10)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(10) > th:nth-of-type(2)").appendChild( document.createTextNode(phone.statis.os) )

	//.container > div:nth-of-type(2) > div:nth-of-type(2) > div#thongSo > table > tr:nth-of-type(11)

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(11)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(11) > th").appendChild( document.createTextNode("Độ phân giải màn hình") )

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(11)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(11) > th:nth-of-type(2)").appendChild( document.createTextNode(phone.statis.screenResoluton) )

	//.container > div:nth-of-type(2) > div:nth-of-type(2) > div#thongSo > table > tr:nth-of-type(12)

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(12)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(12) > th").appendChild( document.createTextNode("Trọng lượng") )

	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(12)").appendChild( document.createElement("th") )
	document.querySelector("#thongSo > table > tbody > tr:nth-of-type(12) > th:nth-of-type(2)").appendChild( document.createTextNode(phone.statis.weight) )
}
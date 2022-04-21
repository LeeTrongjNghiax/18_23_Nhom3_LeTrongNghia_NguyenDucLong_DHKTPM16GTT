usersTableGenerator = () => {
	for (let i = 0; i < users.length; i++) {
		document.querySelector("body > .container-fluid > .container > .row:first-child > .col-md-12 > table > tbody").appendChild( document.createElement("tr") )

		document.querySelector("body > .container-fluid > .container > .row:first-child > .col-md-12 > table > tbody > tr:last-child").appendChild( document.createElement("td") )
		document.querySelector("body > .container-fluid > .container > .row:first-child > .col-md-12 > table > tbody > tr:last-child > td:last-child").appendChild( document.createTextNode(i + 1) )

		document.querySelector("body > .container-fluid > .container > .row:first-child > .col-md-12 > table > tbody > tr:last-child").appendChild( document.createElement("td") )
		document.querySelector("body > .container-fluid > .container > .row:first-child > .col-md-12 > table > tbody > tr:last-child > td:last-child").appendChild( document.createTextNode(users[i].accountName) )

		document.querySelector("body > .container-fluid > .container > .row:first-child > .col-md-12 > table > tbody > tr:last-child").appendChild( document.createElement("td") )
		document.querySelector("body > .container-fluid > .container > .row:first-child > .col-md-12 > table > tbody > tr:last-child > td:last-child").appendChild( document.createTextNode(users[i].password) )

		document.querySelector("body > .container-fluid > .container > .row:first-child > .col-md-12 > table > tbody > tr:last-child").appendChild( document.createElement("td") )
		document.querySelector("body > .container-fluid > .container > .row:first-child > .col-md-12 > table > tbody > tr:last-child > td:last-child").appendChild( document.createTextNode(users[i].name) )

		document.querySelector("body > .container-fluid > .container > .row:first-child > .col-md-12 > table > tbody > tr:last-child").appendChild( document.createElement("td") )
		document.querySelector("body > .container-fluid > .container > .row:first-child > .col-md-12 > table > tbody > tr:last-child > td:last-child").appendChild( document.createTextNode(users[i].birthday) )

		document.querySelector("body > .container-fluid > .container > .row:first-child > .col-md-12 > table > tbody > tr:last-child").appendChild( document.createElement("td") )
		document.querySelector("body > .container-fluid > .container > .row:first-child > .col-md-12 > table > tbody > tr:last-child > td:last-child").appendChild( document.createTextNode(users[i].phoneNumber) )

		document.querySelector("body > .container-fluid > .container > .row:first-child > .col-md-12 > table > tbody > tr:last-child").appendChild( document.createElement("td") )
		document.querySelector("body > .container-fluid > .container > .row:first-child > .col-md-12 > table > tbody > tr:last-child > td:last-child").appendChild( document.createTextNode(users[i].email) )

		document.querySelector("body > .container-fluid > .container > .row:first-child > .col-md-12 > table > tbody > tr:last-child").appendChild( document.createElement("td") )
		document.querySelector("body > .container-fluid > .container > .row:first-child > .col-md-12 > table > tbody > tr:last-child > td:last-child").appendChild( document.createElement("a") )
		document.querySelector("body > .container-fluid > .container > .row:first-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > a").setAttribute("onclick", "deleteUser(this)")
		document.querySelector("body > .container-fluid > .container > .row:first-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > a").appendChild( document.createTextNode("Xoa") )
	}
}

deleteUser = (tag) => {
	for (let i = 0; i < users.length; i++) {
		if (tag.parentElement.parentElement.querySelector("td:nth-child(2)").textContent == users[i].accountName) {
			users.splice(i, 1);
		}
		tag.parentElement.parentElement.remove();
	}
}

productTableGenerator = () => {
	for (let i = 0; i < phones.length; i++) {
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody").appendChild( document.createElement("tr") );

		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child").appendChild( document.createElement("td") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child").appendChild( document.createTextNode(i + 1) )

		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child").appendChild( document.createElement("td") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child").appendChild( document.createTextNode(phones[i].name) )

		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child").appendChild( document.createElement("td") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child").appendChild( document.createTextNode(phones[i].price) )

		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child").appendChild( document.createElement("td") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child").appendChild( document.createElement("a") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > a").appendChild( document.createTextNode("Mô tả...") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > a").setAttribute("onclick", "openDescriptionTable(this)")

		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child").appendChild( document.createElement("p") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > p").appendChild( document.createTextNode(phones[i].description) )

		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child").appendChild( document.createElement("td") )

		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child").appendChild( document.createElement("a") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child").appendChild( document.createElement("table") )

		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > a").setAttribute("onclick", "deleteUser(this)")
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > a").appendChild( document.createTextNode("Chỉ số...") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > a").setAttribute("onclick", "openStatisTable(this)")

		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table").appendChild( document.createElement("tr") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child").appendChild( document.createElement("td") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child > td:last-child").appendChild( document.createTextNode("Màn hình") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child").appendChild( document.createElement("td") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child > td:last-child").appendChild( document.createTextNode(phones[i].statis.screenSize) )

		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table").appendChild( document.createElement("tr") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child").appendChild( document.createElement("td") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child > td:last-child").appendChild( document.createTextNode("Công nghệ Màn hình") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child").appendChild( document.createElement("td") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child > td:last-child").appendChild( document.createTextNode(phones[i].statis.screenTech) )

		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table").appendChild( document.createElement("tr") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child").appendChild( document.createElement("td") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child > td:last-child").appendChild( document.createTextNode("Camera sau") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child").appendChild( document.createElement("td") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child > td:last-child").appendChild( document.createTextNode(phones[i].statis.rearCamera) )

		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table").appendChild( document.createElement("tr") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child").appendChild( document.createElement("td") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child > td:last-child").appendChild( document.createTextNode("Camera trước") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child").appendChild( document.createElement("td") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child > td:last-child").appendChild( document.createTextNode(phones[i].statis.frontCamera) )

		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table").appendChild( document.createElement("tr") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child").appendChild( document.createElement("td") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child > td:last-child").appendChild( document.createTextNode("Chipset") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child").appendChild( document.createElement("td") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child > td:last-child").appendChild( document.createTextNode(phones[i].statis.chipset) )

		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table").appendChild( document.createElement("tr") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child").appendChild( document.createElement("td") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child > td:last-child").appendChild( document.createTextNode("RAM") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child").appendChild( document.createElement("td") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child > td:last-child").appendChild( document.createTextNode(phones[i].statis.ram) )

		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table").appendChild( document.createElement("tr") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child").appendChild( document.createElement("td") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child > td:last-child").appendChild( document.createTextNode("Bộ nhớ trong") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child").appendChild( document.createElement("td") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child > td:last-child").appendChild( document.createTextNode(phones[i].statis.internalMemory) )

		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table").appendChild( document.createElement("tr") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child").appendChild( document.createElement("td") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child > td:last-child").appendChild( document.createTextNode("Dung lượng pin") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child").appendChild( document.createElement("td") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child > td:last-child").appendChild( document.createTextNode(phones[i].statis.batteryCapacity) )

		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table").appendChild( document.createElement("tr") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child").appendChild( document.createElement("td") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child > td:last-child").appendChild( document.createTextNode("Khe sim") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child").appendChild( document.createElement("td") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child > td:last-child").appendChild( document.createTextNode(phones[i].statis.simSlot) )

		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table").appendChild( document.createElement("tr") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child").appendChild( document.createElement("td") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child > td:last-child").appendChild( document.createTextNode("Hệ điều hành") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child").appendChild( document.createElement("td") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child > td:last-child").appendChild( document.createTextNode(phones[i].statis.os) )

		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table").appendChild( document.createElement("tr") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child").appendChild( document.createElement("td") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child > td:last-child").appendChild( document.createTextNode("Độ phân giải màn hình") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child").appendChild( document.createElement("td") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child > td:last-child").appendChild( document.createTextNode(phones[i].statis.screenResoluton) )

		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table").appendChild( document.createElement("tr") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child").appendChild( document.createElement("td") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child > td:last-child").appendChild( document.createTextNode("Trọng lượng") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child").appendChild( document.createElement("td") )
		document.querySelector("body > .container-fluid > .container > .row:last-child > .col-md-12 > table > tbody > tr:last-child > td:last-child > table > tr:last-child > td:last-child").appendChild( document.createTextNode(phones[i].statis.weight) )
	}
}

openStatisTable = (tag) => {
	if (tag.parentElement.querySelector("table").style.display == "none")
		tag.parentElement.querySelector("table").style.display = "block";
	else
		tag.parentElement.querySelector("table").style.display = "none";
}

openDescriptionTable = (tag) => {
	if (tag.parentElement.querySelector("p").style.display == "none")
		tag.parentElement.querySelector("p").style.display = "block";
	else
		tag.parentElement.querySelector("p").style.display = "none";
}
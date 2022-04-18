openPhoneTemplatePage = (tag) => {
  sessionStorage.setItem("phoneName", tag.querySelector("h3").textContent)
  
  while (tag.parentElement != null) {
    tag = tag.parentElement
  }

  sessionStorage.setItem("userObj", tag.querySelector("#userName").textContent)
  sessionStorage.setItem("userArray", JSON.stringify(users))
  sessionStorage.setItem("phoneArray", JSON.stringify(phones))

  window.open("phoneTemplate.html")
}
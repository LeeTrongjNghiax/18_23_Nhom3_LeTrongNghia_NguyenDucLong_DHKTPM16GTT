openTrangChuPage = () => {
  sessionStorage.setItem("userArray", JSON.stringify(users))
  sessionStorage.setItem("phoneArray", JSON.stringify(phones))

  window.open("trangChuPage.html")
}
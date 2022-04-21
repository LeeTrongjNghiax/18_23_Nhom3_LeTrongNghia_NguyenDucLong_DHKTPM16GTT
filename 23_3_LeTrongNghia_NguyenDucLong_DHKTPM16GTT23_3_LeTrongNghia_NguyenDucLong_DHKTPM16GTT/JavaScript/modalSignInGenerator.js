modalSignInGenerator = () => {
  // body

  document.querySelector("body").appendChild( document.createElement("div") )

  // body > div

  document.querySelector("body > div").setAttribute("class", "modal fade")
  document.querySelector("body > div").setAttribute("role", "dialog")
  document.querySelector("body > div").setAttribute("id", "modalSignIn")
  document.querySelector("body > div").appendChild( document.createElement("div") )
}
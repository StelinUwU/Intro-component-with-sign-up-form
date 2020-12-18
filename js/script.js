const form = document.querySelector(".form").children[0]
const button = document.querySelector("#button")
const fname = document.querySelector("#fname")
const lname = document.querySelector("#lname")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

button.addEventListener("click", comprobacion)

function comprobacion(e){
  e.preventDefault()
  
  let completado = true;
  const parametros = [fname, lname, email, password]


 parametros.forEach( (parametro) =>{
    if(parametro.value === ""){
      console.log("Todos los campos son obligatorios")
      vacio(parametro, )
      parametro.classList.add("error")
      completado = false;
      return
    }
  } )

  if(completado){
    if(emailRegex.test(email.value)){
      console.log("valido")
    }else{
      email.classList.add("error")
      emailError()
    }
  }
}

function vacio(parametro){
  const error = document.createElement("p")
  error.innerHTML = `
  <img src="../images/icon-error.svg"></img> ${parametro.name} cannot be empty
  `
  form.insertBefore(error, form.children[15])
  setTimeout( ()=>{
    error.remove()
  }, 5000)
}

function emailError(){
  const error = document.createElement("p")
  error.innerHTML = `
  <img src="../images/icon-error.svg"></img> Looks like this is not an email 
  `
  form.insertBefore(error, form.children[15])
  setTimeout( ()=>{
    error.remove()
  }, 5000)
}
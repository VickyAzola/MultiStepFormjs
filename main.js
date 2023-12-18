const paso1 = document.getElementById("step-1")
const paso2 = document.getElementById("step-2")
const paso3 = document.getElementById("step-3")
const form = document.getElementById("form")
const nameRegister = document.getElementById("name")
const email = document.getElementById("email")
const errorMsg = document.getElementsByClassName("errorMsg")
const numForm = document.getElementById("start")

function step1(event) {
  let nameValidation = document.forms["form"]["name"].value;
  if (nameValidation == "") {
    nameRegister.style.borderColor = "#f96262"
    nameRegister.style.backgroundColor= "hsla(4, 100%, 67%, 15%)"
    nameRegister.style.color = "#ff6257"
    errorMsg[0].style.visibility = "visible"
    event.preventDefault()

    nameRegister.addEventListener("click", function () {
      nameRegister.removeAttribute('style')
      errorMsg[0].style.visibility = "hidden"
    })
  } 

  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
  let emailValidation = document.forms["form"]["email"].value;
  if (emailValidation == "" || !emailValidation.match(emailFormat)) {
    email.style.borderColor = "#ff6257"
    email.style.backgroundColor = "hsla(4, 100%, 67%, 15%)"
    email.style.color = "#ff6257"
    errorMsg[1].style.visibility = "visible"
    event.preventDefault()

    email.addEventListener("click", function () {
      email.removeAttribute('style')
      errorMsg[1].style.visibility = "hidden"
    });
  }
  
  if (!nameValidation == "" && !emailValidation == "" && emailValidation.match(emailFormat)) {
    paso1.style.display = "none" 
    paso2.style.display = "block"
    event.preventDefault()
    numForm.innerText = "2"
    step[0].classList = "step done"
    step[1].classList = "step selected"
  }
}

let summaryName = document.getElementById("summaryName")
let summaryEmail = document.getElementById("summaryEmail")
let topic = document.querySelectorAll(".topic")
let summaryTopic = document.getElementById("summaryTopic")

function chosen(id) {
  if (topic[id].classList == "topic topicActive") {
    topic[id].classList = "topic"
  } else {
    topic[id].classList = "topic topicActive"
    summaryTopic.innerHTML += `<li>${topic[id].textContent}</li>`
  }
}

const step = document.querySelectorAll(".step")

function step2(event) {
  event.preventDefault()
    if (topic[0].classList == "topic topicActive" || topic[1].classList == "topic topicActive" || topic[2].classList == "topic topicActive") {
      paso2.style.display = "none" 
      paso3.style.display = "block"

      numForm.innerText = "3"
      step[0].classList = "step done"
      step[1].classList = "step done"
      step[2].classList = "step selected"
    } else {
      alert("Chose a topic")
    }
    summaryName.textContent = nameRegister.value 
    summaryEmail.textContent = email.value
}

function step3() {
  paso3.style.display = "none" 
  paso1.style.display = "block"

  email.removeAttribute('style')
  nameRegister.removeAttribute('style')

  nameRegister.value = ""
  email.value = ""
  summaryTopic.innerHTML = ""

  numForm.innerText = "1"
  step[0].classList = "step selected"
  step[1].classList = "step"
  step[2].classList = "step"

  topic.forEach(element => {
    element.classList = "topic"
  });
}

import throttle from 'lodash.throttle';


const refs = {
    emailFieldEl: document.querySelector('input[name="email"]'),
    messageFieldEl: document.querySelector('textarea[name="message"]'),
    buttonSubmitEl: document.querySelector('button[type="submit"]'),
    feedbackFormEl: document.querySelector('.feedback-form')
}

refs.feedbackFormEl.addEventListener('input', throttle(onInput, 500));

let formArray = {};

const LOCALSTORAGESTRINGNAME = "feedback-form-state";

function onInput(evt) {
  
      formArray[evt.target.name] = evt.target.value

    // console.log(formArray)

    localStorage.setItem(LOCALSTORAGESTRINGNAME, JSON.stringify(formArray))
}
    
function onPageLoadingStorageCheck() {
    if (JSON.parse(localStorage.getItem(LOCALSTORAGESTRINGNAME))?.email) {
        refs.emailFieldEl.value = JSON.parse(localStorage.getItem(LOCALSTORAGESTRINGNAME)).email
        formArray.email = refs.emailFieldEl.value
    }

    if (JSON.parse(localStorage.getItem(LOCALSTORAGESTRINGNAME))?.message) {
        refs.messageFieldEl.value = JSON.parse(localStorage.getItem(LOCALSTORAGESTRINGNAME)).message
         formArray.message = refs.messageFieldEl.value
    }
}

onPageLoadingStorageCheck()



refs.feedbackFormEl.addEventListener('submit', onSubmit)

function onSubmit(evt) {
    evt.preventDefault()
    console.log(formArray)
    refs.feedbackFormEl.reset()
    localStorage.removeItem(LOCALSTORAGESTRINGNAME)
    formArray = {}
}


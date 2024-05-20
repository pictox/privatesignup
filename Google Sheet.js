// const scriptURL = ''
const scriptURL = 'https://script.google.com/macros/s/AKfycbyxoBuepE_Hm1Kfj062VUdr8aUTGR47tIXop2XQrShNiV5mOXXEsk2YK4uPadwpdmWJ9w/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
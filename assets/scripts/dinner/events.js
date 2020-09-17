const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateDinner = function (event) {
 event.preventDefault()
 const form = event.target //get the form from the event
 const data = getFormFields(form) //get the data from the data
console.log('dinner created')
api.createDinner(data)
.then(ui.onCreateDinnerSuccess)
.catch(ui.onCreateDinnerFailure)
}


const onShowAllDinners = function(event) {
  event.preventDefault()
  api.showAllDinners()
  console.log('onShowAllDinners')
  .then(ui.onShowAllDinnersSuccess)
  .catch(ui.onShowAllDinnersFailure)
}


module.exports = {
  onCreateDinner,
  onShowAllDinners
}

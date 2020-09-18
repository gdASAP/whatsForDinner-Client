const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const onCreateDinner = function (event) {
  event.preventDefault()
  const form = event.target //get the form from the event
  const formData = getFormFields(form) //get the data from the data
  //console.log('formData is ', formData)
  const data = {
    name: formData.dinner.name,
    timeToPrepare: formData.dinner.timeToPrepare,
    owner: store.user._id
  }
//console.log(data)

// console.log('dinner button pushed')
//console.log(store.user._id)
api.createDinner(data)
.then(ui.onCreateDinnerSuccess)
.catch(ui.onCreateDinnerFailure)
}


const onShowAllDinners = function(event) {
  const data = {
    owner: store.user._id
  }
  event.preventDefault()
  api.showAllDinners()
  .then(ui.onShowAllDinnersSuccess)
  .catch(ui.onShowAllDinnersFailure)
}


module.exports = {
  onCreateDinner,
  onShowAllDinners
}

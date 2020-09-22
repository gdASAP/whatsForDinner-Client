const store = require('./../store')
const api = require('./api')
const events = require('./events')

let dinnerArray = []

const onCreateDinnerSuccess = function (response) {
  //store.game = response.game
  //console.log('response: ', response)
  $('#message').text('Dinner Created successfully')
  $('#create-dinner').trigger('reset')
  //console.log('response is: ', response)
}

const onCreateDinnerFailure = function (error) {
  $('#message').text('Dinner failed to save')
  // console.log('error is: ', error)
}


const onShowAllDinnersSuccess = function (response) {
  $('#message').text('All Dinners Loaded')
  const rawData = response
  console.log(rawData.dinner)
  for ( let i = 0; i < rawData.dinner.length; i++) {
    dinnerArray.push(rawData.dinner[i]._id)
  $(`#${i}`).append(rawData.dinner[i].name + '   ' + rawData.dinner[i].timeToPrepare + '    ')
  }
  }

const onShowAllDinnersFailure = function (error) {
  $('#message').text('Dinners failed to load')
  console.error('update Failure ran. Error is :', error)
}

const onUpdateDinnerSuccess = function (response) {
  //store.game = response.game
  //console.log('response: ', response)
  $('#message').text('Dinner Updated successfully')
  console.log('UI response is: ', response)
  $('#update-dinner').trigger('reset')
}
//
const onUpdateDinnerFailure = function (error) {
  $('#message').text('Dinner failed to update')
  // console.log('error is: ', error)
}

const onDeleteDinnerSuccess = function (response) {
  //store.game = response.game
  //console.log('response: ', response)
  $('#message').text('Dinner Deleted successfully')
  console.log('UI response is: ', response)
}
//
const onDeleteDinnerFailure = function (error) {
  $('#message').text('Dinner failed to delete')
  // console.log('error is: ', error)
}

module.exports = {
onCreateDinnerSuccess,
onCreateDinnerFailure,
onShowAllDinnersSuccess,
onShowAllDinnersFailure,
onUpdateDinnerSuccess,
onUpdateDinnerFailure,
onDeleteDinnerSuccess,
onDeleteDinnerFailure,
dinnerArray
}

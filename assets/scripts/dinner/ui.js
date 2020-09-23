const store = require('./../store')
const api = require('./api')
const events = require('./events')

let dinnerArray = []
let dinnerNameArray = []
let rawData = ''

// console.log(api.currentIndex)
//
// if (api.currentIndex) {
//   //if (api.currentIndex === '' && store.user == null) {
//   $('#delete-dinner').show()
//   $('#update-dinner').show()
// } else {
//   $('#delete-dinner').hide()
//   $('#update-dinner').hide()
// }

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
  api.currentIndex = ''
  rawData = response
//  console.log(rawData.dinner)
  dinnerArray.length = 0
  dinnerNameArray.length = 0
  if (rawData.dinner.length === 0) {
    $('#message').text('Please Create a Dinner, there is currently nothing to show')
  } else {
  $('#message').text('All Dinners Loaded')
  $('.container').show()
  }
  for ( let i = 0; i < rawData.dinner.length; i++) {
    dinnerArray.push(rawData.dinner[i]._id)
    dinnerNameArray.push(rawData.dinner[i].name)
  $(`#${i}`).append(rawData.dinner[i].name + '<br>' + rawData.dinner[i].timeToPrepare)
  }
  }

const onShowAllDinnersFailure = function (error) {
  $('#message').text('Dinners failed to load')
  console.error('update Failure ran. Error is :', error)
}

const onUpdateDinnerSuccess = function (response) {
  api.currentIndex = ''
  //store.game = response.game
  //console.log('response: ', response)
  $('#message').text('Dinner Updated successfully')
//  console.log('UI response is: ', response)
  $('#update-dinner').trigger('reset')
}
//
const onUpdateDinnerFailure = function (error) {
  $('#message').text('Dinner failed to update')
  // console.log('error is: ', error)
}

const onDeleteDinnerSuccess = function (response) {
  api.currentIndex = ''
  //store.game = response.game
  //console.log('response: ', response)
  $('#message').text('Dinner Deleted successfully')
  //console.log('UI response is: ', response)
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
dinnerArray,
dinnerNameArray
}

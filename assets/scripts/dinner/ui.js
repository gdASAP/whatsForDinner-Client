const store = require('./../store')
const api = require('./api')

const onCreateDinnerSuccess = function (response) {
  //store.game = response.game
  //console.log('response: ', response)
  $('#message').text('Dinner Created successfully')
  //console.log('response is: ', response)
}

const onCreateDinnerFailure = function (error) {
  $('#message').text('Dinner failed to save')
  console.log('error is: ', error)
}

const onShowAllDinnersSuccess = function (response) {
  $('#message').text('All Dinners Loaded')
  console.log('response is: ', response)
  const rawData = response
  const formattedHtml = 'Dinners: ' + rawData
  $('#dinnerLog').append(JSON.stringify(rawData))

  //store.game = response.game
}

const onShowAllDinnersFailure = function (error) {
  $('#message').text('Dinners failed to load')
  console.error('update Failure ran. Error is :', error)
}

module.exports = {
onCreateDinnerSuccess,
onCreateDinnerFailure,
onShowAllDinnersSuccess,
onShowAllDinnersFailure
}

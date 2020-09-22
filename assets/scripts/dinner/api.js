const store = require('./../store')
const config = require('./../config')
const events = require('./events')
const ui = require('./ui')

const createDinner = function (data) {
//console.log('API call data: ', data)
//console.log('API call token: ', store.user.token)
  return $.ajax({
    url: config.apiUrl + '/dinner',
    method:'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const showAllDinners = function () {
// console.log('show dinners API called', store.user.token)
$('#0').text('')
$('#1').text('')
$('#2').text('')
$('#3').text('')
$('#4').text('')
$('#5').text('')
$('#6').text('')
$('#7').text('')
  return $.ajax({
    url: config.apiUrl + '/dinner',
    method:'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateDinner = function (data) {
console.log('API call data: ', data)
console.log('updating: ', `${ui.dinnerArray[0]}`)
  return $.ajax({
    url: config.apiUrl + '/dinner/' + `${ui.dinnerArray[0]}`,
    method:'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const deleteDinner = function () {
//ui.dinnerArray.length = 0
 console.log('deleting: ', `${ui.dinnerArray[0]}`)
 console.log('dinnerArray: ', `${ui.dinnerArray[0]}`)
  return $.ajax({
    url: config.apiUrl + '/dinner/' + `${ui.dinnerArray[0]}`,
    method:'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createDinner,
  showAllDinners,
  updateDinner,
  deleteDinner
}

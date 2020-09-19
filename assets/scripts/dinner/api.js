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
$('#dinnerLog').text('')
  return $.ajax({
    url: config.apiUrl + '/dinner',
    method:'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createDinner,
  showAllDinners
}

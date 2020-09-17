const store = require('./../store')
const config = require('./../config')
const events = require('./events')
const ui = require('./ui')

const createDinner = function (data) {
console.log('the data is: ', data)
  return $.ajax({
    url: config.apiUrl + '/dinner',
    method:'POST',
    headers: {
      Authorization: 'Authorization: Bearer=' + store.user.token
    },
    data: data
  })
}

const showAllDinners = function () {
console.log('show dinners API called', store.user.token)

  return $.ajax({
    url: config.apiUrl + '/dinner',
    method:'GET',
    headers: {
      Authorization: 'Authorization: Bearer=' + store.user.token
    }
  })
}

module.exports = {
  createDinner,
  showAllDinners
}

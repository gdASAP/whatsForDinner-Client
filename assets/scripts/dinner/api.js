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

const updateDinner = function (updateData) {
console.log('API call data: ', updateData)
console.log('API call token: ', store.user.token)
  return $.ajax({
    url: config.apiUrl + '/dinner/' + '5f68c6beb5238374d688c01a',
    method:'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    updateData: updateData
  })
}

const deleteDinner = function () {
//  console.log('deleting: ', `${dinnerArray[0]}`)
  return $.ajax({
    url: config.apiUrl + '/dinner/' + '5f66298e9074c95642d37ecc',
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

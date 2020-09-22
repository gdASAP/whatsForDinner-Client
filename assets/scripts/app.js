'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const dinnerEvents = require('./dinner/events.js')
const dinnerAPI = require('./dinner/api.js')

$(() => {
  // your JS code goes here
$(document).ready(authEvents.onPageLoad)
$('#sign-up-form').on('submit', authEvents.onSignUp)
$('#sign-in-form').on('submit', authEvents.onSignIn)
$('#change-pw-form').on('submit', authEvents.onChangePw)
$('#sign-out-form').on('submit', authEvents.onSignOut)
$('#create-dinner').on('submit', dinnerEvents.onCreateDinner)
$('#show-all-dinners').on('submit', dinnerEvents.onShowAllDinners)
$('#update-dinner').on('submit', dinnerEvents.onUpdateDinner)
$('#delete-dinner').on('submit', dinnerEvents.onDeleteDinner)
$('#0').on('click', dinnerAPI.onBoxClick)
$('#1').on('click', dinnerAPI.onBoxClick)
$('#2').on('click', dinnerAPI.onBoxClick)
$('#3').on('click', dinnerAPI.onBoxClick)
$('#4').on('click', dinnerAPI.onBoxClick)
$('#5').on('click', dinnerAPI.onBoxClick)
$('#6').on('click', dinnerAPI.onBoxClick)
$('#7').on('click', dinnerAPI.onBoxClick)
})

'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
const dinnerEvents = require('./dinner/events.js')

$(() => {
  // your JS code goes here
$('#sign-up-form').on('submit', authEvents.onSignUp)
$('#sign-in-form').on('submit', authEvents.onSignIn)
$('#change-pw-form').on('submit', authEvents.onChangePw)
$('#sign-out-form').on('submit', authEvents.onSignOut)
$('#create-dinner').on('submit', dinnerEvents.onCreateDinner)
$('#show-all-dinners').on('submit', dinnerEvents.onShowAllDinners)
$('#update-dinner').on('submit', dinnerEvents.onUpdateDinner)
$('#delete-dinner').on('submit', dinnerEvents.onDeleteDinner)
})

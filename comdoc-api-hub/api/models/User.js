/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  // Enforce model schema in the case of schemaless databases
  schema: true,
  connection: 'someMysqlServer',
  tableName: 'Users',

  attributes: {
    isAdmin: {
      type: 'boolean',
      defaultsTo: false,
    },

    // The user's username
    // e.g. Genius
    username: {
      type: 'string',
      required: true
    },

    // The user's phone number
    // e.g. 010-9077-1639
    phone_number: {
      type: 'string',
      required: true
    },

    // The user's location
    // e.g. 서울시 동대문구
    location: {
      type: 'string',
      enum: ['서울시 동대문구', '서울시 강남구'],
      required: true
    },

    // The user's email address
    // And it is User Table's primary key
    // e.g. nikola@tesla.com
    email: {
      type: 'string',
      primaryKey: true,
      // email: true,
      required: true,
      unique: true
    },

    // The encrypted password for the user
    // e.g. asdgh8a249321e9dhgaslcbqn2913051#T(@GHASDGA
    encryptedPassword: {
      type: 'string',
      required: true
    },

    // url for gravatar
    // it is for user's thumbnail
    gravatarUrl: {
      type: 'string'
    },

    // The timestamp when the the user last logged in
    // (i.e. sent a username and password to the server)
    lastLoggedIn: {
      type: 'date',
      required: true,
      defaultsTo: new Date()
    },

    request_sheets: {
      collection: 'Sheet',
      via: 'request'
    }

  }
};

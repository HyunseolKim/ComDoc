/**
* Company.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  // Enforce model schema in the case of schemaless databases
  schema: true,
  connection: 'someMysqlServer',
  tableName: 'Company',

  attributes: {
    email: {
      type: 'string',
      primaryKey: true,
      unique: true,
      required: true
    },

    encryptedPassword: {
      type: 'string',
      required: true
    },

    phone_number: {
      type: 'stirng',
      required: true
    },

    location: {
      type: 'string',
      enum: ['서울시 강남구', '서울시 동대문구'],
      required: true
    },

    address: {
      type: 'string',
      required: true
    },

    description: {
      type: 'text'
    },

    avg_point: {
      type: 'float',
      defaultsTo: 0
    },

    gravatarUrl: {
      type: 'string'
    },

    companyname: {
      type: 'string',
      required: true
    },

    adminname: {
      type: 'string',
      required: true
    },

    suggestion_sheets: {
      collection: 'Suggestion_sheet',
      via: 'owner'
    }
  }
};


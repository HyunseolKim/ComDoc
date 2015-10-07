/**
* Suggestion_sheet.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  // Enforce model schema in the case of schemaless databases
  schema: true,
  connection: 'someMysqlServer',
  tableName: 'Suggestion_Sheets',

  attributes: {
    suggest: {
      model: 'Sheet'
    },

    owner: {
      model: 'Company'
    },

    expect_price: {
      type: 'integer',
      required: true
    },

    expect_period: {
      type: 'string',
      required: true
    },

    comment: {
      type: 'text'
    },

    // 0: 초기값, 1: 거절, 2: 승인
    status: {
      type: 'integer',
      defaultsTo: 0
    },

    visit_time: {
      type: 'string',
      required: true
    },

    engineer: {
      type: 'string',
      required: true
    }
  }
};


/**
 * Suggestion_sheetController
 *
 * @description :: Server-side logic for managing suggestion_sheets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var async = require('async');

module.exports = {
	/**
	* Suggestion_sheet RESTful API GET
	* API Route : GET /suggestion_sheets?skip=0&limit=30&where={}&sort=id ASC
	*/
	find: find,
	/**
	* Suggestion_Sheet RESTful API GET One
	* API Route : GET /suggestion_sheets/:suggestionSheetId
	*/
	findOne : findOne,

	/**
	* Insert Suggestion Sheet Data
	*/
	insertSuggestionSheet: function(req, res) {
		Suggestion_sheet.create({
			  expect_prive : req.param('expect_price'),
	          expect_period: req.param('expect_period'),
	          comment: req.param('comment'),
	          visit_time: req.param('visit_time'),
	          engineer: req.param('engineer'),
	          status : 0
	        }, function suggestionSheetCreated(err, newSuggestionSheet) {
	          if (err) {

	            console.log("err: ", err);
	            console.log("err.invalidAttributes: ", err.invalidAttributes)

	            // Otherwise, send back something reasonable as our error response.
	            return res.negotiate(err);
	          }

	          // Send back the id of the new user
	          return res.json({
	            id: newSuggestionSheet.id
	          });
	        });
	}
};

function find(req,res){
	async.waterfall([
		findSuggestionSheets,
		matchLikes,
	], serviceUtil.reponse(req, res));

	// 견적서 조회
	function findSuggestionSheets(cb) {
		var criteria = {
			skip: parseInt(req.query.skip)		|| 0,
			limit: parseInt(req.query.limit)	|| 30,
			sort: req.query.sort 				|| 'id ASC',
			where: req.query.where
		};

		// string to JSON
		if (criteria.where) {
			try {
				criteria.where = JSON.parse(criteria.where);
			}
			catch (e) {
				return cb(e);
			}
		}
		else {
			delete criteria.where;
		}

		var query = Suggestion_sheet.find(criteria);

		query
		.then(function(suggestionSheets) {
			return cb(null, suggestionSheets);
		})
		.catch(function(error) {
			return cb(error);
		});
	}

}

function findOne(req, res) {
   async.waterfall([

	   findSuggestionSheet,

   ], serviceUtil.response(req, res));

   function findSuggestionSheet(cb) {
	   Sheet
	   .findOne({
		   id: req.param('id'),
	   })
	   .then(function(suggestionSheet) {
		   return cb(null, suggestionSheet);
	   })
	   .catch(cb);
   }
}
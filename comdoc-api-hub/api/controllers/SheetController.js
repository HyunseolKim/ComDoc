/**
 * SheetController
 *
 * @description :: Server-side logic for managing sheets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var async = require('async');

module.exports = {
	
	/**
	* Sheet RESTful API GET
	* API Route : GET /sheets?skip=0&limit=30&where={}&sort=id ASC
	*/
	find: find,
	/**
	* Sheet RESTful API GET One
	* API Route : GET /sheets/:sheetId
	*/
	findOne : findOne,

	/**
	* Insert Sheet Data
	*/
	insertSheet: function(req, res) {
		Sheet.create({
	          location: req.param('location'),
	          address: req.param('address'),
	          requester_phone: req.param('requester_phone'),
	          computer_type: req.param('computer_type'),
	          brand: req.param('brand'),
	          used_year: req.param('used_year'),
	          trouble_type: req.param('trouble_type'),
	          available_time: req.param('available_time'),
	          trouble_detail : req.param('trouble_detail'),
	          matching_status : 0,
	          created_date : new Date(),
	          gravatarUrl: gravatarUrl
	        }, function sheetCreated(err, newSheet) {
	          if (err) {

	            console.log("err: ", err);
	            console.log("err.invalidAttributes: ", err.invalidAttributes)

	            // Otherwise, send back something reasonable as our error response.
	            return res.negotiate(err);
	          }

	          // Send back the id of the new user
	          return res.json({
	            id: newSheet.id
	          });
	        });
	}
};

function find(req,res){
	async.waterfall([
		findSheets,
		matchLikes,
	], serviceUtil.reponse(req, res));

	// 견적서 조회
	function findSheets(cb) {
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

		var query = Sheet.find(criteria);

		query
		.then(function(sheets) {
			return cb(null, sheets);
		})
		.catch(function(error) {
			return cb(error);
		});
	}

}

function findOne(req, res) {
   async.waterfall([

	   findSheet,

   ], serviceUtil.response(req, res));

   function findSheet(cb) {
	   Sheet
	   .findOne({
		   id: req.param('id'),
	   })
	   .then(function(sheet) {
		   return cb(null, sheet);
	   })
	   .catch(cb);
   }
}


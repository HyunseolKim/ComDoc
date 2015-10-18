/**
 * ReviewController
 *
 * @description :: Server-side logic for managing reviews
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var async = require('async');

module.exports = {
	/**
	* Review RESTful API GET
	* API Route : GET /review?skip=0&limit=30&where={}&sort=id ASC
	*/
	find: find,
	/**
	* Review RESTful API GET One
	* API Route : GET /review/:reviewId
	*/
	findOne : findOne,

	/**
	* Insert Review Data
	*/
	insertReview: function(req, res) {
		Review.create({
			  expect_prive : req.param('expect_price'),
	          expect_period: req.param('expect_period'),
	          comment: req.param('comment'),
	          visit_time: req.param('visit_time'),
	          engineer: req.param('engineer'),
	          status : 0
	        }, function ReviewCreated(err, newReview) {
	          if (err) {

	            console.log("err: ", err);
	            console.log("err.invalidAttributes: ", err.invalidAttributes)

	            // Otherwise, send back something reasonable as our error response.
	            return res.negotiate(err);
	          }

	          // Send back the id of the new user
	          return res.json({
	            id: newReview.id
	          });
	        });
	}
};

function find(req,res){
	async.waterfall([
		findReviews,
		matchLikes,
	], serviceUtil.reponse(req, res));

	// 견적서 조회
	function findReviews(cb) {
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

		var query = Review.find(criteria);

		query
		.then(function(reviews) {
			return cb(null, reviews);
		})
		.catch(function(error) {
			return cb(error);
		});
	}

}

function findOne(req, res) {
   async.waterfall([

	   findReview

   ], serviceUtil.response(req, res));

   function findReview(cb) {
	   Review
	   .findOne({
		   id: req.param('id'),
	   })
	   .then(function(review) {
		   return cb(null, review);
	   })
	   .catch(cb);
   }
}

/**
 * SheetController
 *
 * @description :: Server-side logic for managing sheets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
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


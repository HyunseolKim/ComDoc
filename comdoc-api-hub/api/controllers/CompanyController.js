/**
 * CompanyController
 *
 * @description :: Server-side logic for managing companys
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  

  /**
   * Check the provided email address and password, and if they
   * match a real company in the database, sign in to Activity Overlord.
   */
  login: function (req, res) {

    // Try to look up company using the provided email address
    Company.findOne({
      email: req.param('email')
    }, function foundCompany(err, company) {
      if (err) return res.negotiate(err);
      if (!company) return res.notFound();

      // Compare password attempt from the form params to the encrypted password
      // from the database (`company.password`)
      require('machinepack-passwords').checkPassword({
        passwordAttempt: req.param('password'),
        encryptedPassword: company.encryptedPassword
      }).exec({

        error: function (err){
          return res.negotiate(err);
        },

        // If the password from the form params doesn't checkout w/ the encrypted
        // password from the database...
        incorrect: function (){
          return res.notFound();
        },

        success: function (){

          // Store company id in the company session
          req.session.me = company.id;

          // All done- let the client know that everything worked.
          return res.ok();
          // return res.json(500, { error: 'message' });
        }
      });
    });

  },

  /**
   * Sign up for a company account.
   */
  signup: function(req, res) {

    var Passwords = require('machinepack-passwords');

    // Encrypt a string using the BCrypt algorithm.
    Passwords.encryptPassword({
      password: req.param('password'),
      difficulty: 10,
    }).exec({
      // An unexpected error occurred.
      error: function(err) {
        return res.negotiate(err);
      },
      // OK.
      success: function(encryptedPassword) {
        require('machinepack-gravatar').getImageUrl({
          emailAddress: req.param('email')
        }).exec({
          error: function(err) {
            return res.negotiate(err);
          },
          success: function(gravatarUrl) {
          // Create a Company with the params sent from
          // the sign-up form --> signup.ejs
            Company.create({
              companyname: req.param('companyname'),
              email: req.param('email'),
              phone_number: req.param('phone_number'),
              location: req.param('location'),
              encryptedPassword: encryptedPassword,
              lastLoggedIn: new Date(),
              gravatarUrl: gravatarUrl
            }, function companyCreated(err, newCompany) {
              if (err) {

                console.log("err: ", err);
                console.log("err.invalidAttributes: ", err.invalidAttributes)

                // If this is a uniqueness error about the email attribute,
                // send back an easily parseable status code.
                if (err.invalidAttributes && err.invalidAttributes.email && err.invalidAttributes.email[0]
                  && err.invalidAttributes.email[0].rule === 'unique') {
                  return res.emailAddressInUse();
                }

                // Otherwise, send back something reasonable as our error response.
                return res.negotiate(err);
              }

              // Log company in
              req.session.me = newCompany.id;

              // Send back the id of the new company
              return res.json({
                id: newCompany.id
              });
            });
          }
        });
      }
    });
  },

  /**
   * Log out of Activity Overlord.
   * (wipes `me` from the sesion)
   */
  logout: function (req, res) {

    // Look up the company record from the database which is
    // referenced by the id in the company session (req.session.me)
    Company.findOne(req.session.me, function foundCompany(err, company) {
      if (err) return res.negotiate(err);

      // If session refers to a company who no longer exists, still allow logout.
      if (!company) {
        sails.log.verbose('Session refers to a company who no longer exists.');
        return res.backToHomePage();
      }

      // Wipe out the session (log out)
      req.session.me = null;

      // Either send a 200 OK or redirect to the home page
      return res.backToHomePage();

    });
  },

  /**
   * Check the provided email address and password, and if they
   * match a real company in the database, sign in to Activity Overlord.
   */
  loginAPI: function (req, res) {

    // Try to look up company using the provided email address
    Company.findOne({
      email: req.param('email')
    }, function foundCompany(err, company) {
      if (err) return res.negotiate(err);
      if (!company) return res.notFound();

      // Compare password attempt from the form params to the encrypted password
      // from the database (`company.password`)
      require('machinepack-passwords').checkPassword({
        passwordAttempt: req.param('password'),
        encryptedPassword: company.encryptedPassword
      }).exec({

        error: function (err){
          return res.negotiate(err);
        },

        // If the password from the form params doesn't checkout w/ the encrypted
        // password from the database...
        incorrect: function (){
          return res.notFound();
        },

        success: function (){

          // Store company id in the company session
          req.session.me = company.id;

          // All done- let the client know that everything worked.
          // return res.ok();
          return res.json(500, { error: 'message' });
        }
      });
    });

  }
};

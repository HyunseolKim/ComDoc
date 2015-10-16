/**
 * PageController
 *
 * @description :: Server-side logic for managing pages
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  showHomePage: function (req, res) {

    // If not logged in, show the public view.
    if (!req.session.me) {
      return res.view('homepage');
    }

    // Otherwise, look up the logged-in user and show the logged-in view,
    // bootstrapping basic user data in the HTML sent from the server
    User.findOne(req.session.me, function (err, user){
      if (err) {
        return res.negotiate(err);
      }

      if (!user && !company) {
        sails.log.verbose('Session refers to a user who no longer exists- did you delete a user, then try to refresh the page with an open tab logged-in as that user?');
        return res.view('homepage');
      }

      if (user) {
        return res.view('homepage', {
          me: {
            id: user.id,
            email: user.email,
            username: user.username,
            isAdmin: !!user.admin
          }
        })
      }

      else if (company) {
        return res.view('homepage', {
          me: {
            id: comapny.id,
            email: company.email,
            companyname: company.companyname
          }
        })
      }

      else {
        sails.log.verbose('Something wrong, go back to the homepage');
        return res.view('homepage');
      }

    });
  },

  showMyPage: function (req, res) {
    
  }

};

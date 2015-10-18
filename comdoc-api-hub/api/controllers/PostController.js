module.exports = {
  restricted: function(req, res) {
    return res.ok("You are authenticated.");
  },

  open: function(req, res) {
    return res.ok("This action is open.");
  },

  jwt: function(req, res) {
    // var token = waterlock._utils.allParams(req).access_token;
    // var user = waterlock.validator.findUserFromToken(token).user;

    return res.ok("You have a Json Web Token!");
  }
}
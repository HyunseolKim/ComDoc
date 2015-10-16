module.exports = {
  restricted: function(req, res) {
    return res.ok("You are authenticated.");
  },

  open: function(req, res) {
    return res.ok("This action is open.");
  },

  jwt: function(req, res) {
    return res.ok("you have a JSON Web Token.");
  }
}
'use strict';

// User routes use users controller
var BYOD = require('../controllers/BYOD');

// The Package is passed automatically as first parameter
module.exports = function(Theme, app, auth, database) {

  app.get('/BYOD', function(req, res, next) {
    res.send('This is where the BYOD functionality will be');
  });

  app.get('/theme/example/render', function(req, res, next) {
    Theme.render('index', {
      package: 'BYOD'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
    /**
     * Custom route for getting the user's information on the profile page. Executes the method getProfileInformation within
     * the users controller.
     */
    app.route('/payment/:userID')
        .get(BYOD.getProfileInformation);
};


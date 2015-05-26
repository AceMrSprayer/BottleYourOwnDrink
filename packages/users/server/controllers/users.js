'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    async = require('async'),
    config = require('meanio').loadConfig(),
    crypto = require('crypto'),
    nodemailer = require('nodemailer'),
    templates = require('../template');

/**
 * Get all the orders
 */
exports.getBetellingen = function (req, res) {  //
    console.log('Received a order request');


    var order1 = {
        id: '1',
        date: '01-01-2015',
        amount: '1',
        cost: '10'
    };
    var order2 = {
        id: '2',
        date: '01-01-2015',
        amount: '3',
        cost: '30'
    };
    var order3 = {
        id: '3',
        date: '01-01-2015',
        amount: '2',
        cost: '20'
    };

    var orderList = [order1, order2, order3];
    res.json(orderList);
};

//Get the users profile information
exports.getProfileInformation = function (req, res) {  //
    console.log('Received a profile information request');
    console.log('Profile ID: ' + req.params.userID);

    if (req.params.userID) {
        console.log('Trying to find a specific user..');
        var userID = mongoose.Types.ObjectId(req.params.userID);
            User
                .findOne({
                    _id: userID
                })
                .exec(function (err, user) {
                    if (err) console.log(err);
                    if (!user) console.log('User is niet gevonden!');
                    if (user) console.log('User is gevonden!');
                    res.send(user);
                });
    }

};

/**
 * Auth callback
 */
exports.authCallback = function (req, res) {
    res.redirect('/');
};

/**
 * Show login form
 */
exports.signin = function (req, res) {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    res.redirect('#!/login');
};

/**
 * Logout
 */
exports.signout = function (req, res) {
    req.logout();
    res.redirect('/');
};

/**
 * Session
 */
exports.session = function (req, res) {
    res.redirect('/');
};

/**
 * Create user
 */
exports.create = function (req, res, next) {
    var user = new User(req.body);

    user.provider = 'local';

    // because we set our user.provider to local our models/user.js validation will always be true
    req.assert('name', 'Je moet een naam invullen').notEmpty();
    req.assert('email', 'Je moet een valide e-mail opgeven').isEmail();
    req.assert('password', 'Wachtwoord moet tussen de 8-20 karakters zijn.').len(8, 20);
    req.assert('username', 'Gebruikersnaam kan niet langer zijn dan 20 karakters').len(1, 20);
    req.assert('confirmPassword', 'Wachtwoorden zijn niet gelijk').equals(req.body.password);

    var errors = req.validationErrors();
    if (errors) {
        return res.status(400).send(errors);
    }

    // Hard coded for now. Will address this with the user permissions system in v0.3.5
    user.roles = ['authenticated'];
    user.save(function (err) {
        if (err) {
            switch (err.code) {
                case 11000:
                case 11001:
                    res.status(400).json([{
                        msg: 'Gebruikersnaam is al in gebruik',
                        param: 'username'
                    }]);
                    break;
                default:
                    var modelErrors = [];

                    if (err.errors) {

                        for (var x in err.errors) {
                            modelErrors.push({
                                param: x,
                                msg: err.errors[x].message,
                                value: err.errors[x].value
                            });
                        }

                        res.status(400).json(modelErrors);
                    }
            }

            return res.status(400);
        }
        req.logIn(user, function (err) {
            if (err) return next(err);
            return res.redirect('/');
        });
        res.status(200);
    });
};
/**
 * Send User
 */
exports.me = function (req, res) {

    res.json(req.user || null);
};

/**
 * Find user by id
 */
exports.user = function (req, res, next, id) {
    User
        .findOne({
            _id: id
        })
        .exec(function (err, user) {
            if (err) return next(err);
            if (!user) return next(new Error('Gebruiker kan niet geladen worden: ' + id));
            req.profile = user;
            next();
        });
};

/**
 * Resets the password
 */

exports.resetpassword = function (req, res, next) {
    User.findOne({
        resetPasswordToken: req.params.token,
        resetPasswordExpires: {
            $gt: Date.now()
        }
    }, function (err, user) {
        if (err) {
            return res.status(400).json({
                msg: err
            });
        }
        if (!user) {
            return res.status(400).json({
                msg: 'Token invalid or expired'
            });
        }
        req.assert('password', 'Wachtwoord moet tussen de 8 en 20 karakters zijn').len(8, 20);
        req.assert('confirmPassword', 'Wachtwoorden zijn niet gelijk').equals(req.body.password);
        var errors = req.validationErrors();
        if (errors) {
            return res.status(400).send(errors);
        }
        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        user.save(function (err) {
            req.logIn(user, function (err) {
                if (err) return next(err);
                return res.send({
                    user: user
                });
            });
        });
    });
};

/**
 * Send reset password email
 */
function sendMail(mailOptions) {
    var transport = nodemailer.createTransport(config.mailer);
    transport.sendMail(mailOptions, function (err, response) {
        if (err) return err;
        return response;
    });
}

/**
 * Callback for forgot password link
 */
exports.forgotpassword = function (req, res, next) {
    async.waterfall([

            function (done) {
                crypto.randomBytes(20, function (err, buf) {
                    var token = buf.toString('hex');
                    done(err, token);
                });
            },
            function (token, done) {
                User.findOne({
                    $or: [{
                        email: req.body.text
                    }, {
                        username: req.body.text
                    }]
                }, function (err, user) {
                    if (err || !user) return done(true);
                    done(err, user, token);
                });
            },
            function (user, token, done) {
                user.resetPasswordToken = token;
                user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
                user.save(function (err) {
                    done(err, token, user);
                });
            },
            function (token, user, done) {
                var mailOptions = {
                    to: user.email,
                    from: config.emailFrom
                };
                mailOptions = templates.forgot_password_email(user, req, token, mailOptions);
                sendMail(mailOptions);
                done(null, true);
            }
        ],
        function (err, status) {
            var response = {
                message: 'Mail is verstuurd',
                status: 'success'
            };
            if (err) {
                response.message = 'Gebruiker bestaat niet';
                response.status = 'danger';
            }
            res.json(response);
        }
    );
};

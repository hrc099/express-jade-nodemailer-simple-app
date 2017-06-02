var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'contact' });
});

router.post('/send', function(req, res, next) {
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: '',
      pass: ''
    }
  });

  var mailOptions = {
    from: 'Korisnik forme',
    to: 'hrc099@gmail.com',
    subject: 'Website Submission',
    text: 'Poslano s test forme...Ime: '+req.body.ime+ ' Email: '+req.body.email+ ' Poruka: '+req.body.poruka,
    html: '<p>Poslano s test forme s podacima...</p><ul><li>Ime: '+req.body.ime+ '</li><li>Email: '+req.body.email+ '</li><li>Poruka: '+req.body.poruka+ '</li></ul>'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if(error) {
      console.log(error);
      res.redirect('/');
    } else {
      console.log('Poruka poslana: '+info.response);
      res.redirect('/');
    } 
  });
});

module.exports = router;
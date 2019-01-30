// var express = require('express');

// var router = express.Router();
// var nodemailer = require('nodemailer');
// router.post('/', sendMail);

// function sendMail(req,res) {
//     var smtpTransport = nodemailer.createTransport({
//         service: "Gmail",
//         auth: {
//           XOAuth2: {
//             user: "aashaytiwari1994@gmail.com", // Your gmail address.
//             clientId: "1058811850603-ivdcm59aupvbhv2htpro6mlm164afbii.apps.googleusercontent.com",
//             clientSecret: "eu9J83I4i77hqQBLXvHX5k-F",
//             refreshToken: "1/O4fqdMIoqldAUdYNWJ2xorATPHYVYXTs455zq3TWu4Y"
//           }
//         }
//       });
//     // Setup mail configuration
//     var mailOptions = {
//         from: req.body.contact.email, // sender address
//         to: 'aashaytiwari1994@gmail.com', // list of receivers
//         subject: 'Contact US Email From User', // Subject line
//         text: req.body.contact.message // plaintext body
//         //html: htmlBody // html body
//       };
//     smtpTransport.sendMail(mailOptions, function(error, info) {
//         if (error) {
//           return res.notOk({
//             status: 'error',
//             msg: 'Email sending failed'
//           })
//         } else {
//           console.log('Message %s sent: %s', info.messageId, info.response);
//           return res.ok({
//             status: 'ok',
//             msg: 'Email sent'
//           })
//         }
//         smtpTransport.close();
//     });
// }

// module.exports = router;
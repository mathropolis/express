module.exports = app => {
  const contactus = require("../controllers/contactus.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  // router.post("/", tutorials.create);
  // router.get("/",function (req, res) {
     // var nodemailer = require('nodemailer');
     //  var transporter = nodemailer.createTransport({
     //    service: 'Gmail',
     //    // service: 'smtp',
     //    auth: {
     //      // user: 'nasir5074@gmail.com',
     //      // pass: 'iclxqpozavdlejih'
     //      user: 'adnan.ali8648@gmail.com',
     //      pass: 'iclxqpozavdlejih'
     //    }
     //  });

     //  var mailOptions = {
     //    from: 'info@epapa.eu',
     //    to: 'adnan.ali8648@gmail.com',
     //    subject: 'You have received new query.',
     //    text: 'You have new query from !'
     //  };

     //  transporter.sendMail(mailOptions, function(error, info){
     //    if (error) {
     //      // return error;
     //      res.send(error);
     //    } else {
     //      // return 'Email sent: ' + info.response;
     //      res.send('Email sent: ' + info.response);
     //    }
     //  });
    // res.send('Hello World tttt sfs!');
  // });
  // Retrieve all Tutorials
  router.get("/", contactus.findAll);


  // Retrieve all published Tutorials
  router.post("/create", contactus.create);

  // // Retrieve a single Tutorial with id
  // router.get("/login", user.findOne);

  // // Update a Tutorial with id
  // router.put("/logout", user.update);

  // // Delete a Tutorial with id
  // router.delete("/:id", user.delete);


  // // Delete all Tutorials
  // router.delete("/", user.deleteAll);

  app.use('/api/contact', router);
};

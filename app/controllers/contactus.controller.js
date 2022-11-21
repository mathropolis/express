const Contact = require("../models/contactus.model.js");
// Create and Save a new Tutorial
exports.create = async (req, res) => {
 // res.send(req.body); 
  // Validate request
  if (!req.body || Object.keys(req.body).length === 0) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
   // res.send(encryptedPassword);
  // Create a Tutorial
  const insert_object = new Contact({
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    message: req.body.message
  });
  // res.send(user);
  // Save Tutorial in the database
  Contact.create(insert_object, (err, data) => {
    if (err){
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    }else{
     res.send(sendMail(insert_object));
    }
  });
};
sendMail=(user_info)=>{
  var nodemailer = require('nodemailer');
      var transporter = nodemailer.createTransport({
        service: 'Gmail',
        // service: 'smtp',
        auth: {
          user: 'nasir5074@gmail.com',
          pass: 'iclxqpozavdlejih'
          // user: 'adnan.ali8648@gmail.com',
          // pass: 'iclxqpozavdlejih'
        }
      });

      var mailOptions = {
        from: user_info.email,
        to: 'nasir5074@gmail.com',
        // to: 'adnan.ali8648@gmail.com',
        subject: 'You have received new query.',
        text: 'You have new query from '+user_info.name
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          // return error;
          res.send(error);
        } else {
          return 'Email sent: ' + info.response;
          // res.send('Email sent: ' + info.response);
        }
      });
};
// Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {
  const title = req.query.title;

  Contact.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

// // Find a single Tutorial by Id
// exports.findOne = (req, res) => {
//   Tutorial.findById(req.params.id, (err, data) => {
//     if (err) {
//       if (err.kind === "not_found") {
//         res.status(404).send({
//           message: `Not found Tutorial with id ${req.params.id}.`
//         });
//       } else {
//         res.status(500).send({
//           message: "Error retrieving Tutorial with id " + req.params.id
//         });
//       }
//     } else res.send(data);
//   });
// };

// // find all published Tutorials
// exports.findAllPublished = (req, res) => {
//   Tutorial.getAllPublished((err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials."
//       });
//     else res.send(data);
//   });
// };

// // Update a Tutorial identified by the id in the request
// exports.update = (req, res) => {
//   // Validate Request
//   if (!req.body) {
//     res.status(400).send({
//       message: "Content can not be empty!"
//     });
//   }

//   console.log(req.body);

//   Tutorial.updateById(
//     req.params.id,
//     new Tutorial(req.body),
//     (err, data) => {
//       if (err) {
//         if (err.kind === "not_found") {
//           res.status(404).send({
//             message: `Not found Tutorial with id ${req.params.id}.`
//           });
//         } else {
//           res.status(500).send({
//             message: "Error updating Tutorial with id " + req.params.id
//           });
//         }
//       } else res.send(data);
//     }
//   );
// };

// // Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {
//   Tutorial.remove(req.params.id, (err, data) => {
//     if (err) {
//       if (err.kind === "not_found") {
//         res.status(404).send({
//           message: `Not found Tutorial with id ${req.params.id}.`
//         });
//       } else {
//         res.status(500).send({
//           message: "Could not delete Tutorial with id " + req.params.id
//         });
//       }
//     } else res.send({ message: `Tutorial was deleted successfully!` });
//   });
// };

// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
//   Tutorial.removeAll((err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all tutorials."
//       });
//     else res.send({ message: `All Tutorials were deleted successfully!` });
//   });
// };

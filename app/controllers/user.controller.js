const User = require("../models/user.model.js");
var bcrypt = require('bcryptjs');
// Create and Save a new user
exports.create = async (req, res) => {
   // var user_exist =  User.checkUser(req.body.email).then(function (restaurant) {
   //      retvalue = restaurant.Name;
   //      console.log('restaurantName 1(' + id + ')' + retvalue);   
   //      return retvalue;           
   //  }).catch(function(error){
   //      return 'Error';
   //  });
  // var user_exist = await User.checkUser(req.body.email);
  // console.log("calle user cont=".user_exist);
  // if( user_exist > 0 ){
  //   res.send(user_exist);
  //   return;
  // }
  // Validate request=====================================================
  if (!req.body || Object.keys(req.body).length === 0) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
   const encryptedPassword = await bcrypt.hash(req.body.password, 10);
   // res.send(encryptedPassword);
  // Create a Tutorial
  const user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: encryptedPassword
  });
  // res.send(user);
  // Save Tutorial in the database
  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    else res.send(data);
  });
};

// Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {
  const title = req.query.title;

  User.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

exports.login = async (req,res)=>{
  var email    = req.body.email;
  var password = req.body.password;
  const encryptedPassword = await bcrypt.hash(password, 10);
  User.login(email,encryptedPassword,(err, data) => {
    if(err){
       res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    }else{
      console.log(encryptedPassword+"==="+data.password);
      bcrypt.compare(password, data.password, function(err, res) {
        console.log("bcrypt"+res);
      });

       res.send(data);
    }
  });
}

// Find a single Tutorial by Id
exports.findOne = (req, res) => {
  Tutorial.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Tutorial with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Tutorial with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

// find all published Tutorials
exports.findAllPublished = (req, res) => {
  Tutorial.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

// Update a Tutorial identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Tutorial.updateById(
    req.params.id,
    new Tutorial(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Tutorial with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Tutorial with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  Tutorial.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Tutorial with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Tutorial with id " + req.params.id
        });
      }
    } else res.send({ message: `Tutorial was deleted successfully!` });
  });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tutorial.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    else res.send({ message: `All Tutorials were deleted successfully!` });
  });
};

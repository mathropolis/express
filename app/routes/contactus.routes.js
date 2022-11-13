module.exports = app => {
  const contactus = require("../controllers/contactus.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  // router.post("/", tutorials.create);
  router.get("/",function (req, res) {
    res.send('Hello World tttt sfs!')
  });
  // Retrieve all Tutorials
  // router.get("/", contactus.findAll);


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

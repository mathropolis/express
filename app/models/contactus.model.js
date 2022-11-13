const sql = require("./db.js");

// constructor
const Contact = function(user) {
  this.name = user.first_name;
  this.email  = user.last_name;
  this.mobile = user.email;
  this.message = user.message;
};

Contact.create = (contact, result) => {
  sql.query("INSERT INTO users SET ?", user, (err, res) => {
    // res.send("after insert");
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created users: ", { id: res.insertId, ...user });
    result(null, { id: res.insertId, ...user });
  });
};

// User.findById = (id, result) => {
//   sql.query(`SELECT * FROM users WHERE id = ${id}`, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     }

//     if (res.length) {
//       console.log("found tutorial: ", res[0]);
//       result(null, res[0]);
//       return;
//     }

//     // not found  with the id
//     result({ kind: "not_found" }, null);
//   });
// };

// User.getAll = (title, result) => {
//   let query = "SELECT * FROM users";

//   if (title) {
//     query += ` WHERE title LIKE '%${title}%'`;
//   }

//   sql.query(query, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     console.log("tutorials: ", res);
//     result(null, res);
//   });
// };



module.exports = Contact;

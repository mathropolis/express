const sql = require("./db.js");

// constructor
const Contact = function(user) {
  this.name = user.name;
  this.email  = user.email;
  this.mobile = user.mobile;
  this.message = user.message;
};

Contact.create = (contact, result) => {
  sql.query("INSERT INTO contact_us SET ?", contact, (err, res) => {
    // res.send("after insert");
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created contact: ", { id: res.insertId, ...contact });
    result(null, { id: res.insertId, ...contact });
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

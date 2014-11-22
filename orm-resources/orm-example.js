/* You'll need to
 * npm install sequelize
 * before running this example. Documentation is at http://sequelizejs.com/
 */

var Sequelize = require("sequelize");
var sequelize = new Sequelize("chat", "root", "");
sequelize.query('INSERT INTO messages (name, text, room) VALUES (:name, :text, :room);',null, {raw: true},{name: "beth", text: "hi caro!", room: "8th"}).success(function(data){
  console.log("SUCCESS");
  console.log(data);
}).error(function(err){
  console.log(err);
});
/* TODO this constructor takes the database name, username, then password.
 * Modify the arguments if you need to */

/* first define the data structure by giving property names and datatypes
 * See http://sequelizejs.com for other datatypes you can use besides STRING. */
// var User = sequelize.define('User', {
//   name: Sequelize.STRING
// });

// var Message = sequelize.define('Message', {
//   name: Sequelize.INTEGER,
//   text: Sequelize.STRING,
//   room: Sequelize.STRING
//   createdAt:
// });

/* .sync() makes Sequelize create the database table for us if it doesn't
 *  exist already: */
// User.sync().success(function() {
//   /* This callback function is called once sync succeeds. */

//   // now instantiate an object and save it:
//   var newUser = User.build({name: "Jean Valjean"});
//   newUser.save().success(function() {

//     /* This callback function is called once saving succeeds. */

//     // Retrieve objects from the database:
//     User.findAll({ where: {name: "Jean Valjean"} }).success(function(usrs) {
//       // This function is called back with an array of matches.
//       for (var i = 0; i < usrs.length; i++) {
//         console.log(usrs[i].name + " exists");
//       }
//     });
//   });
// });

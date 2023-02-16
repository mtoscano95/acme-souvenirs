const Sequelize = require('sequelize');
//connection to database below
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_souvenirs_db');

// STEP 4 - creating our table for Person. Define method makes the table 
//STEP 6 and 7  we need to add name as a variable and if we want to make Lucy unique we would have to make the unique addition and allowNull since we will get null from adding another lucy 
const Person = conn.define('person', {
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    }
});  

//STEP 2 - adding conn fixes the cannot find db error
//STEP 5 - adding Person exports the table to server file and helps us create data for Person table
module.exports = {
    conn,
    Person
}
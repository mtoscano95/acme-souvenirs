/* //STEP 1 - Set up express app and port + listening
const express = require('express');
const app = express();

const port = process.env.PORT || 1995;

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})
*/

/* //STEP 2 - Setting up data layer (creating a db file and adding a db requirement). Getting error that db doesn't exist.

const express = require('express');
const app = express();
const db = require('./db');

const port = process.env.PORT || 1995;

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})

*/

// STEP 3 - Make app.listen async and connect to DB. We put in the await conn

/*


const express = require('express');
const app = express();
const db = require('./db');

const port = process.env.PORT || 1995;

app.listen(port, async()=> {
    try{
        await db.conn.sync({ force: true });
    }
    catch(er){
        console.log(er);
    }
});

*/


// STEP 4 - we go into PSQL and make the DB. We then go into the db.js file as well to make our tables.


//STEP 5 - we go to main folder, put in NODE and do const inflection = require('inflection'). this will pluralize your variables.

/* // STEP 6 - we want to add data into the Person table using await with db. we're missing the name variable for some reason, why? BC we need to define this within the db file.


const express = require('express');
const app = express();
const db = require('./db');

const port = process.env.PORT || 1995;

app.listen(port, async()=> {
    try{
        await db.conn.sync({ force: true });
        await db.Person.create({ name: 'lucy' });
    }
    catch(er){
        console.log(er);
    }
});
*/

/* //STEP 7 - If we have 2 inserts for Lucy, then we want to be able not to allow that


const express = require('express');
const app = express();
const db = require('./db');

const port = process.env.PORT || 1995;

app.listen(port, async()=> {
    try{
        await db.conn.sync({ force: true });
        await db.Person.create({ name: 'lucy' });
        await db.Person.create({ name: 'lucy' });
        await db.Person.create({ name: 'moe' });
        await db.Person.create({ name: 'larry' });
        await db.Person.create({ name: 'ethel' });
    }
    catch(er){
        console.log(er);
    }
});

*/


/* //STEP 8  - instead of having several db.person creates we could use await promise all. Promise.All is saying lets get all those db.person creates done it doesnt matter the order. Promise doesnt care order just cares if they all succedd. We get an array back from Promise.all.

const express = require('express');
const app = express();
const db = require('./db');

const port = process.env.PORT || 1995;

app.listen(port, async()=> {
    try{
        await db.conn.sync({ force: true });
        await Promise.all([
            db.Person.create({ name: 'lucy' }),
            db.Person.create({ name: 'moe' }),
            db.Person.create({ name: 'larry' }),
            db.Person.create({ name: 'ethel' })
        ]);
    }
    catch(er){
        console.log(er);
    }
});


*/

/* // STEP  9 - in order to get the correct order we woudl need to specicy the variable names within the promise. const [ name name name ] 


const express = require('express');
const app = express();
const db = require('./db');

const port = process.env.PORT || 1995;

app.listen(port, async()=> {
    try{
        await db.conn.sync({ force: true });
        //change here 
        const [lucy, moe, larry, ethel] = await Promise.all([
            db.Person.create({ name: 'lucy' }),
            db.Person.create({ name: 'moe' }),
            db.Person.create({ name: 'larry' }),
            db.Person.create({ name: 'ethel' })
        ]);
    }
    catch(er){
        console.log(er);
    }
});

*/



const express = require('express');
const app = express();
const db = require('./db');

const port = process.env.PORT || 1995;

app.listen(port, async()=> {
    try{
        await db.conn.sync({ force: true });
        //change here 
        const [lucy, moe, larry, ethel] = await Promise.all([
            db.Person.create({ name: 'lucy' }),
            db.Person.create({ name: 'moe' }),
            db.Person.create({ name: 'larry' }),
            db.Person.create({ name: 'ethel' })
        ]);
    }
    catch(er){
        console.log(er);
    }
});
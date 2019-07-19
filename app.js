// http://expressjs.com/en/starter/hello-world.html

const express = require('express')
const app = express()
const port = 3000




// https://band.us/band/76244612?referrer=
app.use(express.static('public'))

const path = require('path');
const router = express.Router();


router.get('/', function (req, res) {
res.sendFile(path.join(__dirname + '/index.html'));
//__dirname : It will resolve to your project folder.
});



app.use('/', router);





// http://expressjs.com/en/starter/hello-world.html

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


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

//현주
router.get('/hyunjoo/index', function (req, res) {
    res.sendFile(path.join(__dirname + '/hyunjoo/index.html'));
});
router.get('/hyunjoo/signup', function (req, res) {
    res.sendFile(path.join(__dirname + '/hyunjoo/signup.html'));
});
router.get('/hyunjoo/notice', function (req, res) {
    res.sendFile(path.join(__dirname + '/hyunjoo/notice.html'));
});

//값 받아오기
router.get('/index', function (req, res) {
    console.log(req.query);
    res.send('Request parameters :'+req.query.password+','+req.query.email)
    });
router.get('/signup', function (req, res) {
    console.log(req.query);
    res.send('Request parameters :'+req.query.password+','+req.query.email)
    });
router.get('/notice', function (req, res) {
    console.log(req.query);
    res.send('Request parameters :'+req.query.password+','+req.query.email)
    });

app.use('/', router);





// http://expressjs.com/en/starter/hello-world.html

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))


const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(require('./middlewares/requestContextMiddleware'));

app.post("/register", require('./controllers/registerHandler'));

app.listen(3333, () => {
    console.log('server started!!');
});
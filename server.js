const express = require ('express');
const hbs = require ('express-handlebars');
const mongoose = require('mongoose');
const helmet = require('helmet');

mongoose.connect(`mongodb+srv://buzzer79:Kumar123@cluster0-lm2e5.gcp.mongodb.net/testENV?retryWrites=true`,{ useNewUrlParser: true })
.then(()=>console.log('service is connected'))
.catch(e=>console.log(e));

const homepage = require('./routes/homepage');

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', ()=> {
//   console.log('connceted')
// });

const app = express();
app.use(helmet());

app.engine('hbs', hbs({
	extname:'hbs',
	layoutsDir:__dirname+'/views/layouts/',
	defaultLayout: 'index',
	partialsDir: __dirname+'partials'}
	));
app.set('view engine','hbs');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(helmet());
app.use(express.static('public'));

app.use('/',homepage);

app.listen(3000, ()=>{
	console.log('service is up');
})


// mongodb+srv://buzzer79:<PASSWORD>@cluster0-lm2e5.gcp.mongodb.net/test?retryWrites=true
// https://www.youtube.com/watch?v=eyKgivrIDpI&t=1284s

// mongoose.connect('mongodb+srv://buzzer79:<PASSWORD>@cluster0-lm2e5.gcp.mongodb.net/test?retryWrites=true');
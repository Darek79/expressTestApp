const {mongoose} = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb+srv://buzzer79:Kumar123@cluster0-lm2e5.gcp.mongodb.net/testENV?retryWrites=true`,{ useNewUrlParser: true })

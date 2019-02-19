const {mongoose} = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://buzzer79:K!mar123+#@cluster0-lm2e5.gcp.mongodb.net/testENV/test?retryWrites=true');

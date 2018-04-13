module.exports = (app) => {
    app.get('/', function(req, res) {
       res.render('index');
    });

    app.get('/pharmacist', function(req, res) {
        res.render('pharmacist-portal');
    });

    app.get('/doctor', function(req, res) {
        res.render('doctor-portal');
    });

    app.get('/reg-selection', function(req, res) {
         res.render('reg-selection');
     });


}

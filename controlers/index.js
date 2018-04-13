module.exports = (app) => {
  app.get('/', function(req, res) {
       res.render('index');
   });

   app.get('/pharmacist', function(req, res) {
        res.render('pharmacist-portal');
    });

}

var axios = require('axios');

module.exports = function(app, passport) {
    app.get('/', function(req, res) {
        res.render('index.ejs');
    });

    app.post('/trackdetails', function(req, res) {
       res.setHeader('Content-Type', 'application/json');
       var trackuri = req.body.trackuri.search("track") + 6;
       var spotifyurl = 'https://api.spotify.com/v1/tracks/' + req.body.trackuri.substr(trackuri);
       axios.get(spotifyurl).then(function (response) {
          console.log(response);
       }).catch(function (error) {
          console.log("deu ruim fei");
       });
    });
};

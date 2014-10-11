module.exports = function(app, passport) {
	
	app.get('/idea', function(req, res){
		res.render('idea.ejs');
	});
	
	
}

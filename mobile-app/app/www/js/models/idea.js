HeroIdea.Models.Idea = Backbone.Model.extend({
  urlRoot: 'http://hero-idea.herokuapp.com/api/ideas/',
  
  parse: function(jsonResp){
   if(jsonResp.ideas){
      var resp = jsonResp.ideas;
			this.id = resp._id;
      delete jsonResp.ideas;
    }
    return jsonResp;
  }
	

});
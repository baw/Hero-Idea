HeroIdea.Collections.Ideas = Backbone.Collection.extend({
  url: 'http://hero-idea.herokuapp.com/api/ideas/',
  
  model: HeroIdea.Models.Idea,

  getOrFetch: function(id){
    var ideas = this;
    var idea; 
    if(idea = this.get(id)){
      // idea.fetch();
			console.log('lol');
    } else {
      idea = new HeroIdea.Models.Idea({id: id});
      idea.fetch();
      ideas.add(idea);
    }
    return idea;
  }, 
	
	parse: function(jsonResp){
		_.each(jsonResp, function(idea){
			idea.id = idea._id 
		});
		return jsonResp;
	}
});

HeroIdea.Collections.ideas = new HeroIdea.Collections.Ideas();
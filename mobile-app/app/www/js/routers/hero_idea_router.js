HeroIdea.Routers.HeroIdeaRouter = Backbone.Router.extend({
	  routes: {
			'' : '',
			'ideas' : 'ideasIndex'
		},
		// Serves up the most recent 20 ideas
		ideasIndex : function(){
			var router = this;
			var ideas = HeroIdea.Collections.ideas.fetch();
	    var ideasView = new HeroIdea.Views.IndexView({
				collection: HeroIdea.Collections.ideas
	    });
			router._swapView(ideasView);
		
		},
	  _swapView: function(newView){
	    if(this.currentView){
	      this.currentView.remove();
	    } 
	    $('body').html(newView.render().$el);
	    this.currentView = newView;
	  }
		
			
});
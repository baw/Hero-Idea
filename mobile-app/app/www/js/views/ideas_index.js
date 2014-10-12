HeroIdea.Views.IndexView = Backbone.View.extend({
	
	initialize: function() {
		this.listenTo(this.collection, 'add', this.render);
		this.upVoted = false;
		this.downVoted = false;
		this.voted = false;
	},
	
	events: {
		'click .right-slider' : 'ideaShow',
		'click .panel-group' : 'showDescription',
		'click .upvote' : 'upvote',
		'click .downvote' : 'downvote'
	},

  template: _.template($('#idea-index').html()),
	
	upvote : function(event){
		$(event.target).toggleClass('voted');
		$(event.target).parent().find('.downvote').removeClass('voted');
	},
	
	downvote: function(event){
		$(event.target).toggleClass('voted');
		$(event.target).parent().find('.upvote').removeClass('voted');
		},
	
	showDescription: function(event){
		console.log('fizz');
		modelID = $(event.target).attr('data-id');
		// model = HeroIdea.Collections.ideas.getOrFetch(modelID);
		$('[data-id = "' + modelID + '"]').parent().parent().find('.collapse').collapse('toggle');
	},
	
	ideaShow: function(event){
		console.log('buzz');
		event.stopImmediatePropagation();
	},
	
  render: function(){
    var content = this.template({ideas: this.collection.models});
    this.$el.html(content);
    return this;
  }
});
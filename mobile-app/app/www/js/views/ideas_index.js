HeroIdea.Views.IndexView = Backbone.View.extend({
	initialize: function() {
		this.listenTo(this.collection, 'add', this.render);
	},
	
	events: {
		'click .right-slider' : 'ideaShow',
		'click .panel-group' : 'showDescription'

	},

  template: _.template($('#idea-index').html()),
	
	showDescription: function(event){
		console.log('fizz');
		modelID = $(event.target).attr('data-id');
		// model = HeroIdea.Collections.ideas.getOrFetch(modelID);
		$('[data-id = "' + modelID + '"]').parent().parent().find('.collapse').collapse('toggle');

		// $(event.target).find('.description').html(model.escape('description'));
		//
		// $(event.target).addClass('active-idea');

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
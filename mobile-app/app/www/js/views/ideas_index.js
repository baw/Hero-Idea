HeroIdea.Views.IndexView = Backbone.View.extend({
	initialize: function() {
		this.listenTo(this.collection, 'sync', this.render);
	},
	
	events: {
		'click .right-slider' : 'ideaShow',
		'click li:not(div.right-slider)' : 'showDescription'

	},

  template: _.template($('#idea-index').html()),
	
	showDescription: function(event){

			console.log('fizz')

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
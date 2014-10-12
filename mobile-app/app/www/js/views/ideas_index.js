HeroIdea.Views.IndexView = Backbone.View.extend({
	initialize: function() {
		this.listenTo(this.collection, 'sync', this.render);
	},

  template: _.template($('#idea-index').html()),

  render: function(){
    var content = this.template({ideas: this.collection.models});
    this.$el.html(content);
    return this;
  }
});
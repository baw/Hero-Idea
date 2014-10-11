window.HeroIdea = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new HeroIdea.Routers.HeroIdeaRouter();
    Backbone.history.start();
  }
};
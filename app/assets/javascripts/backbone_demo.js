window.BackboneDemo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var tweets = new BackboneDemo.Collections.Tweets();

    var router = new BackboneDemo.Routers.Router({
      $rootEl: $('#main'),
      tweets: tweets
    });

    var nav = new BackboneDemo.Views.NavShow({
      router: router,
      collection: tweets
    });

    $("#navbar").html(nav.render().$el);

    Backbone.history.start();
  }
};

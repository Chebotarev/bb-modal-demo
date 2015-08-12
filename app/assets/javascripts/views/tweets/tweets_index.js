BackboneDemo.Views.TweetsIndex = Backbone.View.extend({
  template: JST['tweets/index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.collection.each(function(tweet) {
      var view = new BackboneDemo.Views.TweetsIndexItem({
        model: tweet
      });
      this.$('ul').prepend(view.render().$el);
    }, this);

    return this;
  },
});

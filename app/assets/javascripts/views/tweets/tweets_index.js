BackboneDemo.Views.TweetsIndex = Backbone.View.extend({
  template: JST['tweets/index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
  },

  events: {
    'click .btn-compose': 'composeTweet'
  },

  composeTweet: function () {
    var formView = new BackboneDemo.Views.TweetForm();
    $('body').append(formView.render().$el);
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

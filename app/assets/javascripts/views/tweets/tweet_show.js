BackboneDemo.Views.TweetShow = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },
  template: JST["tweets/show"],
  render: function () {
    var content = this.template({
      tweet: this.model
    });
    this.$el.html(content);
    return this;
  },
});

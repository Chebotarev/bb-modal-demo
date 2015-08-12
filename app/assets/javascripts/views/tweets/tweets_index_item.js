BackboneDemo.Views.TweetsIndexItem = Backbone.View.extend({
  template: JST["tweets/index_item"],
  tagName: "li",
  className: "list-group-item",

  render: function () {
    var content = this.template({
      tweet: this.model
    });
    this.$el.html(content);
    return this;
  },

  events: {
    'click button': 'deleteTweet'
  },

  deleteTweet: function () {
    this.model.destroy();
    // this.remove();

  },
});

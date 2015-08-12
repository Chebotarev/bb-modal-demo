BackboneDemo.Views.TweetForm = Backbone.View.extend({
  template: JST['tweets/form'],

  render: function () {
    this.$el.html(this.template);
    return this;
  }
});

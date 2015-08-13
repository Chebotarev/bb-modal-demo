BackboneDemo.Views.TweetForm = Backbone.View.extend({
  template: JST['tweets/form'],

  events: {
    'click .m-background': 'remove',
    'submit form': 'createTweet'
  },

  initialize: function () {
    $(document).on('keyup', this.handleKey.bind(this));
  },

  createTweet: function (event) {
    event.preventDefault();
  },

  handleKey: function (event) {
    if (event.keyCode === 27) {
      this.remove();
    }
  },

  render: function () {
    this.$el.html(this.template);
    return this;
  }
});

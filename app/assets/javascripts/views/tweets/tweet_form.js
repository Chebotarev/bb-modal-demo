BackboneDemo.Views.TweetForm = Backbone.View.extend({
  template: JST['tweets/form'],

  events: {
    'click .m-background': 'remove',
    'click .close-modal': 'remove',
    'submit form': 'createTweet'
  },

  initialize: function () {
    $(document).on('keyup', this.handleKey.bind(this));
  },

  createTweet: function (event) {
    event.preventDefault();
    var formData = $(event.currentTarget).serializeJSON().tweet;
    this.model.save(formData, {
      success: function (tweet) {
        this.collection.add(tweet);
        this.remove();
      }.bind(this)
    });
  },

  handleKey: function (event) {
    if (event.keyCode === 27 || event.which === 27) {
      this.remove();
    }
  },

  render: function () {
    this.$el.html(this.template);
    return this;
  }
});

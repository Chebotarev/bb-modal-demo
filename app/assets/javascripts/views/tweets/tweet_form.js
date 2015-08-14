BackboneDemo.Views.TweetForm = Backbone.View.extend({
  template: JST['tweets/form'],

  events: {
    'submit form': 'createTweet',
    'click .m-background': 'remove',
    'click .close': 'removeBtn'
  },

  initialize: function () {
    $(document).on('keyup', this.handleKey.bind(this));
  },

  handleKey: function (event) {
    if (event.keyCode === 27) {
      this.remove();
    }
  },

  removeBtn: function (event) {
    event.preventDefault();
    this.remove();
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

  render: function () {
    this.$el.html(this.template());
    this.onRender();
    return this;
  },

  onRender: function () {
    $('.text-field').focus();
  }
});

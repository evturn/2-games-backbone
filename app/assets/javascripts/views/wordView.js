var WordView = Backbone.View.extend({
	el: '#word',
	tagName: 'li',
	template: _.template($('#word-view-template').html()),
	initialize: function() {
		this.listenTo(words, 'reset', this.render);
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});

console.log('WordView');
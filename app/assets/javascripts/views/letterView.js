var LetterView = Backbone.View.extend({
	tagName: 'li',
	template: _.template($('letter-view-template').html()),
	initialize: function() {
		this.listenTo(this.collection, 'reset', this.render)
	}
	render: function() {
		this.$el.html.(this.template(this.model.toJSON()));
		return this;
	}
});
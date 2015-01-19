var FrontDoorView = Backbone.View.extend({
	el: '#games',
	className: 'col-md-4 col-offset-2',
	template: _.template($('#hangman').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el
	}
});
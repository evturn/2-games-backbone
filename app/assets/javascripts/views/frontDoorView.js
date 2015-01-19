var FrontDoorView = Backbone.View.extend({
	el: '#games',
	className: 'col-xs-5 col-xs-offset-1 col-md-5 col-md-offset-1',
	template: _.template($('#hangman').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el
	}
});
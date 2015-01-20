var LetterView = Backbone.View.extend({
	tagName: 'li',
	template: _.template($('letter-view-template').html()),
	initialize: function() {
		this.render();
	}
});
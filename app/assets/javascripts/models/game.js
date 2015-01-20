var Game = Backbone.Model.extend({
	urlRoot: '/words,
	defaults: {
		word: "",
		state: "",
		tries: 0
	}
});
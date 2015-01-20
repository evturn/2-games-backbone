words = new Words({});
words.fetch();


$(function() {
	wordView = new WordView({collection: words});
});
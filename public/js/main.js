

var Page = function(){
	var self = this;
	self.images = [
		'http://lorempixel.com/200/200/',
		'http://lorempixel.com/200/100/',
		'http://lorempixel.com/200/120/',
		'http://lorempixel.com/200/130/',
		'http://lorempixel.com/200/140/',
		'http://lorempixel.com/200/150/',
		'/test'
	]

	self.init = function(){
		var load = [];
		$('#container img').each(function(e, ind){
			var $el = $(this);
			var d = $.Deferred();
			$el.load(function(){
				console.log($el.attr('src'));
				d.resolve();
			})
			load.push(d.promise())
		})

		$.when.apply(null, load).done(function(){
	        alert('sdf');   
	    })		
	}
}

$(function(){
	var vm = new Page();
	ko.applyBindings(vm);
	vm.init();

})
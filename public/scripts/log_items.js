$(document).ready(function() {
	window.LogItemList = Backbone.Collection.extend({
		url: 'log_items'
	});
	
	window.LogItemListView = Backbone.View.extend({
		el: 'ul',
		initialize: function() {
			var templateText = jQuery("#entry-template").html();	
			this.template = Handlebars.compile(templateText);
		},
		
		render: function() {
		
			var htmlString = this.template({log_items : list.toJSON()});
			$(this.el).html(htmlString);
			$("div#button_header").click(function() {									
				var header = $(this);
				var detail = header.parent().find('.content');
				detail.toggleClass("hidden");			
			});			
			return this;   
		}		
	});
	
	var list = new LogItemList();
	var view = new LogItemListView();
	list.fetch({
		success: function() { view.render(); }
	});
});




/*

$(document).ready(function() {
	$.getJSON("data.json", function(data){
		var templateText = $("#entry-template").html();
		var template = Handlebars.compile(templateText);
				
		var htmlString = template({log_items : data});
	
		$('.log_list').html(htmlString);
		
		$("div#button_header").click(function() {									
			var header = $(this);
			var detail = header.parent().find('.content');
			detail.toggleClass("hidden");			
		});		
	});
});





*/

$(document).ready(function() {
	$.getJSON("data.json", function(data){
		var templateText = $("#entry-template").html();
		var template = Handlebars.compile(templateText);
				
		var htmlString = template({log_items : data});
		//console.log(htmlString);
		$('.log_list').html(htmlString);
		
		$("div#button_header").click(function() {									
			var header = $(this);
			var detail = header.parent().find('.content');
			detail.toggleClass("hidden");			
		});		
	});
});












/*
var o = {};
		o.logItems = data;*/

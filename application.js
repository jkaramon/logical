

$(document).ready(function() {
	$.getJSON("data.json", function(json){		//	$.getJSON("data.js", function(json){		

		var x=json.length;
		console.log("Records: " + x);			
		for(i=0;i<x;i++){

			$.each(json[i], function(key, val) {
					
				var template = '<li class="item">{{key}}: {{val}}</li>';			
				$("<li><strong>" + key + ": </strong>"+ val + "</li>").appendTo("#list");	//	$("<li><a href='http://" + val + "'>" + val + "</a></li>").appendTo("#list");
				$("strong").css("color","blue");


				}); // each()
				console.log("jskjsjsjjss");

				$("<br></br>").appendTo("ul#list");

			}
			}); // .getJSON()
			}); // ready()
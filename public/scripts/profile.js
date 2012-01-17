
$(document).ready(function(){

	window.User = Backbone.Model.extend();	
	window.UserView = Backbone.View.extend({
		el: 'div.user',
		initialize: function() {
			var template_text = $('#profile_template').html();
			this.template = Handlebars.compile(template_text);			
		},

		render: function() {
			var renderContent = this.template(this.model.toJSON());
			$(this.el).html(renderContent);
			return this;
		}
	});

	var user = new User();
	user.url = 'profile';	
	
	var userView = new UserView({model : user});

	user.fetch({
		success: function(model, response) {
			userView.render();
			
		}
	});			
});
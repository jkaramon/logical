require 'rubygems' 
require 'sinatra'
require 'json'


get '/profile' do
  content_type 'application/json', :charset => 'utf-8'
  {
    :firstName => "Ladislav", 
    :lastName => "Solc", 
    :email => "ladislav.solc@gmail.com", 
    :phone => "723 743 208", 
    :country => "Czech Republic"		
    }.to_json
end

get '/log_items' do

  items = []

  100.times do |i|
    items << {
      :host => "sd.vanilladesk.com",
      :short_message => "Failure #{i}",
      :full_message => "app/helpers/text_helper.rb:35:in",
      :timestamp => 1291899928,
      :level => "#{i}",
      :file => "/var/www/somefile.rb",
      :line => "356",
      :_user_id => "jkaramon",
      :custom_data => {
        :application => "VanillaDesk",
        :app_version => "1.0.2345",
        :component => "job_server"
      }
    }
  end
  content_type 'application/json', :charset => 'utf-8'
  items.to_json
end

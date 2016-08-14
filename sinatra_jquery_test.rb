require 'sinatra'
require "sinatra/json"

get '/' do
  erb :app
end

post '/auth' do 
  p "checking... username: #{params[:username]} password: #{params[:password]}"
  #if exists
  json :access_token => "tokenidveryverybig"
end


get '/channels' do 
  p "channels endpoint hit"
  p params
  if params["access_token"] then
    p json :url => 'thebigurl'
    return json :channel_url => 'thebigurl'
  else
    p "not authorized"
    return "not authorized"
  end
=begin
  if request.xhr?
    #%q{<h1 class="blue">Hello! <a href="/">back</a></h1>}
    '<h1 class="blue">Hello! <a href="/">back</a></h1>'
    json :url => 'thebigurl'
  else
    "<h1>Not an Ajax request!</h1>"
  end
=end
end



require "sinatra"

get '/' do
  erb :index
end

post '/nuevo/objeto' do
  "Hola! #{params[:verbo]}"
end

input (
  type= "text"
  name= "verbo"
)
input  (
  type= "submit"
  value= "Saludame!"
)

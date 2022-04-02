class StaticPagesController < ApplicationController
  def home
    render 'home'
  end

  def user 
    @data = { user_id: params[:id] }.to_json
    render 'user'
  end

end

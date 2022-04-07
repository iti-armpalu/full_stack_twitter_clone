class StaticPagesController < ApplicationController
  def home
    render 'home'
  end

  def userfeed
    @data = { username: params[:username] }.to_json

    render 'userfeed'
  end

end

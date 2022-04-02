class StaticPagesController < ApplicationController
  def home
    render 'home'
  end

  def profile 
    render 'profile'
  end

end

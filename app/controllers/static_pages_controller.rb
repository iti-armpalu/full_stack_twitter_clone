class StaticPagesController < ApplicationController
  def home
    # getting the current user
    token = cookies.signed[:twitter_session_token]
    session = Session.find_by(token: token)
    user = session.user

    @data = { user_id: user.id, username: user.username, email: user.email }.to_json
    # Incorrect: @data = { user_id: params[:id] }.to_json
    render 'home'
  end

  def profile 
    render 'profile'
  end

end

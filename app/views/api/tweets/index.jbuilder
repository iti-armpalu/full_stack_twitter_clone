json.tweets do
  json.array! @tweets do |tweet|
    json.id         tweet.id
    json.message    tweet.message
    json.created_at tweet.created_at
    json.user_id    tweet.user_id
    json.username   tweet.user.username

    if tweet.image.attached?
      json.image    url_for(tweet.image)
    else
      json.image    nil
    end
  end
end

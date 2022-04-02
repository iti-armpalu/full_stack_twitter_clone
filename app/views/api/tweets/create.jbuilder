json.tweet do
  json.username @tweet.user.username
  json.message  @tweet.message
end

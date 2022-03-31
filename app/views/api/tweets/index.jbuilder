json.tweets do
  json.array! @tweets do |tweet|
    json.id tweet.id
    json.message tweet.message
  end
end

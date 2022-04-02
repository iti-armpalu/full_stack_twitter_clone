json.session do
  json.id @session.id
  json.username @session.user.username
  json.email @session.user.email
end
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Cleaning database..."
puts "Destroying users..."

Message.destroy_all

puts "Destroying users"
User.destroy_all

puts "Destroying channels"
Channel.destroy_all

puts "Creating base channels..."

channels = [
   {name: "general"},
   {name: "random"},
   {name: "react"}
]

channels.each do |channel|
   Channel.create channel
end
puts "Created channels!"

puts "Creating users...."

users = [
  {email: "kieran@gmail.com", password: "test"},
  {email: "emily@gmail.com", password: "test-2"}
]

users.each do |user|
   User.create user
end

puts "Created users!"

puts "Creating messages"

messages = [
  {content: "hi", user: User.first, channel: Channel.first},
  {content: "yo", user: User.first, channel: Channel.first},
  {content: "no way!", user: User.first, channel: Channel.first},
  {content: "how are things?", user: User.first, channel: Channel.first},
  {content: "wasuppppp", user: User.first, channel: Channel.first}
]

messages.each do |message|
   Message.create message
end

puts "Created messages!"

puts "Finished."




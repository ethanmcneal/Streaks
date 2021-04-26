# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples: yay
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#got a call brb
UserStreak.destroy_all
Comment.destroy_all
Streak.destroy_all
User.destroy_all


category_opt = [
  'Sport',
  'Health',
  'Habit',
  'Intellect',
  'Art',
  'Game',
  'Physical Feat',
  'Cuisine',
]
# category_opt.sample

10.times do 
    # num_category = rand(0..category_opt.length)
    name = "Dont eat #{Faker::Food.dish}"
    description = Faker::ChuckNorris.fact
    reward = Faker::Games::ElderScrolls.weapon
    punishment = Faker::Games::DnD.monster
    timeline = Faker::Date.between(from: 2.years.ago, to: Date.today)
    Streak.create(name: name, description: description, reward: reward, punishment: punishment, category: category_opt.sample(1), timeline: timeline, owner: rand(1..20) )
end

20.times do
    name = Faker::GreekPhilosophers.name
    nickname = Faker::Internet.username
    email = Faker::Internet.email
    avatar = Faker::Avatar.image(slug: name, size: '100x100', set: "set#{rand(1..5)}", bgset: 'bg1')
    User.create(password:'123456', name: name, nickname: nickname, email: email, image: avatar)
end

10.times do |i|
    status = 'ongoing'
    UserStreak.create(user_id: i, streak_id: i, status: status)
end

50.times do |i|
    comment = Faker::Music::Rush.album 
    Comment.create(user_id: i, streak_id: i, info: comment)
    puts "seeded #{i} datas"
end

# 5.times do |i|
#     comment = Faker::Music::Rush.album 
#     Comment.create(user_id: i, streak_id: i, info: comment)
#     puts "seeded #{i} datas"
# end

        
# for when needing to reseed db. ex: streak_id: rand(16..20) instead of i



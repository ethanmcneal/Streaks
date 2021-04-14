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
    name = Faker::Verb.simple_present
    description = Faker::ChuckNorris.fact
    reward = Faker::Games::ElderScrolls.weapon
    punishment = Faker::Games::DnD.monster
    Streak.create(name: name, description: description, reward: reward, punishment: punishment, category: category_opt.sample(1) )
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

10.times do |i|
    comment = Faker::Music::Rush.album 
    Comment.create(user_id: i, streak_id: i, info: comment)
    puts "seeded #{i} datas"
end


        
# for when needing to reseed db. ex: streak_id: rand(16..20) instead of i



    # todo create_table "comments", force: :cascade do |t|
    # t.bigint "user_id", null: false
    # t.bigint "streak_id", null: false
    # t.string "comment" Faker::TvShows::Friends.quote
    # t.string "media"
    # t.integer "cheer" (default is zero, we can keep that as is)
    # t.integer "laugh" (default is zero, we can keep that as is)

    # todo create_table "streaks", force: :cascade do |t|
    #   t.string "name"
    #   t.string "description"
    #   t.datetime "timeline"
    #   t.string "reward"
    #   t.string "punishment" Faker::Food.vegetables
    #   t.string "category"
    #   t.boolean "open"

    #todo create_table "user_streaks", force: :cascade do |t|
    #   t.bigint "user_id", null: false
    #   t.bigint "streak_id", null: false
    #   t.string "status"
    #   t.string "media"

    # todo users
    # name, Faker::Name.name   
    # nickname, email:email, avatar, win:integer, loss:integer
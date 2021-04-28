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

nickname_opt = [
    'BobbyNewport',
    'Health',
    'Habit',
    'Intellect',
    'Art',
    'Game',
    'Physical Feat',
    'Cuisine',
  ]

Streak.create(name: "Coffee Break", 
    description: "Do not drink coffee", 
    reward: "$5 from all losing participants", 
    punishment: "Pay the winner $5", 
    category: "Health", 
    timeline: Faker::Date.between(from: 2.months.ago, to: Date.today), 
    owner: "1" )

Streak.create(name: "5k Everyday", 
    description: "Run a 5k every day!", 
    reward: "Amazing gams", 
    punishment: "Looking like you skip leg day, because you do.", 
    category: "Physical Feat", 
    timeline: Faker::Date.between(from: 2.months.ago, to: Date.today), 
    owner: "2" )

Streak.create(name: "No Smoking!", 
    description: "Refrain from smoking all together", 
    reward: "Having more time with your loved ones", 
    punishment: "Start over until it sticks", 
    category: "Habit", 
    timeline: Faker::Date.between(from: 7.months.ago, to: Date.today), 
    owner: "3" )

Streak.create(name: "A Puzzle a Day Keeps the Dementia Away", 
    description: "Complete the daily NY Times Crossword and Sudoku puzzles", 
    reward: "Gloating rights and your picture on the wall of smart cookies", 
    punishment: "Get your picture on the wall of shame", 
    category: "Intellect", 
    timeline: Faker::Date.between(from: 2.months.ago, to: Date.today), 
    owner: "4" )

Streak.create(name: "Inktober, but Forever", 
    description: "Create one piece of art each day based on the prompt posted in this channel by the creator", 
    reward: "Ability to pick from the losers and your artwork to display at the gallery once the streak ends", 
    punishment: "Get a henna tattoo by the winner of their choice", 
    category: "Art", 
    timeline: Faker::Date.between(from: 2.months.ago, to: Date.today), 
    owner: "5" )

Streak.create(name: "Dungeons and Dragons 'til We Drop", 
    description: "Play D&D every Monday without skipping a session", 
    reward: "Gain a new free magical in game item every 5 weeks you don't miss", 
    punishment: "Miss out on a fancy new magical item for your character", 
    category: "Game", 
    timeline: "F2021-04-30T18:00:00.000Z", 
    open: "true",
    owner: "6" )

Streak.create(name: "Touch Football for Life", 
    description: "Play touch football with the team every Saturday morning without missing a practice", 
    reward: "Steak Dinner paid for by the losers", 
    punishment: "Pay for the winner's dinner", 
    category: "Sport", 
    timeline: "2021-05-02T16:30:00.000Z", 
    open: "true",
    owner: "7" )
    
Streak.create(name: "Gormet Chef in the Making", 
    description: "Make a homemade meal from scratch every other day", 
    reward: "Get a professional cooking class paid for by the losers", 
    punishment: "Pay for the winner's cooking class", 
    category: "Cuisine", 
    timeline: "2021-05-05T12:30:00.000Z", 
    open: "true",
    owner: "8" )

9.times do
    name = Faker::Name.name 
    nickname = Faker::Internet.username(specifier: 7..9)
    email = Faker::Internet.free_email
    avatar = Faker::Avatar.image(slug: name, size: '100x100', set: "set5", bgset: 'bg1')
    User.create(password:'123456Abc!', name: name, nickname: nickname, email: email, image: avatar)
end

UserStreak.create(user_id: "1", streak_id: "1", status: 'ongoing')
UserStreak.create(user_id: "1", streak_id: "2", status: 'quit', media: "//imgur.com/YAPxCEB")
UserStreak.create(user_id: "1", streak_id: "3", status: 'quit', media: "//imgur.com/YAPxCEB")
UserStreak.create(user_id: "1", streak_id: "4", status: 'quit', media: "//imgur.com/YAPxCEB")
UserStreak.create(user_id: "1", streak_id: "5", status: 'quit', media: "//imgur.com/YAPxCEB")
UserStreak.create(user_id: "1", streak_id: "6", status: 'quit', media: "//imgur.com/YAPxCEB")

UserStreak.create(user_id: "2", streak_id: "1", status: 'quit', media: "//imgur.com/zAP6moT")
UserStreak.create(user_id: "2", streak_id: "2", status: 'ongoing')
UserStreak.create(user_id: "2", streak_id: "3", status: 'quit', media: "//imgur.com/zAP6moT")
UserStreak.create(user_id: "2", streak_id: "4", status: 'quit', media: "//imgur.com/zAP6moT")
UserStreak.create(user_id: "2", streak_id: "5", status: 'quit', media: "//imgur.com/zAP6moT")
UserStreak.create(user_id: "2", streak_id: "6", status: 'upcoming')
UserStreak.create(user_id: "2", streak_id: "7", status: 'upcoming')

UserStreak.create(user_id: "3", streak_id: "3", status: 'ongoing')
UserStreak.create(user_id: "3", streak_id: "8", status: 'upcoming')
UserStreak.create(user_id: "3", streak_id: "7", status: 'upcoming')
UserStreak.create(user_id: "3", streak_id: "6", status: 'upcoming')
UserStreak.create(user_id: "3", streak_id: "2", status: 'ongoing')
UserStreak.create(user_id: "3", streak_id: "1", status: 'ongoing')

UserStreak.create(user_id: "4", streak_id: "4", status: 'ongoing')
UserStreak.create(user_id: "4", streak_id: "8", status: 'upcoming')
UserStreak.create(user_id: "4", streak_id: "3", status: 'quit', media: "//imgur.com/a/fgQod")

UserStreak.create(user_id: "5", streak_id: "5", status: 'ongoing')
UserStreak.create(user_id: "5", streak_id: "6", status: 'upcoming')

UserStreak.create(user_id: "6", streak_id: "6", status: 'upcoming')
UserStreak.create(user_id: "6", streak_id: "7", status: 'upcoming')
UserStreak.create(user_id: "6", streak_id: "1", status: 'ongoing')

UserStreak.create(user_id: "7", streak_id: "7", status: 'upcoming')
UserStreak.create(user_id: "7", streak_id: "3", status: 'ongoing')

UserStreak.create(user_id: "8", streak_id: "8", status: 'upcoming')
UserStreak.create(user_id: "8", streak_id: "5", status: 'ongoing')

UserStreak.create(user_id: "9", streak_id: "8", status: 'upcoming')
UserStreak.create(user_id: "9", streak_id: "2", status: 'ongoing')


6.times do |i|
    comment = "So excited to get started on this! Let's go!"
    Comment.create(user_id: "1", streak_id: i, info: comment, cheer: "0", laugh: "1")
end

6.times do |i|
    comment = "Ayyyy, I'm going to win, better show up to glow up!"
    Comment.create(user_id: "2", streak_id: i, info: comment, cheer: "1", laugh: "0")
end

Comment.create(user_id: "3", streak_id: "3", info: "Watch out, I'm going to win", cheer: "1", laugh: "3")
Comment.create(user_id: "3", streak_id: "8", info: "Watch out, I'm going to win", cheer: "2", laugh: "3")
Comment.create(user_id: "3", streak_id: "7", info: "Watch out, I'm going to win", cheer: "0", laugh: "1")
Comment.create(user_id: "3", streak_id: "6", info: "Watch out, I'm going to win", cheer: "3", laugh: "0")
Comment.create(user_id: "3", streak_id: "2", info: "Watch out, I'm going to win", cheer: "0", laugh: "3")
Comment.create(user_id: "3", streak_id: "1", info: "Watch out, I'm going to win", cheer: "2", laugh: "0")

Comment.create(user_id: "4", streak_id: "4", info: "This is going to be so much fun!", cheer: "1", laugh: "0")
Comment.create(user_id: "4", streak_id: "8", info: "This is going to be so much fun!", cheer: "1", laugh: "3")
Comment.create(user_id: "4", streak_id: "3", info: "This is going to be so much fun!", cheer: "0", laugh: "3")

Comment.create(user_id: "5", streak_id: "5", info: "I hope I do okay with this...", cheer: "1", laugh: "0")
Comment.create(user_id: "5", streak_id: "6", info: "I hope I do okay with this...", cheer: "0", laugh: "3")

Comment.create(user_id: "6", streak_id: "6", info: "Anyone else having problems sticking to this?", cheer: "7", laugh: "3")
Comment.create(user_id: "6", streak_id: "7", info: "Anyone else having problems sticking to this?", cheer: "0", laugh: "3")
Comment.create(user_id: "6", streak_id: "1", info: "Anyone else having problems sticking to this?", cheer: "1", laugh: "1")

Comment.create(user_id: "7", streak_id: "7", info: "Let's get this party started!", cheer: "0", laugh: "3")
Comment.create(user_id: "7", streak_id: "3", info: "Let's get this party started!", cheer: "1", laugh: "0")

Comment.create(user_id: "8", streak_id: "8", info: "I want to win so badly!", cheer: "0", laugh: "3")
Comment.create(user_id: "8", streak_id: "5", info: "I want to win so badly!", cheer: "3", laugh: "1")

Comment.create(user_id: "9", streak_id: "8", info: "Time to see what everyone's made of.", cheer: "1", laugh: "3")
Comment.create(user_id: "9", streak_id: "2", info: "Time to see what everyone's made of.", cheer: "0", laugh: "1")

    puts "seeded #{Comment.all.length} comments"
    puts "seeded #{User.all.length} users"
    puts "seeded #{Streak.all.length} streaks"
    puts "seeded #{UserStreak.all.length} user_streaks"
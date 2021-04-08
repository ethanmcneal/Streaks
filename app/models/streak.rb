class Streak < ApplicationRecord
    #comment erin
    has_many :user_streaks
    has_many :users, through: :user_streaks
end

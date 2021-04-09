class Streak < ApplicationRecord
    #comment erin
    has_many :user_streaks, dependent: :destroy
    has_many :users, through: :user_streaks
    has_many :comments, dependent: :destroy
end

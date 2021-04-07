class Streak < ApplicationRecord
    has_many :user_streaks
    has_many :users, through: :user_streaks
end

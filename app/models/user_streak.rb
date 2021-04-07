class UserStreak < ApplicationRecord
  belongs_to :user
  belongs_to :streak
end

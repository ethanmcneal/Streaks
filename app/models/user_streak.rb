class UserStreak < ApplicationRecord
  belongs_to :user
  belongs_to :streak
    
  def self.every_streak
    select('us.status, u.name as user_name, u.nickname, u.image, u.email, u.wins, u.losses, s.name as streak_name, s.timeline, s.open, s.description, s.category, s.reward, s.punishment, us.media, s.id as streak_id, u.id as user_id')
    .from('user_streaks as us')
    .joins('inner join users u on u.id = us.user_id')
    .joins('inner join streaks s on s.id = us.streak_id')
    # .where("users.id = ? ", user_id) <--- current user streaks, on dashboard ui
  end 

end


# Select us.status, u.name as user_name, s.name as streak_name, s.reward, s.punishment, us.media, s.id as streak_id, u.id as user_id
#     from user_streaks as us 
#     inner join users u on u.id = us.user_id
#     inner join streaks s on s.id = us.streak_id;
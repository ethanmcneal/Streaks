class UserStreak < ApplicationRecord
  belongs_to :user
  belongs_to :streak
    
  def self.every_streak(user_id)
    select('us.created_at, us.id, us.status, u.name as user_name, u.nickname, u.image, u.email, u.wins, u.losses, 
       s.name as streak_name, s.timeline, s.description, s.category, s.reward, s.open as pub,
       s.punishment, us.media, s.id as streak_id, u.id as user_id')
    .from('user_streaks as us')
    .joins('inner join users u on u.id = us.user_id 
      inner join streaks s on s.id = us.streak_id')
    .where("u.id =  ?", "#{user_id}")
  end 

  def self.some_streak
    select('us.created_at, us.id, us.status, u.name as user_name, u.nickname, u.image, u.email, u.wins, u.losses, 
       s.name as streak_name, s.timeline, s.description, s.category, s.reward, s.open as pub,
       s.punishment, us.media, s.id as streak_id, u.id as user_id')
    .distinct("on s.id")
    .from('user_streaks as us')
    .joins('inner join users u on u.id = us.user_id 
      inner join streaks s on s.id = us.streak_id')
    # select('us.created_at, us.id, us.status, u.name as user_name, u.nickname, u.image, u.email, u.wins, u.losses, 
    #    s.name as streak_name, s.timeline, s.description, s.category, s.reward, s.open as pub,
    #    s.punishment, us.media, s.id as streak_id, u.id as user_id')
    # .from('user_streaks as us')
    # .joins('inner join users u on u.id = us.user_id 
    #   inner join streaks s on s.id = us.streak_id')
    # .where("u.id !=  ?", "#{user_id}")
  end 

  def self.every_user(streak_id)
    select('us.created_at, us.id, us.status, u.name as user_name, u.nickname, u.image, u.email, u.wins, u.losses, 
       s.name as streak_name, s.timeline, s.description, s.category, s.reward, s.open as pub,
       s.punishment, us.media, s.id as streak_id, u.id as user_id')
    .from('user_streaks as us')
    .joins('inner join users u on u.id = us.user_id 
      inner join streaks s on s.id = us.streak_id')
    .where("s.id =  ?", "#{streak_id}")
  end 
  
end

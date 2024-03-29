class Comment < ApplicationRecord
  belongs_to :user 
  belongs_to :streak

  def self.every_comment
    select('c.info, to_char(created_at) c.created_at, c.media, c.cheer, c.laugh, c.id as comment_id, u.name as user_name, u.nickname, u.image, u.email, u.wins, u.losses, u.id as user_id, s.name as streak_name, s.timeline, s.description, s.category, s.reward, s.open as pub, s.punishment, s.id as streak_id') 
    .from('comments as c')
    .joins('inner join users u on u.id = c.user_id
      inner join streaks s on s.id = c.streak_id')
  end
  
  def self.comments_by_user(user_id)
    select('c.info, c.created_at, c.media, c.cheer, c.laugh, c.id as comment_id, u.name as user_name, u.nickname, u.image, u.email, u.wins, u.losses, u.id as user_id, s.name as streak_name, s.timeline, s.description, s.category, s.reward, s.open as pub, s.punishment, s.id as streak_id') 
    .from('comments as c')
    .joins('inner join users u on u.id = c.user_id
      inner join streaks s on s.id = c.streak_id')
    .where("u.id = ?", "#{user_id}")
  end
end

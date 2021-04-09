class Streak < ApplicationRecord
    #comment erin
    has_many :user_streaks
    has_many :users, through: :user_streaks

    def self.streak_all_comments(streak_id)
        select('c.comment, c.media, c.cheer, c.laugh, c.id as comment_id, u.name as user_name, u.nickname, u.image, u.email, u.wins, u.losses, u.id as user_id, s.name as streak_name, s.timeline, s.description, s.category, s.reward, s.open as pub, s.punishment, s.id as streak_id') 
        .from('comments as c')
        .joins('inner join users u on u.id = c.user_id
          inner join streaks s on s.id = c.streak_id')
        .where("s.id = ?", "#{streak_id}")
    end

end

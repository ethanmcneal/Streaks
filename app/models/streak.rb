class Streak < ApplicationRecord
    #comment erin
    has_many :user_streaks, dependent: :destroy
    has_many :users, through: :user_streaks

    def self.streak_all_comments(streak_id)
        select('c.info, c.created_at, c.media, c.cheer, c.laugh, c.id as comment_id, u.name as user_name, u.nickname, u.image, u.email, u.wins, u.losses, u.id as user_id, s.name as streak_name, s.timeline, s.description, s.category, s.reward, s.open as pub, s.punishment, s.owner, s.id as streak_id') 
        .from('comments as c')
        .joins('inner join users u on u.id = c.user_id
          inner join streaks s on s.id = c.streak_id')
        .where("s.id = ?", "#{streak_id}")
    end

    def self.search(search) #class.search outside, pass params into ()
      if search.length >= 2
        Streak.where('name ILIKE ?', "%#{search}%")
          .or(Streak.where('description ILIKE ?', "%#{search}%"))
      end
    end
    has_many :comments, dependent: :destroy
end

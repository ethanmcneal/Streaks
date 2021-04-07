class CreateUserStreaks < ActiveRecord::Migration[6.1]
  def change
    create_table :user_streaks do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :streak, null: false, foreign_key: true
      t.string :status
      t.string :media

      t.timestamps
    end
  end
end

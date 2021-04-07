class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :streak, null: false, foreign_key: true
      t.string :comment
      t.string :media
      t.integer :cheer
      t.integer :laugh

      t.timestamps
    end
  end
end

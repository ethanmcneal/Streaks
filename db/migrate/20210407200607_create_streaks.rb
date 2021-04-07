class CreateStreaks < ActiveRecord::Migration[6.1]
  def change
    create_table :streaks do |t|
      t.string :name
      t.string :description
      t.datetime :timeline
      t.string :reward
      t.string :punishment
      t.string :category
      t.boolean :open

      t.timestamps
    end
  end
end

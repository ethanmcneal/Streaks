class AddOwnerToStreaks < ActiveRecord::Migration[6.1]
  def change
    add_column :streaks, :owner, :integer
  end
end

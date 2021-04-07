class AddStatsToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :wins, :integer, :default => 0
    add_column :users, :losses, :integer, :default => 0
  end
end

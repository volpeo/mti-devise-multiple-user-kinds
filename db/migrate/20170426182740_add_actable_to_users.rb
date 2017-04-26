class AddActableToUsers < ActiveRecord::Migration[5.0]
  def change
    change_table :users do |t|
      t.actable
    end
  end
end

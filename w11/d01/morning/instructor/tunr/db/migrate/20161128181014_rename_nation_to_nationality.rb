class RenameNationToNationality < ActiveRecord::Migration[5.0]
  def change
    rename_column :artists, :nation, :national
  end
end

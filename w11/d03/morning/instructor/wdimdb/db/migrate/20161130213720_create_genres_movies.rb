class CreateGenresMovies < ActiveRecord::Migration[5.0]
  def change
    create_join_table :genres, :movies
  end
end

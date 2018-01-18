class Movie < ApplicationRecord
  has_and_belongs_to_many :genres
  has_many :roles
  has_many :actors, through: :roles

  validates :name, presence: true
  validates :release_date, presence: true
end

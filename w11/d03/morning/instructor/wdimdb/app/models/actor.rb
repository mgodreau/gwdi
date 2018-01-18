class Actor < ApplicationRecord
  has_many :roles
  has_many :movies, through: :roles

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :birth_date, presence: true
  validates :washed_up, inclusion: { in: [true, false] }
end

class Restaurant < ApplicationRecord
  has_many :foods, dependent: :destroy

  has_many :reviews, dependent: :destroy
  has_many :users, through: :reviews

  has_and_belongs_to_many :categories
end

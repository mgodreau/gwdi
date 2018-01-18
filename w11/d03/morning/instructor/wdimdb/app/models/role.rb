class Role < ApplicationRecord
  belongs_to :actor
  belongs_to :movie

  validates :character_name, presence: true
end

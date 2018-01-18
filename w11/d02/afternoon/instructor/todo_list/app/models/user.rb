class User < ApplicationRecord
  has_many :todos, dependent: :destroy

  def self.from_token_payload(payload)
    return false unless payload['sub']
    find_or_create_by(sub: payload['sub'])
  end
end

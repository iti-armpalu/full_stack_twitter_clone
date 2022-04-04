class Tweet < ApplicationRecord
  belongs_to :user

  validates :user, presence: true
  validates :message, presence: true, length: { maximum: 140 }

  has_one_attached :image
end

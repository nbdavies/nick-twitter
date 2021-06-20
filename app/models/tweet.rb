class Tweet < ApplicationRecord
  belongs_to :user
  has_many :retweets, inverse_of: :retweeted_tweet
  has_many :retweet_tweets, through: :retweets, source: :tweet
  has_one :originating_retweet, inverse_of: :tweet, class_name: 'Retweet'
  has_one :retweeted_tweet, through: :originating_retweet
end

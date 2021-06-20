class Tweet < ApplicationRecord
  belongs_to :user
  has_many :retweets, foreign_key: :retweeted_tweet_id
  has_many :retweet_tweets, through: :retweets, source: :tweet
  has_one :originating_retweet, class_name: 'Retweet', foreign_key: :tweet_id
  has_one :retweeted_tweet, through: :originating_retweet
  has_many :likes
end

class Retweet < ApplicationRecord
  belongs_to :tweet
  belongs_to :retweeted_tweet, class_name: 'Tweet'
end

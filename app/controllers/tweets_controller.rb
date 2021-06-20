class TweetsController < ApplicationController
  before_action :authenticate_user!

  def create
    tweet = Tweet.create!(text: params[:text], user: current_user)
    render json: tweet.as_json(include: [:user, :retweet_tweets, :likes])
  end
  
  def index
    tweets = Tweet.order(id: :desc).all
    render json: tweets.as_json(include: [:user, :retweet_tweets, :likes])
  end
  
  def retweet
    tweet = Tweet.find(params[:id])
    new_tweet = Tweet.create!(text: tweet.text, user: current_user)
    Retweet.create!(tweet: new_tweet, retweeted_tweet: tweet)
    render json: new_tweet.as_json(include: [:user, :retweet_tweets, :likes])
  end
  
  def like
    tweet = Tweet.find(params[:id])
    like = Like.create!(tweet: tweet, user: current_user)
    render json: like.as_json
  end
end

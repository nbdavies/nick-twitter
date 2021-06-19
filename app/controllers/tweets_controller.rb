class TweetsController < ApplicationController
  before_action :authenticate_user!

  def create
    tweet = Tweet.create!(text: params[:text], user: current_user)
    render json: tweet.as_json(include: :user)
  end
  
  def index
    tweets = Tweet.order(id: :desc).all
    render json: tweets.as_json(include: :user)
  end
end

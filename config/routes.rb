Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  root to: "home#index"
  resources :tweets, only: [:create, :index] do
    post :retweet, on: :member
    post :like, on: :member
  end
end

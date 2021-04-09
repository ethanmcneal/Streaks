Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :streaks
    resources :comments
    resources :user_streaks

    get 'streak/:streak_id', to: 'streaks#streak_comments'
  end
end

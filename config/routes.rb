Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :streaks
    resources :comments
    resources :user_streaks

    get 'streak/:streak_id', to: 'streaks#streak_comments'
    get 'users_streaks/:user_id', to: 'user_streaks#current_user_streaks'
    get 'streaks_users/:streak_id', to: 'user_streaks#current_streaks_users'
    get 'distinct_streaks', to: 'user_streaks#some_streaks'
    get 'comment/:user_id', to: 'comments#every_comment'
    get 'search_streaks', to: 'streaks#search_streaks'
    get 'user/:id', to: 'users#show'
    put 'user/:id', to: 'users#update'
  end
end

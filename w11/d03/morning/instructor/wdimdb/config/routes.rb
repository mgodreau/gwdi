Rails.application.routes.draw do
  resources :movies, only: [:index, :show] do
    resources :roles, only: [:index]
  end
  resources :actors, only: [:index, :show] do
    resources :roles, only: [:index]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

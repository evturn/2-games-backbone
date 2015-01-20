Rails.application.routes.draw do
  root          to: 'words#index'
  get  '/words'  => 'words#words'
end

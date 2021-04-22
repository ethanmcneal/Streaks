class ApplicationController < ActionController::API
        include DeviseTokenAuth::Concerns::SetUserByToken
        before_action :configure_devise_permitted_parameters, if: :devise_controller?
  def configure_devise_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:nickname, :image, :wins, :losses])
    # devise_parameter_sanitizer.permit(:account_update, keys: [:image])
  end
end

class Api::UsersController < ApplicationController
  before_action :authenticate_user!, except: [:show, :update]
  before_action :get_user, only: [:show]

    def index
        users = User.all
        render json: users
    end

    def show
        render json: @user
    end

    def search_users
        render json: User.search(params[:query])
      end

    def create
        user = User.new(user_params)
        if user.save
            render json: user
        else
            render json: { errors: user.errors }, status: :unprocessable_entity
        end
    end

    def update
        file = params[:image]
        binding.pry
        if file.to_s != "null"     #<-------------- POSSIBLE CHANGE NEEDED ------
            begin 
                cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true, resource_type: :auto)
                current_user.update(image: cloud_image['secure_url'], nickname: params[:nickname], email: params[:email])
            rescue => e 
                render json: { errors: e }, status: 422
                return
            end 
        else current_user.update(user_params)
        end 
    end

    def destroy
        user = User.find(params[:id])
        render json: user.destroy
    end



    private

    def get_user
        @user = User.find(params[:id])
    end

    def user_params
        params.permit(:id, :uid, :provider, :allow_password_change, :wins, :losses, :name, :nickname, :email, :image)
    end
end

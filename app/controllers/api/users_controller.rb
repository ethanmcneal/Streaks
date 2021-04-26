class Api::UsersController < ApplicationController
  before_action :authenticate_user!, except: [:show, :update, :updateUserImage]
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

    def updateUserImage
        file = params[:image]
        # if file.to_s != "https://st4.depositphotos.com/4329009/19956/v/600/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg"
        # if file.to_s != false <-- user_image is NEVER false ---      --->     ^^^^^^^^-useless, only lets change once-^^^^^^^^
        if file 
            begin 
                cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true, resource_type: :auto)
                current_user.update(image: cloud_image['secure_url'])
            rescue => e 
                render json: { errors: e }, status: 422
                return
            end 
        end 
    end


    def update
        current_user.update(user_params)
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


class Api::StreaksController < ApplicationController

    before_action :get_user, only: [:show, :update, :destroy]

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
        # user = User.find(params[:id])
        # if user.update(user_params)
        #     render json: @user
        # else
        #    render json: { errors: user.errors }, status: :unprocessable_entity  <-------  PREVIOUS CODE, may delete  ---
        # end

        file = params[:image]
        if !file.to_s.empty?
            begin 
                cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true, resource_type: :auto)
                current_user.update(image: cloud_image['secure_url'], nickname: params[:nickname], email: params[:email])
            rescue => e 
                render json: { errors: e }, status: 422
                return
            end 
        else @user.update(user_params)
        end 
    end

    def destroy
        # user = User.find(params[:id])   <---- PREVIOUS CODE, may delete --
        render json: @user.destroy
    end



    private


    def get_user
        @user = User.find(params[:id])
    end

    def user_params
        params.require(:user).permit(:id, :name, :nickname, :email, :image)
    end
end
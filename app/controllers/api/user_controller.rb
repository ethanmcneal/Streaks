class Api::StreaksController < ApplicationController

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
        User = User.new(user_params)
        if user.save
            render json: user
        else
            render json: { errors: user.errors }, status: :unprocessable_entity
        end
    end

    def update
        user = User.find(params[:id])
        if user.update(user_params)
            render json: @user
        else
           render json: { errors: user.errors }, status: :unprocessable_entity
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
        params.require(:user).permit(:name, :nickname, :email, :avatar)
    end
end
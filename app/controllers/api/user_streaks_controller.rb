class Api::UserStreaksController < ApplicationController

  before_action :set_user_streak, only: [:show, :destroy]

  def index
    # @user_streak= UserStreak.every_streak
    # streaked = UserStreak.every_streak
    render json: UserStreak.all
  end 

  def show 
    render json: @user_streak
  end
  
  def create 
    user_streak = UserStreak.new(user_streak_params)
    if (user_streak.save)
      render json: @user_streak
    else 
      render json: { errors: user_streak.errors }, status: :unprocessable_entity
    end 
  end
  
  def update 
    # user_streak = UserStreak.find(@user)
    if @user_streak.update(user_streak_params)
      render json: @user_streak
    else 
      render json: { errors: user_streak.errors }, status: :unprocessable_entity
    end 
  end 

  def destroy
    @user_streak.destroy
    render json: @user_streak
  end 

  private

  def user_streak_params
    params.require(:user_streak).permit(:user_id, :streak_id, :status, :media)
  end
  
  def set_user_streak
    @user_streak = UserStreak.find(params[:id])
  end 

end

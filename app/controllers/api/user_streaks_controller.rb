class Api::UserStreaksController < ApplicationController

  before_action :set_user_streak, only: [:show, :destroy, :update]

  def index
    render json: UserStreak.every_streak
  end 


  # def show 
  #   render json: @user_streak
  # end


  def current_user_streaks
    user_id = params[:user_id] 
    render json: UserStreak.every_streak(user_id)
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

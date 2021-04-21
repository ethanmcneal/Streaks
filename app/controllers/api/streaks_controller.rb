class Api::StreaksController < ApplicationController

    #comment here

    before_action :get_streak, only: [:show]

    def index
        streaks = Streak.all
        render json: streaks
    end

    def streak_comments
        streak_id = params[:streak_id]
        render json: Streak.streak_all_comments(streak_id)
    end
    
    def show
        render json: @streak
    end

    def search_streaks
        render json: Streak.search(params[:query])
      end

    def create
        streak = Streak.new(streak_params)
        if streak.save
            render json: streak
        else
            render json: { errors: streak.errors }, status: :unprocessable_entity
        end
    end

    def update
        streak = Streak.find(params[:id])
        if streak.update(streak_params)
            render json: @streak
        else
           render json: { errors: streak.errors }, status: :unprocessable_entity
        end
    end

    def destroy
        streak = Streak.find(params[:id])
        render json: streak.destroy
    end



    private


    def get_streak
        @streak = Streak.find(params[:id])
    end

    def streak_params
        params.require(:streak).permit(:name, :description, :timeline, :reward, :punishment, :category, :open, :id, :created_at, :updated_at, :owner)
    end
end
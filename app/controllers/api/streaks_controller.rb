class Api::StreaksController < ApplicationController

    #comment here

    before_action :get_streak, only: [:show]

    def index
        streaks = Streak.all
        render json: streaks
    end
    
    def show
        render json: @streak
    end

    def create
        streak = Streak.new(streak_params)
        if streak.save
            render json: streak
        else
            render json: { errors: main.errors }, status: :unprocessable_entity
        end
    end

    def update
        if @streak.update(streak_params)
            render json: @streak
        else
           render json: { errors: main.errors }, status: :unprocessable_entity
        end
    end

    def destroy
        @streak.delete
    end



    private


    def get_streak
        @streak = Streak.find(params[:id])
    end

    def streak_params
        params.require(:streak).permit(:name, :description, :timeline, :reward, :punishment, :category, :open)
    end
end
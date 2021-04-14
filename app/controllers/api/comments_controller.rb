class Api::CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :destroy]

  def index
    render json: Comment.every_comment
  end 

  def show 
    render json: @comment
  end

  def user_comments
    user_id = params[:user_id]
    render json: Comment.comments_by_user(user_id)
  end
  
  def create 
    comment = Comment.new(comment_params)
    if (comment.save)
      render json: comment
    else 
      render json: { errors: comment.errors }, status: :unprocessable_entity
    end 
  end
  
  def update 
    if @comment.update(comment_params)
      render json: @comment
    else 
      render json: { errors: comment.errors }, status: :unprocessable_entity
    end 
  end 

  def destroy
    @comment.destroy
    render json: @comment
  end 

  private

  def comment_params
    params.require(:comment).permit(:user_id, :streak_id, :info, :media, :cheer, :laugh)
  end
  
  def set_comment
    @comment = Comment.find(params[:id])
  end 

end



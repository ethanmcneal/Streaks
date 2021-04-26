class Api::CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :destroy, :update, :update_media]

  def index
    paginate json: Comment.every_comment
  end 

  def show 
    render json: @comment
  end

  def user_comments
    user_id = params[:user_id]
    render json: Comment.comments_by_user(user_id)
  end
  
  def create 
    # comment = Comment.new(comment_params)
    file = params[:media]
    
    if !file.to_s.empty?
      begin
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true, resource_type: :auto)
        comment = Comment.new(media: cloud_image['secure_url'], created_at: params[:created_at], user_id: params[:user_id], streak_id: params[:streak_id], info: params[:info], cheer: params[:cheer], laugh: params[:laugh])
      rescue => e
        render json: { errors: e }, status: 422
        return
      end
    else 
      comment = Comment.new(comment_params)
    end 
    if comment.save
      render json: comment
    else 
      render json: { errors: comment.errors }, status: :unprocessable_entity
    end 
  end
  
  def update 
    @comment.update(comment_params)
  end 

  def update_media
    file = params[:media]
    if file
      
      begin
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true, resource_type: :auto)

        @comment.update(media: cloud_image['secure_url'])
       
      rescue => e
        render json: { errors: e }, status: 422
      end
    end
   
  end

  def destroy
    @comment.destroy
    render json: @comment
  end 

  private

  def comment_params
    params.permit(:id, :created_at, :updated_at, :user_id, :streak_id, :info, :media, :cheer, :laugh)
  end
  
  def set_comment
    @comment = Comment.find(params[:id])
  end 

end



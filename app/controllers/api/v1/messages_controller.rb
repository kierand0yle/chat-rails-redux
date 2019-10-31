class Api::V1::MessagesController < ApplicationController

  before_action :find_channel

  def index
    @messages = Message.where(channel: @channel)
    render json: @messages # see Message.as_json method
  end

  def create
    message = @channel.messages.build(content: params[:content])
    message.user = current_user
    message.save
    render json: message # see Message.as_json method
  end

  private

  def find_channel
    @channel = Channel.find_by(name: params[:channel_id])
  end

end

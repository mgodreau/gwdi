class ActorsController < ApplicationController
  before_action :set_actor, only: [:show]

  def index
    @actors = Actor.all

    render json: @actors
  end

  def show
    render json: @actor
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_actor
    @actor = Actor.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def actor_params
    params.require(:actor).permit(:name)
  end
end

class RolesController < ApplicationController
  before_action :set_parent

  def index
    @roles = @parent.roles

    render json: @roles
  end

  private

    def set_parent
      @parent = if params[:actor_id]
        Actor.find(params[:actor_id])
      else
        Movie.find(params[:movie_id])
      end
    end
end

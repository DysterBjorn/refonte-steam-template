class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :homeco, :game]

  def home
  end

  def homeco
  end

  def game
  end

end

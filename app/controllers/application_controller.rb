class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user

  class User
    def email
      "cj@appacademy.io"
    end

    def id
      2
    end
  end

  def current_user
    User.new
  end
end

class WordsController < ApplicationController

  def index

  end

  def words
    words = [
      "dog", "cat", "dude", "building"
    ]
    respond_to do |f|
      f.json { render json: words }
    end
  end

  def state

  end


end
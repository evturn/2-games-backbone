class WordsController < ApplicationController

  def index

  end

  def words
    words = [
      "dog", "cat", "dude", "building"
    ]
    word = words.sample
    respond_to do |f|
      f.json { render json: word }
    end
  end

  def state

  end


end
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161130215210) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "actors", force: :cascade do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.boolean  "washed_up"
    t.date     "birth_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "genres", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "genres_movies", id: false, force: :cascade do |t|
    t.integer "genre_id", null: false
    t.integer "movie_id", null: false
  end

  create_table "movies", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.date     "release_date"
  end

  create_table "roles", force: :cascade do |t|
    t.string   "character_name"
    t.integer  "actor_id"
    t.integer  "movie_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.index ["actor_id"], name: "index_roles_on_actor_id", using: :btree
    t.index ["movie_id"], name: "index_roles_on_movie_id", using: :btree
  end

  add_foreign_key "roles", "actors"
  add_foreign_key "roles", "movies"
end

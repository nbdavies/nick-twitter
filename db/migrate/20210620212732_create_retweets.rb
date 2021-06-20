class CreateRetweets < ActiveRecord::Migration[6.0]
  def change
    create_table :retweets do |t|
      t.references :tweet, foreign_key: true
      t.references :retweeted_tweet, foreign_key: { to_table: :tweets }
      t.timestamps
    end
  end
end

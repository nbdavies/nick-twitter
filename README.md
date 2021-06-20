# README

## Features

Included in this application:

* User authentication using Devise
* Writing tweets
* Basic retweeting (posting the text of an existing tweet, but attributed to a new user)
* Counting likes

On the project roadmap:

* Make the layout more appealing using Bootstrap classes
* Attribute retweets to the original user as well
* Incorporate the Devise authentication views into the React single page app
* Display/enforce tweet character limit
* Identify users by a username instead of email address
* Add tests, starting with an integration test
* Allow users to un-like
* Allow unauthenticated users to view non-interactive timeline

## Getting started

```
bundle install
rails db:create db:setup
rails s
```

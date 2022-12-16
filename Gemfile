source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.0.3'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 6.1.4'
# Use Puma as the app server
gem 'puma', '~> 5.6'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 6.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '~> 4.2.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'mini_racer', platforms: :ruby
# Transpile app-like JavaScript. Read more: https://github.com/rails/webpacker
gem 'webpacker', '~> 4.0'
# Use jquery as the JavaScript library
gem 'jquery-rails', '~> 4.4'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 5.0'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5.2.1'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.11'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use ActiveModel has_secure_password
gem 'bcrypt', '~> 3.1'

# Bootstrap
gem 'bootstrap', '~> 5.1'

# FontAwesome
gem "font-awesome-rails"

# AWS S3
gem 'aws-sdk-s3', '~> 1.112'

# Webrick
gem "webrick", "~> 1.7"

# Active Support
gem 'activesupport', '~> 6.1', '>= 6.1.4.4'

# Railties
gem 'railties', '~> 6.1', '>= 6.1.4.4'

# Use ActiveStorage variant
# gem 'mini_magick', '~> 4.8'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.10.3', require: false

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', '~> 11.1.3', platforms: [:mri, :mingw, :x64_mingw]

  # Added by Altcademy.com
  gem 'awesome_print', '~> 1.9'
  gem 'dotenv-rails', '~> 2.7.6'
  gem 'factory_bot_rails', '~> 5.1.1'
  gem 'pry-rails', '>= 0.3.9'
  gem 'rspec-rails', '~> 4.0'
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'web-console', '>= 4.0.1'
  gem 'listen', '~> 3.7.1'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring', '< 3.0'
  gem 'spring-watcher-listen', '~> 2.0.1'

  # Use sqlite3 as the database for Active Record
  gem 'sqlite3', '~> 1.4.2'
end

group :production do
  # Use pg as the database for Active Record
  gem 'pg', '~> 1.3.1'
end

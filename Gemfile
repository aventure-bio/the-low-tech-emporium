source "https://rubygems.org"

# gem "jekyll", "~> 4.0.0"

group :jekyll_plugins do
  gem 'jekyll-admin', "~> 0.11"
  gem 'jekyll-seo-tag', "~> 2.6", ">= 2.6.1"
  gem 'jekyll_picture_tag', '~> 1.8'
  gem 'jekyll-minifier', '~> 0.1.10'
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?

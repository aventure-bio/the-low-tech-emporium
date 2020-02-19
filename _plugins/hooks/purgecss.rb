Jekyll::Hooks.register(:site, :post_write) do |_site|
  system('purgecss --css  _site/assets/css/main.css  --content _site/*.html --output _site/assets/css')
  system('purgecss --css  _site/assets/css/style.css  --content _site/*.html --output _site/assets/css')
end

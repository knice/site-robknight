require 'html-proofer'

# Test the build
desc "Build the site and test with HTML Proofer"
task :test do
  sh "bundle exec jekyll build"
  HTMLProofer.check_directory("./build", {:disable_external => true}).run
  sh "scss-lint"
end

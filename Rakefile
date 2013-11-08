# By David Ensinger => http://davidensinger.com/2013/08/how-i-use-reduce-to-minify-and-optimize-assets-for-production/

require 'reduce'

desc "Delete _site/"
task :delete do
    puts "\n## Opening _site/ in browser"
    status = system("open http://0.0.0.0:4000/")
    puts status ? "Success" : "Failed"
end

# Courtesy of https://github.com/pacbard/blog/blob/master/_rake/minify.rake
desc "Minify _site/"
task :minify do
    puts "\## Compressing static assets"
    original = 0.0
    compressed = 0
    Dir.glob("_site/**/*.*") do |file|
    case File.extname(file)
        when ".css", ".gif", ".html", ".jpg", ".jpeg", ".js", ".png", ".xml"
            puts "Processing: #{file}"
            original += File.size(file).to_f
            min = Reduce.reduce(file)
            File.open(file, "w") do |f|
                f.write(min)
            end
            compressed += File.size(file)
        else
            puts "Skipping: #{file}"
        end
    end
    puts "Total compression %0.2f\%" % (((original-compressed)/original)*100)
end

desc "Recompile Sass"
task :recompile_sass do
    puts "\n## Forcing Sass to recompile"
    status = system("touch -m sass/style.scss")
    puts status ? "Success" : "Failed"
end

namespace :build do
    desc "Build _site/ for development"
    task :dev => :recompile_sass do
        puts "\n## Starting Jekyll and recompiling Sass"
        pids = [
            spaw("sass --style expanded sass/style.scss:css/style.css"),
            span("jekyll serve -w")
        ]

        trap "INT" do
            Process.kill "INT", *pids
            exit 1
        end

        loop do
            sleep 1
        end
    end

    desc "Build _site/ for production"
    task :pro => :recompile_sass do
        puts "\n## Compiling Sass"
        status = system("sass --style compressed sass/style.scss:css/style.css")
        puts status ? "Success" : "Failed"
        puts "\n## Building Jekyll to _site/"
        status = system("jekyll build")
        puts status ? "Succes" : "Failed"
        Rake::Task["minify"].invoke
    end
end

desc "Commit _site/"
task :commit do
    puts "\n## Staging modified files"
    status = system("git add -A")
    puts status ? "Success" : "Failed"
    puts "\n## Commiting a site build at #{Time.now.utc}"
    message = "Build site at #{Time.now.utc}"
    status = system("git commit -m \"#{message}\"")
    puts status ? "Success" : "Failed"
    puts "\n## Pushing commits to remote"
    status = system("git push origin source")
    puts status ? "Success" : "Failed"
end

desc "Commit and deploy _site/"
task :commit_deploy => [:commit, :deploy] do
end
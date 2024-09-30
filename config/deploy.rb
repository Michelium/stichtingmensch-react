set :application, 'stichtingmensch-react'
set :repo_url, 'git@github.com:Michelium/stichtingmensch-react.git'
set :tmp_dir, '/home/u114524p110947/tmp'

set :repo_tree, 'build'

set :keep_releases, 5

# Uncomment the following to require manually verifying the host key before first deploy.
# set :ssh_options, verify_host_key: :secure

namespace :deploy do
  desc 'Restart application'
  task :restart do
    on roles(:app), in: :sequence, wait: 5 do
#         execute "cd #{release_path} && npm install"
#         execute "cd #{release_path} && npm run build"
    end
  end

  after :updated, :restart

  after :restart, :clear_cache do
    on roles(:web), in: :groups, limit: 3, wait: 10 do
      # Here we can do anything such as:
      # within release_path do
      #   execute :rake, 'cache:clear'
      # end
      #
    end
  end

end

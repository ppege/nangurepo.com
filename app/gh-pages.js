import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/NanguRepo/nangurepo.com', // Update to point to your repository
  user: {
   name: 'NanguRepo', // update to use your name
   email: 'nanguthenangu@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);
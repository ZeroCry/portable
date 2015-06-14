// Generated by CoffeeScript 1.8.0
(function() {
  module.exports = {
    dest: './build',
    layer: {
      app: {
        src: './app',
        globs: ['**/*.+(js|json)']
      }
    },
    bundle: {
      app: {
        target: 'node',
        volumes: [['/app', 'app']],
        props: {
          main: '/app/index.js'
        }
      }
    }
  };

}).call(this);

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
        target: 'browser',
        props: {
          argv: ['/app/hello.js'],
          env: {
            PWD: '/app'
          }
        },
        volumes: [['/app', 'app']]
      }
    }
  };

}).call(this);

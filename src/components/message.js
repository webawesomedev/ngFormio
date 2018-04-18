module.exports = function(app) {
  app.config([
    'formioComponentsProvider',
    function(formioComponentsProvider) {
      formioComponentsProvider.register('message', {
        title: 'Message',
        template: 'formio/components/message.html',
        settings: {
          key: 'message',
          label: 'Content',
          hideLabel: true,
          input: false,
          content: ''
        }
      });
    }
  ]);
  app.run([
    '$templateCache',
    function($templateCache) {
      $templateCache.put('formio/components/custom.html',
        '<p><%{{ component.content }}%></p>'
      );
    }
  ]);
};

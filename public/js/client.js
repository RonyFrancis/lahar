// Script for the client page
// This could be used as a working example for any JS application the API, providing that it has jQuery (or just do it with regular JS selectors & XMLHttpRequest)
(function() {
  $(document).on('ready', function() {
    // Handler for the submit box
    $('#new-message').submit(function() {
      var url = $(document.activeElement).attr('url') || '/api/message';
      var messageText = $('#form-message').val();
      var payload = { message: messageText };

      // Don't want to follow the post URL...
      event.preventDefault();

      // Ajax POST to our API
      $.post(url, payload)
      .done(function(data) {
        // Success callback
        $('#chatbot-message').text(data);
        $('#user-message').text(messageText);
      })
      .error(function(error) {
        // Error callback
        $('#chatbot-message').text(error.status + ' ' + error.statusText);
      })
      .always(function() {
        // Always callback
        $('#form-message').val('');
      });

    });
  });
})();

// Script for the client page
// This could be used as a model for any JS application the API, providing that it has jQuery
(function() {
  $(document).on('ready', function() {
    // Handler for the submit box
    $('#new-message').submit(function() {
      var messageText = $('#form-message').val();
      var payload = { message: messageText };
      var url = $(this).attr('action');

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

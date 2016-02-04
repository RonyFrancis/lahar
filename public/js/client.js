// Script for the client page
(function() {
  $(document).on('ready', function() {
    // Handlers
    $('#new-message').submit(function() {
      event.preventDefault();
      var messageText = $('#form-message').val();
      var payload = { message: messageText };
      var url = $(this).attr('action');
      $.post(url, payload)
      .done(function(data) {
        $('#chatbot-message').text(data);
      });
      $('#user-message').text(messageText);
      $('#form-message').val('');
    });

  });
})();

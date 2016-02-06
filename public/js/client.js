// Script for the client page
// This could be used as a working example for any JS application the API, providing that it has jQuery (or just do it with regular JS selectors & XMLHttpRequest)
(function() {
  $(document).on('ready', function() {

    // Initiate the bot by sending an empty string
    // $.ajax({
    //   type:    "GET",
    //   url:     "/api/command/initialize",
    //   data: { message : null },
    //   success: function(data) {
    //     $('#chatbot-message').text(data.response);
    //   },
    //   error:   function(jqXHR, textStatus, errorThrown) {
    //     alert("Error, status = " + textStatus + ", " +
    //           "error thrown: " + errorThrown
    //     );
    //   },
    //   complete: function() {
    //     console.log('complete');
    //   }
    // });

    // Handler for the submit box
    $('#new-message').submit(function(event) {
      var url = $(document.activeElement).attr('url') || '/api/message';
      var msg = $('#form-message').val();
      var payload = { message: msg };

      // Don't want to follow the post URL...
      event.preventDefault();

      // Ajax POST to our API
      $.post(url, payload)
      .done(function(data) {
        // Success callback
        $('#chatbot-message').text(data.response);
        $('#user-message').text(msg);
      })
      .fail(function(error) {
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

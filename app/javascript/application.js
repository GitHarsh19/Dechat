// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "jquery"
import "semantic-ui"

$('.ui.dropdown')
  .dropdown()
;

scroll_bottom = function(){
  if ($('#messages').length > 0){
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
  }
}

$('.message .close')
  .on('click', function() {
    $(this)
      .closest('.message')
      .transition('fade');

  });
scroll_bottom();

import "./channels"

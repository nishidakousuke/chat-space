$(function(){
  function buildHTML(message){
    var imageHTML = message.image.url === null ? '' : `<img src="${message.image.url}">`;
    var html = `<div class="right-content__center-box" data-id="${message.id}">
                  <div class="comment-box"> 
                    <p class="comment-box--user">
                      ${message.user_name}
                    </p>
                    <p class="comment-box--data">
                      ${message.created_at}
                    </p>
                  </div>
                  <p class="right-content__center-box--review">
                    ${message.body}
                  </p>
                  ${imageHTML}
                </div>`;

    return html;
  }
  $('.form-box').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
        url: url,
        type: "POST",
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.right-content__center').append(html);
      $('.message-box--message').val('');
      $('.right-content__center').animate({scrollTop: $('.right-content__center')[0].scrollHeight}, 500);
    })
    .fail(function(){
      alert('error');
    });
  });
});

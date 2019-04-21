$(function(){
  function buildHTML(message){
    var html = `<div class="right-content__center-box">
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
                  </p>`;

    var html2 = ``;

    if (message.image.url === null) {
      html2 = ``;
    } else {
      html2 = `<img src="${message.image.url}">`;
    }

    var html3 = `</div>`;

    html = html + html2 + html3;

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
      console.log(data);
      console.log(html);
      $('.right-content__center').append(html);
      $('.message-box--message').val('');
      $('.right-content__center').animate({scrollTop: $('.right-content__center')[0].scrollHeight}, 500);
    })
    .fail(function(){
      alert('error');
    });
  });
});

$(function() {
    //省略
    function buildMessageHTML(message) {
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
      };


       var reloadMessages = function() {
        var last_message_id = $('.right-content__center-box:last-child').data('id');
        var test_url = window.location.href.replace(/messages/, "");
        var url = test_url + "api/messages";
        if (url.match(/\/groups\/\d+\/api\/messages/)){
        $.ajax({
          url: url,
          type: 'get',
          dataType: 'json',
          data: {id: last_message_id}
        })
        .done(function(messages) {
          messages.forEach(function(message){
              var insertHTML = buildMessageHTML(message);
              $('.right-content__center').append(insertHTML);
          });
          $('.right-content__center').animate({scrollTop: $('.right-content__center')[0].scrollHeight}, 500);
        })
        .fail(function() {
          alert('自動更新に失敗しました');
        });
       } else {
        clearInterval();
        }
      };
      reloadMessages();
      setInterval(reloadMessages, 5000);
    });

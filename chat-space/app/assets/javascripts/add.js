$(function(){

  function append_chat_member(chat_user_name, chat_user_id) {
    var chat_html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                       <input name='group[user_ids][]' type='hidden' value='${chat_user_id}'>
                       <p class='chat-group-user__name'>${chat_user_name}</p>
                       <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn' id="${chat_user_id}">削除</div>
                    </div>`
  $('#chat-group-form__field.text').append(chat_html);
  var target = document.getElementById(Number(chat_user_id));
  $(target).parent().remove();
  
  }

    $(document).on("click", ".user-search-add", function(){
      var chat_user_id = ($(this).attr('id'));
      var chat_user_name = ($(this).prev().text());
          append_chat_member(chat_user_name, chat_user_id)
        }
    )
})


$(function(){

  function append_chat_member(user, chat_user_id) {
    var chat_html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                       <input name='group[user_ids][]' type='hidden' value='${user.id}'>
                       <p class='chat-group-user__name'>${user.name}</p>
                       <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn' id="${user.id}">削除</div>
                    </div>`
  $('#chat-group-form__field.text').append(chat_html);
  var target = document.getElementById(Number(chat_user_id));
  $(target).parent().remove();
  
  
  }

    $(document).on("click", ".user-search-add", function(){
      var input = $("#user-search-field").val();
      var chat_user_id = ($(this).attr('id'));
      $.ajax({
        type: 'GET',
        url: '/users',
        data: {keyword: input},
        dataType: 'json'
    })
    .done(function(users){
      users.forEach(function(user){
        if (Number(chat_user_id) === user.id) {
          append_chat_member(user, chat_user_id)
        }
      })
    })
    })
})


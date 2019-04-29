$(function(){

    var search_list = $("#user-search-result");

    function appendUser(user) {
        var html = `<div class="chat-group-user clearfix">
                      <p classs="chat-group-user__name" id="test">${user.name}</p>
                      <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" id="${user.id}" data-user-name="${user.name}">追加</a>
                    </div>`;
        search_list.append(html);
    }

    function appendErrMsgToHTML(msg) {
        var html = `<div class="listview__element--right-icon">${ msg }</div>`
        search_list.append(html);
    }

    $("#user-search-field").on("keyup", function(){
        var input = $("#user-search-field").val();

        $.ajax({
            type: 'GET',
            url: '/users',
            data: {keyword: input},
            dataType: 'json'
        })
        .done(function(users){
            $("#user-search-result").empty();
            if (users.length !== 0) {
                users.forEach(function(user){
                    appendUser(user);
                });
            } else {
                appendErrMsgToHTML("一致する名前はありません");
            }

        })
        .fail(function() {
            alert('ユーザー検索に失敗しました');
          })
    });  
});

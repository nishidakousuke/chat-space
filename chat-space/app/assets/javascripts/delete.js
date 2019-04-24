$(function(){
    $(document).on("click", ".user-search-remove", function(){
        var chat_user_id = ($(this).attr('id'));
        $.ajax({
            type: 'GET',
            url: '/users',
            dataType: 'json'
        })
        .done(function(users){
            var target = document.getElementById(Number(chat_user_id));
            $(target).parent().remove();
        })
    })
})
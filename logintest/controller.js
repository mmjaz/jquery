$("button#submit").click( function() {
    var username = $("input#username").val();
    var password = $("input#password").val();

    function make_base_auth(user, password) {
        var tok = user + ':' + password;
        var hash = btoa(tok);
        return "Basic " + hash;
    }

    $.ajax
    ({
        type: "GET",
        url: 'http://127.0.0.1:8000/get-auth-token',
        dataType: 'json',
        async: false,
        data: '{}',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', make_base_auth(username, password));
        },
        success: function () {
            alert('Thanks for your comment!');
        }
    });
});
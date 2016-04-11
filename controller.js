/**
 * Created by Mehdi on 4/11/2016.
 */
$(function(){

    var $username = $('#username'); //id username in html
    var $password = $('#password'); //id password in html



    $.ajax({
        type: 'GET',
        url: '',                        //url GET
        success: function(data) {       //data we get from server
            console.log('success', data);

        },
        error: function(){
            alert('error loading page');

        }

    });

    $('#SignIn').on('click', function(){    //'#SignIn' is sign in button id
        var data = {
            username: $username.val(),
            password: $password.val(),
        };
        $.ajax({
            type: 'POST',
            url: '',
            data: data,
            success: function(response){

            },
            error: function() {
                alert('error');
            }
        });

    });


});
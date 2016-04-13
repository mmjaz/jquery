/**
 * Created by Mehdi on 4/11/2016.
 */
$(function(){
    //var $orders = $('#orders');
    var $email = $('#email'); //id username in html
    var $password = $('#password'); //id password in html
    var $firstname = $('#firstname');
    var $lastname = $('#lastname');

    var $is_audience=$('#is_audience')
    //var formData = JSON.stringify($("#myForm").serializeArray());


    /*$.ajax({
        type: 'GET',
        url: 'http://127.0.0.1:8000/api/v1/', //url GET
        contentType: "application/json",
        dataType: 'jsonp',
        success: function(orders) {       //data that server send
            $.each(orders, function(i, order){
                $orders.append('<li> name :' + order.FirstName + ' lastname :'+order.LastName+'</li>')
            });

        },
        error: function(){
            alert('error loading page');

        }

    });
    */

    $('#SignIn').on('click', function(){    //'#SignIn' is sign in button id
        var data = {
            email: $email.val(),
            password: $password.val(),
            firstname: $firstname.val(),
            lastname: $lastname.val(),

            is_audience: $is_audience.val(),
        };
        $.ajax({
            type: 'POST',
            url: 'http://127.0.0.1:8000/api/v1/register',
            //data: data,
            data: JSON.stringify(data),
            contentType: "application/json",

            success: function(response){
                console.log('success',response);

            },
            error: function() {
                alert('error');
            }
        });

    });


});
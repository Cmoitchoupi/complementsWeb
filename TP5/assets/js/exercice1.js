$(function () {
    $("input").on('input', function () {
        if ($(this).val() == "" || $(this).val().length > 255) {
            $(this).css("border-color", "red");
        }
        else {
            $(this).css("border-color", "green");
        }
    });

    $("#form").submit(function (event) {
        event.preventDefault();


        let username =  $('input[name=username]').val();
        let password =  $('input[name=password]').val();

        $.ajax({
            url: 'form.php',
            method: 'POST',
            data: { username: username, password: password },
            dataType: 'json',
            success: function (response) {
                console.log("volfof");
                if (response["success"]) {
                    $('#form').replaceWith('<div class="success">' + response.message + '</div>');
                    $('#fail').text("");
                } else {
                    $('#fail').text(response.message).addClass('error');
                }
            },
            error: function (xhr, status, error) {
                console.error(error);
            }
        });
    });
});


/*** Sign Up ***/

$(document).ready(function () {
    $flag = 1;
    /***** Email Validation ****/
    function validateEmail(sEmail) {
        var filter = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/;
        if (filter.test(sEmail)) {
            return true;
        } else {
            return false;
        }
    }
    $("#emaill").focusout(function () {
        var sEmail = $('#emaill').val();
        if ($.trim(sEmail).length == 0) {
            $(this).css("border-color", "#cd2d00");
            $('#signup').attr('disabled', true);
            $("#error_email").text("Please enter valid email address");

            e.preventDefault();
        }
        if (validateEmail(sEmail)) {
            $(this).css("border-color", "#2eb82e");
            $('#signup').attr('disabled', false);
            $("#error_email").text("");;
        } else {
            $(this).css("border-color", "#cd2d00");
            $('#signup').attr('disabled', true);
            $("#error_email").text("Invalid email address");
            e.preventDefault();
        }
    });
    /***** Login Data Validation ****/
    $("#usernamee").focusout(function () {
        if ($(this).val() == '') {
            $(this).css("border-color", "#cd2d00");
            $('#signup').attr('disabled', true);
            $("#error_username").text("* You have to enter your Username!");
        } else {
            $(this).css("border-color", "#2eb82e");
            $('#signup').attr('disabled', false);
            $("#error_username").text("");
        }
    });
    $("#passwordd").focusout(function () {
        if ($(this).val() == '') {
            $(this).css("border-color", "#cd2d00");
            $('#signup').attr('disabled', true);
            $("#error_password").text("* You have to enter your Password!");
        } else {
            $(this).css("border-color", "#2eb82e");
            $('#signup').attr('disabled', false);
            $("#error_password").text("");
        }
    });
    
    /***+* Submit Validation ****/
    $("#signup").click(function () {
        if ($("#usernamee").val() == '') {
            $("#usernamee").css("border-color", "#cd2d00");
            $('#signup').attr('disabled', true);
            $("#error_username").text("* You have to enter your Username!");
        }
        if ($("#passwordd").val() == '') {
            $("#passwordd").css("border-color", "#cd2d00");
            $('#signup').attr('disabled', true);
            $("#error_password").text("Enter a Password");
        }
    });
});
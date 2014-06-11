function signIn(signinData) {
//  // State
//  var loginSuccess = false;
//
//  // Message area
//  var message = $(this).parents('#sSignInContentMain').find('> h3');
//  var description = $(this).parents('#sSignInContentMain').find('h3 + p');
//
//  // Invitation code
//  var invitationCode = $(this).parents('#sSignInUpAreaMain').find('#sSignUpInInvitationCode');
//
//  // Submit button
//  var submit = $(this).find('#sSigninSubmit');
//
//  // Login data
//  var email = $(this).find('#sSigninEmail');
//  var password = $(this).find('#sSigninPass');
//  var rememberme = $(this).find('#sSigninRememberMe');
//
//  // Build data string
//  var signinData = 'email=' + email.val() + '&password=' + password.val() + '&rememberme=' + (rememberme.prop('checked') ? 1 : 0);
//  if (invitationCode && invitationCode.val()) {
//    signinData += '&code=' + invitationCode.val();
//  }

  // Check credentials
  $.ajax({
    type: 'post',
    url: '/auth/login',
    data: signinData,
    dataType: 'json',
    beforeSend: function() {
      // Update submit button
    },

    success: function(data, textStatus, jqXHR) {
      if (!data.success) {
        // Add error class to input fields

        if (data.errorNo > 1) {
          // Hide description
          // and show forgot password form
        }

        return false;
      }

      // Authenticated
      if (data.redirect) {
        window.location = data.redirect;
      } else {
        window.location.reload();
      }
    },
    complete: function() {

    }
  });
}
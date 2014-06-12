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


//SignInFacebook
function signinSocialFacebook() {
	// Invitation code
	var invitationCode = $(this).parents('#sSignInUpAreaMain').find('#sSignUpInInvitationCode');

	FB.login(function(responseFB) {
		if (responseFB.authResponse) {
			FB.api('/me', function(response) {
				// Get Facebook User info
				var fields = {
					fb_id: response.id,
					username: response.username,
					email: response.email,
					signed_request: responseFB.authResponse.signedRequest,
					code: invitationCode.val()
				};

				// Make the request
				$.ajax({
					url: '/auth/facebook-login',
					method: 'post',
					dataType: 'json',
					data: fields,
					success: function(data) {
						if (!data.success) {
							//return false;
						}

						// Redirect
						if (data.redirect) {
							window.location = data.redirect;
						} else {
							window.location.reload();
						}
					}
				});
			});
		}
	}, {
		scope: 'email'
	});

	return true;
}

//SignUpFacebook
function signupSocialFacebook() {
	// Plan ID
	// Invitation code
	var invitationCode = $(this).parents('#sSignInUpAreaMain').find('#sSignUpInInvitationCode');

	FB.login(function(responseFB) {
		if (responseFB.authResponse) {
			FB.api('/me', function(response) {
				// Get Facebook User info
				var fields = {
					fb_id: response.id,
					first_name: response.first_name,
					last_name: response.last_name,
					email: response.email,
					code: invitationCode.val(),
				};

				// Make the request
				$.ajax({
					url: '/auth/signup-via-facebook',
					method: 'post',
					dataType: 'json',
					data: fields,
					success: function(data) {
						// Redirect
						if (data.redirect) {
							window.location = data.redirect;
						} else {
							window.location.reload();
						}
					}
				});
			});
		}
	}, {
		scope: 'email'
	});

	return true;
}

function forgotPassword(e) {
	// Prevent default
	e.preventDefault();

	// Message area
	var message = $(this).parents('#sSignInForgotPassContent').find('.sSignInForgotPassDescription');

	// Submit button
	var submit = $(this).find('#sSignInForgotPassSubmit');

	// Get e-mail in form
	var email = $('#sSignInForgotPassEmail');

	// Make the request
	$.ajax({
		type: 'post',
		url: '/password-recovery',
		data: 'email=' + email.val(),
		dataType: 'json',
		beforeSend: function() {
			// Update submit button
			submit.val('Wait ...');
		},
		success: function(data, textStatus, jqXHR) {
			if (!data.success) {
				// Update message with error
				message.text(data.error);

				return false;
			}

			// Authenticated
			if (data.redirect) {
				window.location = data.redirect;
			} else {
				window.location = '/?mode=signin';
			}
		},
		complete: function() {
			// Update submit button
			submit.val('Send');
		}
	});

	return true;
}

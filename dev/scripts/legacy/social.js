/**
 * Facebook
 */
var fbLoaded = false;
window.fbAsyncInit = function() {
    FB.init({
        'appId': FB_APPID,
        'channelUrl': '//channel.php',
        'status': true,
        'cookie': false,
        'xfbml': true
    });
    fbLoaded = true;
    FB.Canvas.setAutoGrow();
    FB.Canvas.scrollTo(0, 0);
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


/**
 * Twitter
 */



/**
 * Google+
 */
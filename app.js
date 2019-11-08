function onSignIn(googleUser) {

    var profile = googleUser.getBasicProfile();
    document.querySelector('.g-signin2').style.display = 'none'
    document.querySelector('.data').style.display = 'block'
    document.querySelector('#pic').src.profile.getImageUrl()
    document.querySelector('#email').textContent.profile.getEmail()

}
var navbar = document.querySelector('.navbar');
window.addEventListener('scroll', ()=>{
    var height_w = window.pageYOffset;

    if(height_w>=884){
        navbar.classList.add('sticky_p');
    }else{
        navbar.classList.remove('sticky_p');
    }

})
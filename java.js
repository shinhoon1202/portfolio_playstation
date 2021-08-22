const games = document.querySelector('.games');
    const banner = document.querySelector('.banner-ad');
    const pls = document.querySelector('.pls-intro');
    const game = document.querySelector('.game-intro');
    const newgame = document.querySelector('.new-game');
    const footer = document.querySelector('.footer');
    const elements = [games, banner,pls,game,newgame,footer];
    function scrollHandler(){
        for(let i = 0; i < 6; i++){
            let postFromtop = elements[i].getBoundingClientRect().top
            if(window.innerHeight > postFromtop){
                elements[i].classList.add('move');
            }
        }
    }
    window.addEventListener('scroll',scrollHandler )
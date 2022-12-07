const revealBtn=document.querySelector('.show-btn');
const hiddenContent=document.querySelector('.hidden-content');

function revealContent(){
    if(hiddenContent.classList.contains('show-btn')){
        hiddenContent.classList.remove('show-btn')
    }else{
        hiddenContent.classList.add('show-btn')
    }
}

revealBtn.addEventListener('click',revealContent);
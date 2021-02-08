var c=false;
function anime () {
    if(!c){
        c=true;
        document.getElementsByClassName('box')[0].classList.add('animer');
        setTimeout( ()=>{
            document.getElementsByClassName('box')[0].classList.remove('animer');
            c=false;}
            , 6000);    
    }
}
function showMe(me){
    console.log(me);
}
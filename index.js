window.onload=function(){
    var frage = document.createDocumentFragment();
    for(let i = 0;i<4;i++){
            var x = Math.random()*300;
            var y = Math.floor(Math.random()*200);
            var dom = document.createElement('div');
            dom.className='loading'
            dom.style=`right:${x}px;top:${y}px`
            frage.appendChild(dom) 
    }
    var container = document.getElementsByClassName('container')[0];
    container.appendChild(frage)
    setTimeout(() => {
        for(let i = 0;i<3;i++){
                var x = Math.random()*300;
                var y = Math.floor(Math.random()*200);
                var dom = document.createElement('div');
                dom.className='loading'
                dom.style=`right:${x}px;top:${y}px`
                frage.appendChild(dom)
        }
        var container = document.getElementsByClassName('container')[0];
        container.appendChild(frage)
    }, 1000);
    
   
}
const one=document.getElementById('one');
const button=document.getElementById('btn')
button.addEventListener('click',function(){
    setInterval(() => {
        if(one.src.match('one')){
            one.src='./boytwo.jpeg';
            button.innerHTML='Next';
        }
        else if(one.src.match('two')){
       one.src='./boythree.jpeg';
        }
        else if(one.src.match('three')){
            one.src='./boyfour.jpeg';
        }
        else if(one.src.match('four')){
            one.src='./boyfive.jpeg';
        }
        else if(one.src.match('five')){
            one.src='./boysix.jpeg';
        }
        else  {
            one.src='./boyseven.jpeg';
            button.innerHTML='Restart';
            
        }
        
        
    }, 2000);
})
const n=10;
const arr=[];
 var audio = new Audio('soundeffect/soundeffect.mp3');
init();
//defining init function to initilize
function init(){
    for(let i=0;i<n;i++){
        arr[i]=Math.random();
    }
    showbars();
}

//play function start perfor a sort
function play(){
    const copy=[...arr];
    const swap=bubblesort(copy);
    animate(swap);
    // audio.play();
}

// animation function
function animate(swap){
    if(swap.length==0){
        showbars();
        return;

        
    }
    const [i,j]=swap.shift();
    [arr[i],arr[j]]=[arr[j],arr[i]];
    showbars([i,j]);
    setTimeout(function(){
        animate(swap);
        audio.play();
    },100);
}


//bubblr sort algorithm
function bubblesort(arr){
    const swap=[];
    do{
        var swapped=false;
        for(let i=1;i<arr.length;i++){
            if(arr[i-1]>arr[i]){
                swapped=true;
                swap.push([i-1,i]);
                [arr[i-1],arr[i]]=[arr[i],arr[i-1]];
                audio.play();
            }
        }
    }while(swapped);
    return swap;
    audio.play();
}

//creating bars
function showbars(indices){
    container.innerHTML="";
    for(let i =0; i<arr.length; i++){
        const bar=document.createElement("div");
        bar.style.height=arr[i]*800+"%";
        bar.classList.add("bar");
        
        if(indices && indices.includes(i)){
            bar.style.backgroundColor="red";
        }
        container.appendChild(bar);
    }
}
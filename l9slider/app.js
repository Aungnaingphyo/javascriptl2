var getimgs = document.querySelectorAll('.img');
// console.log(getimgs);
var getmodal = document.querySelector('.modal');
var getmodalimgs = document.querySelector('.modal-img');
var getcaption = document.querySelector('.caption');
var getbtnclose = document.querySelector('.btn-close');


for(var x = 0; x < getimgs.length; x++){
    getimgs[x].addEventListener('click',function(e){
        shownow(this);

    });


}




function shownow(ele){

    // console.log(ele);
    // console.log(ele.src);
    // console.log(ele.alt);

    getmodal.style.display = 'block';
    getmodalimgs.src = ele.src;
    getcaption.textContent = ele.alt;

}

// getbtnclose.addEventListener('click',function(){
    // getmodal.style.display = 'none'
// });

getbtnclose.onclick = function(){
    getmodal.style.display = 'none'
}

document.addEventListener('click',function(e){
    // console.log(this);

    if(e.target === getmodal){
        getmodal.style.display = 'none';
    }

})
const getcheckbox = document.getElementById('toggle-checkbox');
const getchecklabel = document.getElementById('toggle-label');
const getbasic = document.getElementById('basic');
const getprof = document.getElementById('profressional');
const getmst = document.getElementById('master');

getchecklabel.addEventListener('click',function(){
    if(getcheckbox.checked){
        // getbasic.textContent = 10;     
        // getprof.textContent = 20;
        // getmst.textContent = 30;

        [getbasic.textContent,getprof.textContent,getmst.textContent] = [10,20,30]

    }else{
        // getbasic.textContent = 120;
        // getprof.textContent = 240;
        // getmst.textContent = 360;

        [getbasic.textContent,getprof.textContent,getmst.textContent] = [120,240,360]    
    }
});
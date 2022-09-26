var gettablinks = document.getElementsByClassName('tablinks'); //  HTML Collection
var gettabpanes = document.getElementsByClassName('tab-pane');
var getbtnclose = document.querySelectorAll('.btn-close'); // node list

var tabpanes = Array.from(gettabpanes);
console.log(tabpanes);


function gettab(evn,linkid){
    
    tabpanes.forEach(function(tabpane){
        console.log(tabpane);
        tabpane.style.display = 'none';
    });

    for(var x = 0; x < gettablinks.length; x++){
        gettablinks[x].className = gettablinks[x].className.replace(' active','');

        getbtnclose[x].addEventListener('click',function(){
            this.parentElement.style.display = 'none'
        });

    }
    
    document.getElementById(linkid).style.display = 'block';

    // evn.target.className += ' active';
    // evn.target.className = evn.target.className.replace('tablinks','tablinks active');
    // evn.target.classList.add('active');

    // console.log(evn);
    // console.log(evn.target);
    // console.log(evn.currentTarget);
    evn.currentTarget.className += ' active';

}

document.getElementById('autoclick').click();
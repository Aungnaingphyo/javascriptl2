const getemail = document.getElementById('emails');
const gettextarea = document.querySelector('textarea');
const getbtn = document.querySelector('.btn');
const getemcontainer = document.querySelector('.email-container');


getemail.focus();

getemail.addEventListener('keyup',function(e){
    // createemaillist(e.target.value);


    createemaillist(this.value);
});

function createemaillist(inputext){
    // console.log(inputext);

    // split (',');
    // const eitems = inputext.split(',');
    // console.log(eitems);


    //remove empty
    // const eitems = inputext.split(',').filter(rmempty=>rmempty.trim() !== '');
    // console.log(eitems);

    //remove space/empty
    const emitems = inputext.split(',').filter(rmempty=>rmempty.trim() !== '').map(rmempty=>rmempty.trim());
    // console.log(eitems);    

    getemcontainer.innerHTML = '';

    emitems.forEach(function(emitem){
        
        const setnewspan = document.createElement('span');
        setnewspan.textContent = emitem;
        setnewspan.classList.add('email-item');

        getemcontainer.appendChild(setnewspan);

    });

}

getbtn.addEventListener('click',function(e){

    sendemail();

    e.preventDefault();
});

function sendemail(){
    // console.log('i am working');

    const gettextvalue = gettextarea.value;
    const getaddresses = document.querySelectorAll('.email-item');
    // console.log(gettextvalue);
    // console.log(getaddresses);

    var persons = [];

    if(getaddresses.length > 0 && gettextvalue){
        
        getaddresses.forEach(function(getaddresses){

            persons.push({
                email:getaddresses.textContent,
                message:gettextvalue
            });

        });

        console.log(persons);


    }else{
        window.alert("Enter Message");
        gettextarea.focus();
    }

}
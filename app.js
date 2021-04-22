const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const btn = document.getElementById('btn');

btn.onclick = function(){
    const key = fname.value;
    const value = lname.value;

    console.log(key);
    console.log(value);

    if(key && value){
        localStorage.setItem(key, value);
        location.reload();
    }
    
};
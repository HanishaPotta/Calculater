function appendToDisplay(num){
    document.getElementById('display').value+=num;
}
function clearDisplay(){
    document.getElementById('display').value='';
    document.getElementById('displayres').value='';
}
function clearLast(){
    var exp=document.getElementById('display').value;
    document.getElementById('display').value=exp.substring(0,exp.length-1);
}
function calculate(){
    var exp=document.getElementById('display').value;
    var res=eval(exp);
    document.getElementById('displayres').value=res;
}
function changeimg(val){
    if(val=='='){
    const imageElement = document.getElementById('potterImage');
    // Replace 'new-image.jpg' with the path to your new image
    imageElement.src = 'images/harry2.jpg';
    imageElement.alt = 'New Image Alt Text'; 
    }
    else if(val=='AC'){
        const imageElement = document.getElementById('potterImage');
        imageElement.src = 'images/harry1.jpg';
    }
    else{
        const imageElement = document.getElementById('potterImage');
        imageElement.src = 'images/harry3.jpeg';
    }
    }
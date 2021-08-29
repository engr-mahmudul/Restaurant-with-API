// Functions 
let useSearchText = text =>{
    if(text.length<1){
        console.log('Empty');
        let errorDiv = document.getElementById('error-message');
        
        let message = document.createElement('div');
        message.innerHTML=`<p class='text-center p-3 bg-danger container text-white'><b>Please enter a meal name...</b></p>`;
        errorDiv.appendChild(message);

    }
    else{
        if(text.length == 1){
            url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${text}`;
            console.log(url);
        }
        else{
            url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`;
            console.log(url);
        }
        
    }
}

// Button Click Handler 
document.getElementById('search-button').addEventListener('click',function(){
let searchText = document.getElementById('search-field').value;
document.getElementById("error-message").innerHTML = "";
useSearchText(searchText);

})

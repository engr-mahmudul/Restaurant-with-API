//Display data which has beeb fetched
let showData = (data,text)=>{
    if (data === null){
        let errorDiv = document.getElementById('messages');
        
        let message = document.createElement('div');
        message.innerHTML=`<p class='text-center p-3  container '>Your searching result <b>${text}</b> is not found</p>`;
        errorDiv.appendChild(message);
    }
    else{
       console.log("yes");
    }
    
}
// Common Function For URL Factch
let fetchUrlWithText = text =>{
    if (text.length==1){
        url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${text}`;
    }
    else{
        url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`;

    }
    fetch(url)
    .then(response => response.json())
    .then(data=> showData(data.meals,text));
}
// Use Search Text 
let useSearchText = text =>{
    if(text.length<1){
        
        let errorDiv = document.getElementById('messages');
        
        let message = document.createElement('div');
        message.innerHTML=`<p class='text-center p-3 bg-danger container text-white'><b>Please enter a meal name...</b></p>`;
        errorDiv.appendChild(message);

    }
    else{
        fetchUrlWithText (text);
              
        
    }
}

// Button Click Handler 
document.getElementById('search-button').addEventListener('click',function(){
let searchText = document.getElementById('search-field').value;
document.getElementById("messages").innerHTML = "";
useSearchText(searchText);

})

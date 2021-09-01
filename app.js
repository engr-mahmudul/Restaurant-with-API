function showSingleItemDetails(data){
    console.log(data)
    let detailDiv = document.getElementById("item-details");
    let div = document.createElement('div');
    div.innerHTML = `
    name:${data.idMeal}
    details:${data.strMeal}

    `
    detailDiv.appendChild(div);
}
function showDetails(id){
   url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
   fetch(url)
   .then(response => response.json())
   .then(data => showSingleItemDetails(data.meals[0]))
}
//Display data which has beeb fetched
let showData = (data,text)=>{
    if (data === null){
        let errorDiv = document.getElementById('messages');
        
        let message = document.createElement('div');
        message.innerHTML=`<p class='text-center p-3  container text-2xl '>Your searching result <b>"${text}"</b> is not found</p>`;
        errorDiv.appendChild(message);
    }
    else{
        console.log(data);
        // Message
        const messageField = document.getElementById('messages');
        let div = document.createElement('div');
        div.classList.add("p-3", "container","w-80");
        div.innerHTML = `
        <p class=" text-center fs-5 text"> Searching Results for <b>${text}</b> :</p>`
        messageField.appendChild(div);
        // End Message 
        const itemContainer = document.getElementById('item-container');
        data.forEach(item => {
            const newDiv = document.createElement('div');
            newDiv.classList.add('col');
            newDiv.innerHTML = `
            <div class="card" onclick = "showDetails(${item.idMeal})">
                <img src="${item.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.strMeal.slice(0,15)}</h5>
                    
                </div>
            </div>
            `
            itemContainer.appendChild(newDiv);
        })

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
        
        console.log("Empty Search field");
        const messageField = document.getElementById('messages');
        let div = document.createElement('div');
        div.classList.add("bg-danger", "p-3", "container","w-80","border","rounded");
        div.innerHTML = `
        <p class="text-white text-center fw-bold fs-5 text "> Please put a Food name for searching</p>
        `
        messageField.appendChild(div);


    }
    else{
       fetchUrlWithText (text);         
    }
}

// Button Click Handler 
document.getElementById('search-button').addEventListener('click',function(){
let searchText = document.getElementById('search-field').value;
document.getElementById('search-field').value = '';
document.getElementById("messages").innerHTML = '';
document.getElementById("item-details").innerHTML = '';
document.getElementById('item-container').innerHTML = '';
useSearchText(searchText);

})

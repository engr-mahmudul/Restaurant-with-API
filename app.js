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
        const itemContainer = document.getElementById('item-container');
        data.forEach(item => {
            const newDiv = document.createElement('div');
            newDiv.classList.add('col');
            newDiv.innerHTML = `
            <div class="card">
                <img src="${item.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.</p>
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
        div.classList.add("bg-danger", "p-3", "container","w-80");
        div.innerHTML = `
        <p class="text-white text-center fw-bold fs-5 text"> Please put a Food name for searching</p>
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
document.getElementById('item-container').innerHTML = '';
useSearchText(searchText);

})

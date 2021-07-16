// select all DOM nodes
const inputE1 = document.querySelector(`input`);
const btDog = document.querySelector(`button`);
const article = document.querySelector(`article`)

btDog.addEventListener(`click`,fetchDogs)
// create a function to fetch dog breeds which returns the json data
//store this fetched data in function
function fetchDogs() {
    let query = inputE1.value;
   article.innerHTML=""
    fetch(`https://dog.ceo/api/breed/${query}/images/random/5`)
    .then(res => res.json())
    .then(data =>{
        //  console.log(data.message)
        getResponse(data)
    })
}

//make new function (getResponse) to dynamically add images
function getResponse(data){
    console.log(data.message);

    if (data.status=='success'){
        data.message.forEach(dog=>{
            console.log(dog);
            let dogDiv=document.createElement(`div`)
            dogDiv.className="doggo";
            dogDiv.innerHTML=`<img src=${dog}>`
            article.append(dogDiv)
        });

    }else{
        const notFound = document.createElement(`div`)
        notFound.innerText= "dog not found"
        notFound.className = "notfound"

        article.append(notFound)
    }
}

fetchDogs();
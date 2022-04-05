document.getElementById('new-quote').addEventListener('click', getText);

// function display(){

//   let promise = new Promise (function(myResolve, myReject){

//     let res = fetch ('https://friends-quotes-api.herokuapp.com/quotes/random', 'GET');
//     console.log(res);
//   })





// // }
// function getText() {

//   fetch('https://friends-quotes-api.herokuapp.com/quotes/random')
//     .then(data => data.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


// }

// fetch('test.txt')
// .then(data => console.log(data))
// .catch(err => console.log(err);)









//get quotes from API
// async function getQuotes(){
//   const apiUrl = 'https://type.fit/api/quotes';
//   try {
//     const response = await fetch(apiUrl);
//     apiQuotes = await response.json();

//   } catch (error) {
//     //catch error here
//     alert

//   }
// }

// AJAX EXAMPLE

document.getElementById('new-quote').addEventListener('click', display);

function display(){

  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://type.fit/api/quotes', true);
  xhr.onload = function () {
    if(this.status == 200) {
      let res = JSON.parse(this.responseText);
      let result = Math.floor(Math.random()*res.length);
      console.log(result);
      console.log(res);
       document.getElementById('quote').innerHTML = `${res[result].text}`;
       document.getElementById('author').innerHTML = `${res[result].author}`;
    }
  }
  xhr.send();
}
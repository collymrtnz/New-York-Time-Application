//https://api.nytimes.com/svc/topstories/v2/world.json?api-key=yourkey

//AXK921Y2aaMniXVkb4gVmy2YBcKoKAf8

let url = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=AXK921Y2aaMniXVkb4gVmy2YBcKoKAf8";

let headlines = document.getElementById("headlines");


fetch(url)
.then(response => response.json())
.then(data =>  {
console.log(data);

data.results.map(article => {
  
  console.log(article.title);

  let a = document.createElement("a");
  a.setAttribute('href', article.url);
  a.innerHTML = article.title;

  let p = document.createElement("p");
  p.innerHTML = article.abstract;

  let img = document.createElement("img");
  img.setAttribute('src', article.multimedia[0].url);
  

  //<p> this text </p>
headlines.append(img);
headlines.appendChild(p);
headlines.appendChild(a);
  
  }) 
})

//fetch(url)
 // .then(response => response.json())
 // .then(data => console.log(data));
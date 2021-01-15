// OZg58sa6AScWsmGas5vAkQ6lRBGso3O5
let url = "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=OZg58sa6AScWsmGas5vAkQ6lRBGso3O5";

let headlines = document.getElementById("headlines");

fetch(url).then(response => response.json()).then(data => {
  // console.log(data);
  data.results.map(article => {
    console.log(article);

    let a = document.createElement("a");
    a.setAttribute('href', article.url);
    a.innerHTML = article.title;

    let img = document.createElement("img");
    img.setAttribute('src', article.multimedia[2].url);

    let p = document.createElement("p");
    p.innerHTML = article.abstract;

    let story = document.createElement("div");
    story.setAttribute("class", "story");
    
    story.appendChild(img);
    story.appendChild(a);
    story.appendChild(p);
    headlines.appendChild(story);
  }

  )
})
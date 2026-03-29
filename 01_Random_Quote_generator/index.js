const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

// const api_url = 'https://dummyjson.com/quotes/random'

async function getquote(url){
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    quote.innerHTML = data.quote;
    author.innerHTML = `- By ${data.author}`;
}

getquote(api_url);
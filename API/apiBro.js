async function getNews(){
    await fetch('https://newsapi.org/v2/everything?' +
        'q=Apple&' +
        'from=2023-08-16&' +
        'sortBy=popularity&' + 
        'apiKey=c095a5517b484463869a7ebe3be46993')
    .then(d => d.json())
    .then(response => {

        for(var i = 0; i < 5; i++){
            console.log(response.articles[i]);
            
            const output = output.getelementByID('output');

            output.innerHTML += `
                    <div class="card">
                    <div class="card-body">
                    <img src="${response.articles[i][urlToImage]}" class="card-img-top" alt="error" title=""><br>
                    `
                console.log(response.results[i]['media'][0].caption);
            

        }
    })
}


getNews();
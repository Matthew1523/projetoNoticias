async function getNews(){

    

    const reponseArticles = await fetch(
    'https://newsapi.org/v2/everything?' +
    'q=anime&' +
    'sortBy=popularity&' + 
    'apiKey=COLOQUE SUA API KEY AQUI!!!');

    const parsedResponse = await reponseArticles.json();
    const article = await parsedResponse['articles'];
    

    let informationsArticle = [
        "author",
        "title",
        "description",
        "url",
        "urlToImage",
        "publishedAt",
        "content"
    ]

    

    // Algoritmo para manipulação e estruturação do site
    try{


    // for(let i=0; i<=6; i++){

    //     console.log("Article number:" + i);

    //     for(let informationRow = 0; informationRow < informationsArticle.length; informationRow++)
    //     {
        
    //         console.log(
    //             informationsArticle[informationRow] + ": " + article[i][informationsArticle[informationRow]]
    //         );

    //         }
    //     console.log("\n");
    //     }

        
        const news = document.getElementsByClassName("cardbox");
        
       
        let i = 0;
        let cardboxItems = `
        
        <div class="card-item flex-container_column" data-name="c1">
            <img
                class="card-item__picture"
                src="${article[i]["urlToImage"]}"
                alt="no image reference found"
            />
            <div class="card-item__informations flex-container_column">
        
                <h3 class="card-item__title">${article[i]["title"]}</h3>
                

                <div class="card-item__informations__datapost">
                <span class="card-item__press-news">${article[i]["source"]["name"]}</span> • <span class="card-item__posted-day">${article[i]["publishedAt"]}</span>
                </div>

                <div class="card-item__description">
                ${article[i]["description"]}
            </div>
        
        
            </div>
        <button class="card-item__button">Read More</button>
        </div>

        


        ` ;

        news[1].innerHTML = cardboxItems;
        
        
        

    //     for(let i=0; i<3; i++){
    //     news.innerHTML += `

    //         <div class="cardbox flex-container__row">
    //             ${cardboxItems}
    //         </div>

    //         `

    //     }

    // }

    }


    catch(err){
        console.log(err);
    }




}




function appendNewsItem(carboxItemVariable){
    

    for(let repeat = 0; repeat < 3; repeat++){
        cardboxItemVarible += cardboxItemVarible;
    }


    return cardboxItemVarible;
}

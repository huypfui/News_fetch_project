//* Was brauche ich?
// Section mit Bild oben (urlToImage), Kurze Artikel Beschreibung(description), Datum (publishedAt), Read More Button (mit url)

const mainBody = document.querySelector("main")
const keyword = document.querySelector("#keyword")


function americanNews() {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=6a5a44e4ffb044b2952eb20f0c548569`) // --> Top Headlines in EN
    .then(response => response.json())
    .then((data) => {
            
            console.log(data) // --> Object
            data.articles.forEach((newsArticle) => {
            console.log(newsArticle)

            // Daten, die ich brauche für den Artikel
            const picture = newsArticle.urlToImage
            const description = newsArticle.description
            const newsDate = newsArticle.publishedAt
            const url = newsArticle.url
            
            let neuesDatum = newsDate
            let shortDate = neuesDatum.slice(0,10)

            /* Wie ein Artikel im HTML aussehen soll
            <div>
                <img src="" alt="">
                <p>Beschreibung</p>
                <p>Datum</p>
                <button>READ MORE</button>
            </div>
            */

            // Erstelle mir die Elemente und übertrage sie ins HTML
            
            const divElement = document.createElement("div")
            document.body.appendChild(divElement)

            const imgElement = document.createElement("img")
            imgElement.src = picture
            divElement.appendChild(imgElement)

            const descriptionElement = document.createElement("p")
            descriptionElement.innerHTML = description
            divElement.appendChild(descriptionElement)

            const dateElement = document.createElement("p")
            dateElement.innerHTML = shortDate
            divElement.appendChild(dateElement)

            const readMoreBtn = document.createElement("button")
            readMoreBtn.innerHTML = "READ MORE"
            divElement.appendChild(readMoreBtn)

            // Erstelle eine Click Function für den Button
            readMoreBtn.addEventListener ("click", () => {
                window.open(url)
            })

            mainBody.appendChild(divElement)

    })
})
}

function germanNews() {

fetch(`https://newsapi.org/v2/top-headlines?country=de&apiKey=6a5a44e4ffb044b2952eb20f0c548569`) // --> Top Headlines in DE
    .then(response => response.json())
    .then((data) => {
            
            console.log(data) // --> Object
            data.articles.forEach((newsArticle) => {
            console.log(newsArticle)

            // Daten, die ich brauche für den Artikel
            const picture = newsArticle.urlToImage
            const description = newsArticle.description
            const newsDate = newsArticle.publishedAt
            const url = newsArticle.url
            
            let neuesDatum = newsDate
            let shortDate = neuesDatum.slice(0,10)

            /* Wie ein Artikel im HTML aussehen soll
            <div>
                <img src="" alt="">
                <p>Beschreibung</p>
                <p>Datum</p>
                <button>READ MORE</button>
            </div>
            */

            // Erstelle mir die Elemente und übertrage sie ins HTML
            
            const divElement = document.createElement("div")
            document.body.appendChild(divElement)

            const imgElement = document.createElement("img")
            imgElement.src = picture
            divElement.appendChild(imgElement)

            const descriptionElement = document.createElement("p")
            descriptionElement.innerHTML = description
            divElement.appendChild(descriptionElement)

            const dateElement = document.createElement("p")
            dateElement.innerHTML = shortDate
            divElement.appendChild(dateElement)

            const readMoreBtn = document.createElement("button")
            readMoreBtn.innerHTML = "READ MORE"
            divElement.appendChild(readMoreBtn)

            // Erstelle eine Click Function für den Button
            readMoreBtn.addEventListener ("click", () => {
                window.open(url)
            })

            mainBody.appendChild(divElement)

    })
})
}

function keywordSearchUS() {
    console.log(keyword.value)
    fetch(`https://newsapi.org/v2/everything?q=${keyword.value}&language=en&apiKey=6a5a44e4ffb044b2952eb20f0c548569`) // --> Keyword Search
    .then(response => response.json())
    .then((data) => {
            
            console.log(data) // --> Object
            data.articles.forEach((newsArticle) => {
            console.log(newsArticle)

            // Daten, die ich brauche für den Artikel
            const picture = newsArticle.urlToImage
            const description = newsArticle.description
            const newsDate = newsArticle.publishedAt
            const url = newsArticle.url
            
            let neuesDatum = newsDate
            let shortDate = neuesDatum.slice(0,10)

            /* Wie ein Artikel im HTML aussehen soll
            <div>
                <img src="" alt="">
                <p>Beschreibung</p>
                <p>Datum</p>
                <button>READ MORE</button>
            </div>
            */

            // Erstelle mir die Elemente und übertrage sie ins HTML
            
            const divElement = document.createElement("div")
            document.body.appendChild(divElement)

            const imgElement = document.createElement("img")
            imgElement.src = picture
            divElement.appendChild(imgElement)

            const descriptionElement = document.createElement("p")
            descriptionElement.innerHTML = description
            divElement.appendChild(descriptionElement)

            const dateElement = document.createElement("p")
            dateElement.innerHTML = shortDate
            divElement.appendChild(dateElement)

            const readMoreBtn = document.createElement("button")
            readMoreBtn.innerHTML = "READ MORE"
            divElement.appendChild(readMoreBtn)

            // Erstelle eine Click Function für den Button
            readMoreBtn.addEventListener ("click", () => {
                window.open(url)
            })

            mainBody.appendChild(divElement)

    })
})
}

function keywordSearchDE() {
    console.log(keyword.value)
    fetch(`https://newsapi.org/v2/everything?q=${keyword.value}&language=de&apiKey=6a5a44e4ffb044b2952eb20f0c548569`) // --> Keyword Search
    .then(response => response.json())
    .then((data) => {
            
            console.log(data) // --> Object
            data.articles.forEach((newsArticle) => {
            console.log(newsArticle)

            // Daten, die ich brauche für den Artikel
            const picture = newsArticle.urlToImage
            const description = newsArticle.description
            const newsDate = newsArticle.publishedAt
            const url = newsArticle.url
            
            let neuesDatum = newsDate
            let shortDate = neuesDatum.slice(0,10)

            /* Wie ein Artikel im HTML aussehen soll
            <div>
                <img src="" alt="">
                <p>Beschreibung</p>
                <p>Datum</p>
                <button>READ MORE</button>
            </div>
            */

            // Erstelle mir die Elemente und übertrage sie ins HTML
            
            const divElement = document.createElement("div")
            document.body.appendChild(divElement)

            const imgElement = document.createElement("img")
            imgElement.src = picture
            divElement.appendChild(imgElement)

            const descriptionElement = document.createElement("p")
            descriptionElement.innerHTML = description
            divElement.appendChild(descriptionElement)

            const dateElement = document.createElement("p")
            dateElement.innerHTML = shortDate
            divElement.appendChild(dateElement)

            const readMoreBtn = document.createElement("button")
            readMoreBtn.innerHTML = "READ MORE"
            divElement.appendChild(readMoreBtn)

            // Erstelle eine Click Function für den Button
            readMoreBtn.addEventListener ("click", () => {
                window.open(url)
            })

            mainBody.appendChild(divElement)

    })
})
}




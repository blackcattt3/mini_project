const apiKey = `12dddfa0489b427c9b4d886527577d89`;
let url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
let searchIcon = document.querySelector(".search-icon")
let searchToggle = document.querySelector(".search-toggle");
let input = document.querySelector(".search-toggle input");
let menus = document.querySelector(".menus");
let menuBtn = document.querySelectorAll(".menus button");
let xBtn = document.querySelector(".x-btn");
let hamburger = document.querySelector(".hamburger");
let goBtn = document.querySelector(".go-btn");

let totalResults = 0;
const pageSize = 5;
const groupSize = 5;
let page = 1;
// totalPage
// pageGroup
// lastPage
// firstPage


const paginationRender = ()=>{
    
    // totalResults = data.totalResults;
    const totalPage = Math.ceil(totalResults/pageSize)
    let pageGroup = Math.ceil(page/groupSize);
    let lastPage = pageGroup * groupSize;
    if(lastPage<totalPage){
        lastPage = totalPage;
    }
    let firstPage = lastPage - (groupSize-1);
    if(firstPage<1){
        firstPage = 1
    }
    // console.log(totalResult);

    paginationHTML = '';
    if(page>1){
        paginationHTML += `<li class="page-item" onclick='moveToPage(${1})'><a class="page-link" href="#"><<</a></li>
        <li class="page-item" onclick='moveToPage(${page-1})'><a class="page-link" href="#"><</a></li>`
    }
    for(let i=firstPage;i<=lastPage;i++){
        paginationHTML += `<li class="page-item ${i===page?"active":""}" onclick='moveToPage(${i})'><a class="page-link" href="#">${i}</a></li>`
    }
    if(page<totalPage){
        paginationHTML += `<li class="page-item" onclick='moveToPage(${page+1})'><a class="page-link" href="#">></a></li>
        <li class="page-item" onclick='moveToPage(${totalPage})'><a class="page-link" href="#">>></a></li>`
    }

    document.querySelector(".pagination").innerHTML = paginationHTML;
}

const moveToPage = (clickedPage)=>{
    page = clickedPage;
    getNews();
    // paginationRender();
    // console.log(clickedPage);
}

// const pageRender = ()=>{
//     const start = (page-1) * pageSize;      // 0,5,10...
//     const end = start + pageSize;           // 5,10,15...

// }

const getNews = async()=>{

    url.searchParams.set("page", page);
    url.searchParams.set("pageSize", pageSize);

    try{
        const response = await fetch(url);
        const data = await response.json();

        if(response.status === 200){
            if(data.articles.length === 0){
                throw new Error("no result for this search");
            }
            newsList = data.articles;
            totalResults = data.totalResults;
            console.log(newsList);
            renderNews()
            paginationRender();
        }else{
            throw new Error(data.message);
        }
    } catch(error){
        console.log(error.message);
        errorRender(error.message);
    }
    // const response = await fetch(url);
    // const data = await response.json();
    // newsList = data.articles;
    // console.log(response);
    // renderNews()
}

const renderNews = ()=>{
    resultHTML = '';

    resultHTML = newsList.map((item)=>{
        const abstract = textAbstract(item.description)
        return `<div class="row news">
                <div class="col-lg-4">
                    <img  class="news-img-size" src="${item.urlToImage==null?`https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png`:item.urlToImage}">
                </div>
                <div class="col-lg-8">
                    <h1>${item.title}</h1>
                    <p>${abstract}</p>
                    <div>${moment(item.publishedAt).fromNow()}</div>
                </div>
            </div>`
    }).join("");
    document.querySelector(".news-board").innerHTML = resultHTML;
}

const showByCategory = (item)=>{
    // business, health.. 매개변수로 전달
    url = new URL(`https://newsapi.org/v2/top-headlines?country=us&category=${item}&apiKey=${apiKey}`);
    getNews()
    console.log(item);
}

const showByKeyword = (value)=>{
    url = new URL(`https://newsapi.org/v2/top-headlines?country=us&q=${value}&apiKey=${apiKey}`);
    getNews()
}

const errorRender = (errorMessage)=>{
    const ErrorHTML = `<div class="alert alert-danger" role="alert">${errorMessage}</div>`
    document.querySelector(".news-board").innerHTML = ErrorHTML;
}

const textAbstract = (description)=>{
    if(!description){
        return "no data"
    }else if(description.length > 200){
        return description = description.slice(0,201)+'...'
    } else if(description.length <= 200){
        return description
    }
    
}


getNews();

hamburger.addEventListener("click", ()=>[
    menus.classList.toggle("active")
])
xBtn.addEventListener("click", ()=>{
    menus.classList.toggle("active");
})
searchIcon.addEventListener("click", ()=>{
    searchToggle.classList.toggle("active");
})
goBtn.addEventListener("click",()=>showByKeyword(input.value))
menuBtn.forEach((item)=>item.addEventListener("click", (item)=>showByCategory(item.target.textContent)));
menuBtn.forEach((item)=>item.addEventListener("click", ()=>{menus.classList.toggle("active")}));

// 200자 넘으면 ... 로
// 페이지네이션
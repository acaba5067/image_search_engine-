const searchform=document.getElementById("search-form");
const searchBox=document.getElementById("search-box");
const searchrResult=document.getElementById("search-result");
const showMoreBtn=document.getElementById("show-more-btn");
const accesskey= "0g5WgZAkmz_x8DRotaaO2rejwke4vcI_o6d5g-5Jr4k";


let keyword="";
let page=1;
async function searchImages(){
    keyword=searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`

    const response=await fetch(url);
    const data=await response.json();
    if(page===1)
    {
        searchrResult.innerHTML=""
    }
    const results=data.results;
    results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imageLink=document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target="_blank";

        imageLink.appendChild(image);
        searchrResult.appendChild(imageLink);
    })
    showMoreBtn.style.display="block";
}
searchform.addEventListener("submit",(e)=>{
    e.preventDefault();
    page=1;
    searchImages();
})

showMoreBtn.addEventListener("click",()=>{
    page++;
    searchImages();
})
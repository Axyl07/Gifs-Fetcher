import './index.css'
const img = document.querySelector("img");

const refresh = document.querySelector("#refresh");
const errorMsgDiv = document.querySelector('.errorMsg');
refresh.addEventListener("click", () => {
  const searchInputValue = document.querySelector("#search").value;
  const keyInputValue = document.querySelector("#key").value;
  if (!keyInputValue) {
    getGif(searchInputValue);
  } else getGif(searchInputValue, keyInputValue);
});

const go = document.querySelector("#go");
go.addEventListener("click", () => {
  const searchInputValue = document.querySelector("#search").value;
  const keyInputValue = document.querySelector("#key").value;
  if (!keyInputValue) {
    getGif(searchInputValue);
  } else getGif(searchInputValue, keyInputValue);
});

async function getGif(search, key = "YdjaYfPKpSs7vatt6WSoyEBi6UobIMnC") {
  const URL = `https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=${search}`;
  console.log(URL);
  const response = await fetch(URL, { mode: "cors" })
  const gifData = await response.json();
    if (gifData.data.length === 0) {
      console.log('no gif found');
      img.style.display = 'none';
      errorMsgDiv.textContent = "No gifs found :("
  }
  else {
      errorMsgDiv.textContent = "";
      img.style.display = 'block';
      img.src = gifData.data.images.original.url;
  }   
}

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

function getGif(search, key = "YdjaYfPKpSs7vatt6WSoyEBi6UobIMnC") {
  const URL = `https://api.giphy.com/v1/gifs/translate?api_key=${key}&s=${search}`;
  console.log(URL);
    fetch(URL, { mode: "cors" })
        .then(function (response) {
            let jsonresponse = response.json();
            console.log(jsonresponse);
            return jsonresponse ;
        })
        .then(function (response) {
            if (response.data.length === 0) {
                console.log('no gif found');
                img.style.display = 'none';
                errorMsgDiv.textContent = "No gifs found :("
           
            }
            else {
                errorMsgDiv.textContent = "";
                img.style.display = 'block';
                img.src = response.data.images.original.url;
            }
        });
}

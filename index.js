import { catsData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios");
const imageBtn = document.getElementById("get-image-btn");
const gifsOnlyOption = document.getElementById("gifs-only-option");
const memeModalInner = document.getElementById("meme-modal-inner");
const memeModal = document.getElementById("meme-modal");
const memeModalCloseBtn = document.getElementById("meme-modal-close-btn");

emotionRadios.addEventListener("change", highlightCheckedOption);
imageBtn.addEventListener("click", renderCat);
memeModalCloseBtn.addEventListener("click", closeModal)

function closeModal() {
  memeModal.style.display = "none"
}

//this function is getting the emotion of the selected radio button
//it will later be used to retrieve an cat image of the same emotion
function getMatchingCatsArray() {
  // console.log(isGif);
  if (document.querySelector('input[type="radio"]:checked')) {
    const selectedEmotion = document.querySelector(
      'input[type="radio"]:checked'
    ).value;
    const isGif = gifsOnlyOption.checked;
    // console.log(selectedEmotion.value);
    const matchingCatsArray = catsData.filter(function (cat) {
      if (isGif) {
        return cat.emotionTags.includes(selectedEmotion) && cat.isGif
      } else {
        return cat.emotionTags.includes(selectedEmotion);
      }
    });
    return matchingCatsArray;
  }
}

function getSingleCatObject() {
  const catsArray = getMatchingCatsArray()
  console.log(catsArray)
  if (catsArray.length === 1) {
    return catsArray[0]
  } else {
    const randomNumber = Math.floor(Math.random() * catsArray.length)
    return catsArray[randomNumber]
  }
}

function renderCat() {
  const catObject = getSingleCatObject();
  memeModalInner.innerHTML = `<img 
        class="cat-img" 
        src="./images/${catObject.image}"
        alt="${catObject.alt}"
        >`;
        memeModal.style.display = "flex"
}

//this function is removing the highlight classlist from old radio buttons and
//adding highlight to the classlist of the newly selected radio button
function highlightCheckedOption(e) {
  const radioCollection = document.getElementsByClassName("radio");
  for (let radio of radioCollection) {
    radio.classList.remove("highlight");
  }
  document.getElementById(e.target.id).parentElement.classList.add("highlight");
  // console.log(e.target.id);
}

//this function is getting the cats and pushing the unique emotions to the array
function getEmotionsArray(cats) {
  const emotionArr = [];
  for (let cat of cats) {
    // console.log(cat.emotionTags);
    for (let emotion of cat.emotionTags) {
      if (!emotionArr.includes(emotion)) {
        emotionArr.push(emotion);
      }
    }
  }
  return emotionArr;
}

//this function is storing the unique cat emotions and adding them as html radio buttons to the page
function renderEmotionsRadios(cats) {
  let emotionItems = ``;
  const emotions = getEmotionsArray(cats);
  console.log(emotions);
  for (let emotion of emotions) {
    emotionItems += `
        <div class="radio">
          <label for='${emotion}'>${emotion}</label>
          <input type='radio' id='${emotion}' value='${emotion}' name='radio-btn'>
        </div>
      `;
  }
  emotionRadios.innerHTML = emotionItems;
}

renderEmotionsRadios(catsData);

// getEmotionsArray(catsData);

const catsData = [
  {
    emotionTags: ["moody"],
    isGif: false,
    image: "./images/angry.jpeg",
    alt: "A cat looking moody",
  },
  {
    emotionTags: ["moody", "insomniac"],
    isGif: false,
    image: "./images/angry2.jpeg",
    alt: "A cat looking moody",
  },
  {
    emotionTags: ["moody"],
    isGif: false,
    image: "./images/angry3.jpeg",
    alt: "A cat looking moody",
  },
  {
    emotionTags: ["confused", "sad"],
    isGif: false,
    image: "./images/confused.jpeg",
    alt: "A cat looking confused",
  },
  {
    emotionTags: ["dominant", "moody"],
    isGif: false,
    image: "./images/dominant.jpeg",
    alt: "A cat looking dominant",
  },
  {
    emotionTags: ["happy", "relaxed"],
    isGif: false,
    image: "./images/happy.jpeg",
    alt: "A cat looking happy",
  },
  {
    emotionTags: ["hungry"],
    isGif: false,
    image: "./images/hungry.jpeg",
    alt: "A cat looking hungry",
  },
  {
    emotionTags: ["hungry"],
    isGif: false,
    image: "./images/hungry1.jpeg",
    alt: "A cat looking hungry",
  },
  {
    emotionTags: ["insomniac"],
    isGif: false,
    image: "./images/insomnia.jpeg",
    alt: "A cat looking insomniac",
  },
  {
    emotionTags: ["insomniac"],
    isGif: false,
    image: "./images/insomnia1.jpeg",
    alt: "A cat looking insomniac",
  },
  {
    emotionTags: ["relaxed"],
    isGif: false,
    image: "./images/lazy.jpeg",
    alt: "A cat looking lazy",
  },
  {
    emotionTags: ["scared"],
    isGif: false,
    image: "./images/nervous.jpeg",
    alt: "A cat looking nervous",
  },
  {
    emotionTags: ["sad"],
    isGif: false,
    image: "./images/sad.jpeg",
    alt: "A cat looking sad",
  },
  {
    emotionTags: ["sad", "moody"],
    isGif: false,
    image: "./images/sad1.jpeg",
    alt: "A cat looking sad",
  },
  {
    emotionTags: ["moody"],
    isGif: true,
    image: "./images/angry.gif",
    alt: "A cat looking moody",
  },
  {
    emotionTags: ["moody"],
    isGif: true,
    image: "./images/angry2.gif",
    alt: "A cat looking angry",
  },
  {
    emotionTags: ["confused"],
    isGif: true,
    image: "./images/confused2.gif",
    alt: "A cat looking confused",
  },
  {
    emotionTags: ["dominant"],
    isGif: true,
    image: "./images/dominant.gif",
    alt: "A cat looking dominant",
  },
  {
    emotionTags: ["happy"],
    isGif: true,
    image: "./images/happy.gif",
    alt: "A cat looking happy",
  },
  {
    emotionTags: ["hungry", "sad", "confused"],
    isGif: true,
    image: "./images/confused.gif",
    alt: "A cat looking hungry",
  },
  {
    emotionTags: ["hungry"],
    isGif: true,
    image: "./images/hungry.gif",
    alt: "A cat looking hungry",
  },
  {
    emotionTags: ["hungry"],
    isGif: true,
    image: "./images/hungry2.gif",
    alt: "A cat looking hungry",
  },
  {
    emotionTags: ["insomniac", "scared"],
    isGif: true,
    image: "./images/insomnia2.gif",
    alt: "A cat looking insomniac",
  },
  {
    emotionTags: ["relaxed"],
    isGif: true,
    image: "./images/lazy.gif",
    alt: "A cat looking relaxed",
  },
  {
    emotionTags: ["relaxed"],
    isGif: true,
    image: "./images/relaxed2.gif",
    alt: "A cat looking relaxed",
  },
  {
    emotionTags: ["scared", "sad"],
    isGif: true,
    image: "./images/nervous.gif",
    alt: "A cat looking nervous",
  },
  {
    emotionTags: ["scared"],
    isGif: true,
    image: "./images/nervous2.gif",
    alt: "A cat looking scared",
  },
  {
    emotionTags: ["sad"],
    isGif: true,
    image: "./images/sad.gif",
    alt: "A cat looking sad",
  },
];

function getEmotionsArray(cats) {
  const emotionsArray = [];
  for (let i = 0; i < cats.length; i++) {
    for (let j = 0; j < cats[i].emotionTags.length; j++) {
      emotionsArray.push(cats[i].emotionTags[j]);
    }
  }
  console.log(emotionsArray);
}

// getEmotionsArray(catsData)

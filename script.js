// FUN FACT BUTTON
const allFacts = [
  "My MBTI is INFP!",
  "I make stickers for a bunch of events! Ask me for one next time we meet! :3",
  "I know Arabic, English, high school French, and am trying to learn Mandarin! (HSK1 tho)",
  "I LOVE LOVE LOVE FOOD.",
  "I am a very bad liar.",
  "I have a VERY large plushie collection (more than an 18-year-old probably should)",
  "As a kid, my internet alias was “Luigi”.",
  "I sometimes spell my name in the wrong way “Kareem” because that’s what I’m used to.",
  "I wear headphones almost all the time."
];

let availableFacts = [...allFacts]; 

const rabbotButton = document.getElementById('rab-bot-button');
const factDisplay = document.getElementById('fact-text');

rabbotButton.addEventListener('click', () => {
  if (availableFacts.length === 0) {
    availableFacts = [...allFacts];
  }

  const randomIndex = Math.floor(Math.random() * availableFacts.length);
  
  const chosenFact = availableFacts.splice(randomIndex, 1);

  factDisplay.innerText = chosenFact;
});
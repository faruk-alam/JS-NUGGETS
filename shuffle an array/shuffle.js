let cards = ["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
// using sort method 
 //cards.sort(() => Math.random() - 0.5);
 // using fisher-yates algorithm
 shuffle(cards)
 console.log(cards)
 function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
 }



// let shuffledCards = [];

// for(let i = 0; i < cards.length; i++){
//     let randomIndex = Math.floor(Math.random() * cards.length);
//     shuffledCards.push(cards[randomIndex]);
//     cards.splice(randomIndex, 1);
// }
// console.log(shuffledCards);
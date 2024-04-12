
const zodQuote = {
    zodiac: [
        'Aquarius','Pisces','Aries',
        'Taurus','Gemini','Cancer',
        'Leo','Virgo','Libra',
        'Scorpio','Sagittarius','Capricorn'
    ],


generateRandomNumber(number){

    let createRandom = Math.floor(Math.random() * number)
    return createRandom;
},

generateData(arrs){
    const randIndex = this.generateRandomNumber(arrs.length)
    return arrs[randIndex];
},

zodiacSign:'',

guessFortune() {
    const zodiacs = this.generateData(zodQuote.zodiac);

    switch(zodiacs){
        case 'Aquarius':
            this.zodiacSign = ' u gonna be a bitch';
            break;
        case 'Pisces':
            this.zodiacSign = ' its gonna be all your fault';
            break;
        case 'Aries':
            this.zodiacSign = ' your a bitch everyday';
            break;
        case 'Taurus':
            this.zodiacSign = ' shit happens';
            break;
        case 'Gemini':
            this.zodiacSign = ' everything is gonna be sad';
            break;
        case 'Cancer':
            this.zodiacSign = ' your overreacting';
            break;        
        case 'Leo':
            this.zodiacSign = ' not a good look';
            break;
        case 'Virgo':
            this.zodiacSign = ' why do you even wanna know';
            break;
        case 'Libra':
            this.zodiacSign = ' no day is your day';
            break;
        case 'Scorpio':
            this.zodiacSign = ' you`re the best everyday!';
            break;
        case 'Sagittarius':
            this.zodiacSign = ' just no';
            break;
        case 'Capricorn':
            this.zodiacSign = ' who even wants to be that zodiac';
            break;
    }
    return `${this.zodiacSign} <br> ~${zodiacs} `
},

};
console.log(zodQuote.guessFortune());

const zodiacBtn = document.getElementsByClassName("zodiacBtn")[0];
zodiacBtn.onclick = function(){
    document.getElementById("zodiacText").innerHTML = `${zodQuote.guessFortune()}`;
    zodiacBtn.style.display = "none";
}

setTimeout(() => {
    document.location.reload();
  }, 5000);
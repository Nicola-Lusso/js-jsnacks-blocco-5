var zucchine = [
  {
    varietà : 'sempre verde',
    peso : 3,
    lunghezza : 12,
  },
  {
    varietà : 'spagnole',
    peso : 7,
    lunghezza : 27,
  },
  {
    varietà : 'massive',
    peso : 15,
    lunghezza : 55,
  },
  {
    varietà : 'piccine',
    peso : 1,
    lunghezza : 4,
  },
  {
    varietà : 'pedro',
    peso : 5,
    lunghezza : 18,
  },
  {
    varietà : 'marce',
    peso : 2,
    lunghezza : 4,
  },
  {
    varietà : 'penelope',
    peso : 2,
    lunghezza : 2,
  },
  {
    varietà : 'alcatraz',
    peso : 18,
    lunghezza : 60,
  },
  {
    varietà : 'santa lucia',
    peso : 4,
    lunghezza : 11,
  },
  {
    varietà : 'supreme',
    peso : 9,
    lunghezza : 9,
  },

];

var zucchineCorte = [];
var zucchineLunghe = [];

for (var i = 0; i < zucchine.length; i++){
  if (zucchine[i].lunghezza <= 15){
    zucchineCorte.push(zucchine[i].lunghezza);
  } else {
    zucchineLunghe.push(zucchine[i].lunghezza);
  }
}

console.log('Zucchine Corte = ' + zucchineCorte);
console.log('Zucchine Lunghe = ' + zucchineLunghe);

var sommaCorte = 0;
var sommaLunghe = 0;

for (var j = 0; j < zucchineCorte.length; j++){
  sommaCorte = sommaCorte + zucchine[j].peso;
}
for (var k = 0; k < zucchineLunghe.length; k++){
  sommaLunghe = sommaLunghe + zucchine[k].peso;
}
console.log('Il peso totale delle zucchine corte è: ' + sommaCorte + ' kg');
console.log('Il peso totale delle zucchine Lunghe è: ' + sommaLunghe + ' kg');

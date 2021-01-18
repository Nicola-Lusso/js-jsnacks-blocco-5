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

var somma = 0;

for (var i = 0; i < zucchine.length; i++){
  somma = somma + zucchine[i].peso;
}
console.log('Il peso totale delle zucchine è: ' + somma + ' kg');

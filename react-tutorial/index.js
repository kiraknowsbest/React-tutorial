// I am supplying dumm data to provide content.

var characters = [
  {
    name: 'Zim',
    image: 'http://pre13.deviantart.net/0a80/th/pre/f/2011/052/4/5/invader_zim_by_invadersponge-d3a3uuo.png',
    details: 'A genius, oblivious to his own capabilities.'
  },
  {
    name: 'Dib',
    image: 'http://vignette4.wikia.nocookie.net/villains/images/3/3f/304px-Dib_rage.png/revision/latest?cb=20130524204322',
    details: 'The only human who sees Zim as a threat.'
  },
  {
    name: 'Gaz',
    image: 'http://vignette1.wikia.nocookie.net/zimwiki/images/8/88/Gaz.png/revision/latest?cb=20121202182910',
    details: "Dib's sister, and the strongest of them all."
  },
  {
    name: 'Gir',
    image: 'http://vignette1.wikia.nocookie.net/zimwiki/images/f/fe/Gir_squint.png/revision/latest?cb=20130616053826',
    details: 'The true star of the show.'
  }
];

var verbs = ['alive', 'happy', 'coding', 'busy', 'lazy', 'silly', 'funny', 'serious', 'clever', 'confident', 'prideful',
'proud', 'smart', 'sleepy', 'awake', 'tired', 'bored', 'excited', 'enthusiastic', 'motivated'];

ReactDOM.render(<App characters={characters} verbs={verbs} />, document.getElementById('app'));
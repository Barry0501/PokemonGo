
var pokeball = require('../images/pokeball.png')
var greatball = require('../images/greatball.png')
var loveball = require('../images/loveball.png')
var ultraball = require('../images/ultraball.png')
var timerball = require('../images/timerball.png')
var diveball = require('../images/diveball.png')
var sportball = require('../images/sportball.png')
var safariball = require('../images/safariball.png')
var quickball = require('../images/quickball.png')

/*var trainer = {
  credits:950,
  items:{
    pokeballs:10,
    greatballs:5,
    ultraballs:0
  }
}*/

var items = [
	{
	  name: "POKEBALL",
	  cost:10,
	  image: pokeball,
	  desc: "The most basic of Pokeballs. The standard Pokeball is the easiest to acquire and cheapest to purchase. Standard Pokeballs are most effective at capturing common Pokemon. "
	},
	{
	  name: "GREAT BALL",
	  cost:40,
	  image: greatball,
	  desc: " A good, high-performance Poké Ball that provides a higher Pokémon catch rate than a standard Poké Ball can."
	},
	{
	  name: "LOVE BALL",
	  cost:30,
	  image: loveball,
	  desc: "A Poké Ball that works best when catching a Pokémon that is of the opposite gender of your Pokémon."
	},
	{
	  name: "SPORT BALL",
	  cost:30,
	  image: sportball,
	  desc: "A special Poké Ball that is used during the Bug-Catching Contest."
	},
	{
	  name: "SAFARI BALL",
	  cost:30,
	  image: safariball,
	  desc: "A special Poké Ball that is used only in the Great Marsh. It is recognizable by the camouflage pattern decorating it."
	},
	{
	  name: "TIMER BALL",
	  cost:30,
	  image: timerball,
	  desc: "A somewhat different Poké Ball that becomes progressively more effective the more turns that are taken in battle."
	},
	{
	  name: "DIVE BALL",
	  cost:35,
	  image: diveball,
	  desc: "A somewhat different Poké Ball that works especially well when catching Pokémon that live underwater."
	},
	{
	  name: "QUICK BALL",
	  cost:35,
	  image: quickball,
	  desc: "A somewhat different Poké Ball that has a more successful catch rate if used at the start of a wild encounter."
	},
	{
	  name: "ULTRA BALL",
	  cost:80,
	  image: ultraball,
	  desc: "An ultra-high-performance Poké Ball that provides a higher success rate for catching Pokémon than a Great Ball."
	}
]

export default items;
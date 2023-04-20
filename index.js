// Remember to import the data and Dog class!'
import Dog from "./Dog.js";
import { dogs } from "./data.js";

/*What do we need to do?
- when button clicked
   - display badge
   - delay change dog
*/
function noMatch() {
	document.getElementById("card").innerHTML = `
   <div><h2>No more matches</h2></div>`;
}

function newMatch(badge) {
	setTimeout(() => {
		badge = !badge;
		if (dogs) {
			hero = new Dog(dogs.shift());
			render();
		} else {
			noMatch();
		}
	}, 500);
}

document.querySelector(".icon-heart").addEventListener("click", () => {
	hero.hasBeenLiked = !hero.hasBeenLiked;
	render();
	// document.querySelector(".like-dislike").style.opacity = "1";
	newMatch(hero.hasBeenLiked);
});
document.querySelector(".icon-cross").addEventListener("click", () => {
	// document.querySelector(".like-dislike").style.opacity = "1";
	hero.hasBeenSwiped = !hero.hasBeenSwiped;
	render();
	newMatch(hero.hasBeenSwiped);
});

function render() {
	document.getElementById("card").innerHTML = hero.cardHTML();
}

let hero = newMatch();
render();

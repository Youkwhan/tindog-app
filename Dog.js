// Create the Dog class here

export default class Dog {
	constructor(data) {
		Object.assign(this, data);
	}

	getBadgeHTML() {
		return this.hasBeenLiked
			? `<img class="like-dislike" src="./images/badge-like.png" alt="badge"></img>`
			: this.hasBeenSwiped
			? `<img class="like-dislike" src="./images/badge-nope.png" alt="badge"></img>`
			: "";
	}

	cardHTML() {
		const { name, avatar, age, bio } = this;
		const badge = this.getBadgeHTML();
		return `
      <img class="hero" src="${avatar}">
		${badge}
		<div class="hero-content">
			<h1 class="hero-title">${name}, ${age}</h1>
			<p class="hero-body">${bio}</p>
					
		</div>
      `;
	}
}

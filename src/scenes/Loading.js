import { Scene } from "../Scene";

export class Loading extends Scene {
	constructor(game) {
		super(game)
		this.nextScene = 'menu'
	}

	render(time) {
		this.game.screen.fill('black')
		super.render(time)
	}
}
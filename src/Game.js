import { Screen } from "./Screen"
import { Loading } from "./scenes/Loading"

export class Game {
	constructor() {
		this.screen = new Screen(500, 500)
		this.scenes = {
			loading: new Loading(this)
		}
		this.currentScene = this.scenes.loading
		this.currentScene.init()
	}

	frame(time) {
		if(!this.currentScene.isActive) {
			this.currentScene = this.scenes[this.currentScene.nextScene]
			this.currentScene.init()
		}
		this.currentScene.render()
		requestAnimationFrame(time => this.frame(time))
	}

	run() {
		requestAnimationFrame(time => this.frame(time))
	}
}
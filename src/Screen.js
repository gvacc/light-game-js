export class Screen {
	constructor(width, height) {
		this.width = width || 500
		this.height = height || 500
		this.canvas = this.createCanvas()
		this.canvas.width = width
		this.canvas.height = height
		this.context = this.canvas.getContext('2d')
	}

	createCanvas() {
		const canvasElements = document.querySelectorAll('canvas')
		if(canvasElements.length > 0) {
			return canvasElements[0]
		}
		const canvas = document.createElement('canvas')
		document.body.appendChild(canvas)
		return canvas
	}

	fill(color) {
		console.log('fill')
		this.context.fillStyle = color
		this.context.fillRect(0,0, this.width, this.height)
	}
}
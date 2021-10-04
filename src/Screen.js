import { ImageLoader } from "./ImageLoader"

export class Screen {
	constructor(width, height) {
		this.width = width || 500
		this.height = height || 500
		this.canvas = this.createCanvas(width, height)
		this.context = this.canvas.getContext('2d')
		this.images = {}
		this.isImagesLoaded = false
	}

	createCanvas(width, height) {
		const canvasElements = document.querySelectorAll('canvas')
		const canvas = canvasElements[0] || document.createElement('canvas')
		canvas.width = width
		canvas.height = height
		document.body.appendChild(canvas)
		return canvas
	}

	loadImages(imageFiles) {
        const loader = new ImageLoader(imageFiles);
		loader.load().then((names) => {
            this.images = Object.assign(this.images, loader.images)
            this.isImagesLoaded = true
        })
    }

	fill(color) {
		console.log('fill')
		this.context.fillStyle = color
		this.context.fillRect(0,0, this.width, this.height)
	}

	print(x, y, text) {
        this.context.fillStyle = "#FFFFFF";
        this.context.font = "22px Georgia";
        this.context.fillText(text, x, y);
    }

	drawImage(x, y, imageName) {
		console.log(this.images[imageName])
        this.context.drawImage(this.images[imageName], x, y);
    }
}
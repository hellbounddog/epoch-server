'use strict';

export const CANVAS_WIDTH = 640;
export const CANVAS_HEIGHT = 480;

let frameId = -1;

export default class Engine {
  constructor(layers = [], opts) {
    this.layers = layers;
    this.fps = opts.fps;
    this.aspectRatio = opts.aspectRatio;
    this.frameSkip = opts.frameSkip;
    this.alpha = opts.alpha;
    this.canvas = opts.canvas;
    this.tick = 0;
  }
  animate(debug) {
    let then = Date.now();
    let elapsed;
    const fpsInterval = 1000 / this.fps;
    let bitmap;
    const canvas = this.canvas;
    const context = canvas.getContext('2d');
    if (this.layers[0].entry && !this.layers[1].entry) {
      this.alpha[0] = 1;
      this.alpha[1] = 0;
    }
    if (!this.layers[0].entry && this.layers[1].entry) {
      this.alpha[0] = 0;
      this.alpha[1] = 1;
    }
    context.imageSmoothingEnabled = false;
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    const image = context.getImageData(0, 0, canvas.width, canvas.height);
    const drawFrame = () => {
      frameId = requestAnimationFrame(drawFrame);
      const now = Date.now();
      elapsed = now - then;
      if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
        for (let i = 0; i < this.layers.length; ++i) {
          if (debug) {
            console.log(canvas.toDataURL());
          }
          bitmap = this.layers[i].overlayFrame(
            image.data,
            this.aspectRatio,
            this.tick,
            this.alpha[i],
            i === 0,
          );
        }
        this.tick += this.frameSkip;
        image.data.set(bitmap);
        context.putImageData(image, 0, 0);
      }
    };
    if (frameId > 0) {
      global.cancelAnimationFrame(frameId);
    }
    drawFrame();
  }
}

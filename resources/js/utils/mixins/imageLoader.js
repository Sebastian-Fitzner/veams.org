/**
 * Represents a imageLoader Mixin.
 * @module ImageLoader
 *
 * @author Sebastian Fitzner
 */
import Helpers from '../../utils/helpers';
import App from '../../app';

var $ = App.$;

"use strict";
/**
 * @alias module:imageLoader
 */
var ImageLoader = {

  /** Initialize function which extends initialize() in our views. */
  initialize: function() {
    this._checkImages();
    this.bindImageLoaderEvents();
  },

  /**
  	 * Bind image loader events
  	 */
  bindImageLoaderEvents: function() {
    this.listenTo(App.Vent, 'resize', this._checkImages.bind(this));
  },

  /**
  	 * Check images in our view
  	 * @param {string} el - element which contains our images
  	 */
  _checkImages: function(el) {
    var imgs = $('img', el);
    var loadedImgs = 0;
    var totalImgs = imgs.length || 0;

    if (totalImgs === 0) {
      this.render()
    } else {
      this._checkImageLoading(imgs, loadedImgs, totalImgs);
    }
  },

  /**
  	 * Check the loading status of our images
  	 * @param {string} imgs - images
  	 * @param {number} loadedImgs - images which are already loaded
  	 * @param {number} totalImgs - image length in our element
  	 */
  _checkImageLoading: function(imgs, loadedImgs, totalImgs) {
    var timeout;
    loadedImgs = 0;

    Helpers.forEach(imgs, (i, el) => {
      if (el.complete) {
        loadedImgs++;
      }
    });

    if (loadedImgs === totalImgs) {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        this.render();
      }, 0);
    } else {
      timeout = setTimeout(() => {
        this._checkImageLoading(imgs, loadedImgs, totalImgs);
      }, 10);
    }
  }
};

export default ImageLoader;

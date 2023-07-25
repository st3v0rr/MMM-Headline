/* MagicMirror²
 * Module: MMM-Headline
 *
 * By Stefan Nachtrab
 * MIT Licensed.
 */
Module.register("MMM-Headline", {
	// Default module config.
	defaults: {
		title: "Breaking News",
		text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
		images: [],
		switchInterval: 5000, //5 seconds default,
		minHeightContainer: "120px"
	},

	start: function () {
		var self = this;

		console.log("Starting module MMM-Headline");

		//Flag for check if module is loaded
		this.loaded = false;

		this.currentImageIndex = 0;
		if (this.config.images.length > 0) {
			this.config.minHeightContainer = "420px";
		}

		if (this.config.images.length > 1) {
			// Schedule update timer for switching Images.
			setInterval(function () {
				self.nextImage();
				self.updateDom();
			}, this.config.switchInterval);
		}

		this.loaded = true;
	},

	nextImage() {
		if (this.config.images.length > 1) {
			this.currentImageIndex++;
			if (this.currentImageIndex === this.config.images.length) {
				this.currentImageIndex = 0;
			}
		}
	},

	getTemplate: function () {
		return "MMM-Headline.njk";
	},

	getTemplateData: function () {
		return {
			config: this.config,
			showImages: this.config.images.length > 0,
			image: this.config.images[this.currentImageIndex]
		};
	},

	getStyles: function () {
		return ["MMM-Headline.css"];
	}
});

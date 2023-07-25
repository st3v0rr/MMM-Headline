# MMM-ModuleTemplate

This is a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/).

A Module for MagicMirror2 designed to ... .

- show static content including some images rotated in a slideshow

Best display results in the following areas:
- top_bar
- bottom_bar
- upper_third
- middle_center
- lower_third

## Installation
Go to your MagicMirror folder.
```bash
cd modules
git clone https://github.com/st3v0rr/MMM-Headline.git
```

## Using the module

To use this module, add the following configuration block to the modules array in the `config/config.js` file:

```js
var config = {
    modules: [
        {
            module: 'MMM-Headline',
            position: 'top_bar',
            config: {
              title: "Lorem ipsum",
              text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
              images: [
                  "https://placekitten.com/400/400",
                  "https://placekitten.com/400/300"
              ]
            }
        },
    ]
}
```

## Configuration options

| Option   | Description
|----------|-----------
| `title`  | *Required* Title of the headline
| `text`   | *Required* Additional text to display
| `images` | *Optional* Array of one or more image links. If one image is configured it will be shown always. If there is more than one image configured a slideshow will be started that rotates through all images.
| `switchInterval` | *Optional* Configures the duration of the slideshow rotation. Default is five seconds.
| `minHeightContainer` | *Optional* Configures the minimum height of the module (maybe needed if you have to deal with strange and/or different image sizes)

## Samples
![alt text](https://github.com/st3v0rr/MMM-Headline/raw/main/docs/example.png "Example")

![alt text](https://github.com/st3v0rr/MMM-Headline/raw/main/docs/example_with_image.png "Example with image")

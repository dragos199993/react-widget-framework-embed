## React embedded widget framework

Based on the `create react app`, modified webpack configuration to output react application as an embeddable widget.<br>
Including the script and css files in any project will initialize a react application with all dependencies included. <br>
This can scale on having own `router system`, `state management` system and `own style` that will not have conflicts with the hosting page. 


Preview widget with:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn build`

Builds the widget.js and widget.css into build folder. <br>
Open `demo.html` (local server) to view the embedded widget.
<br>
<br>
<br>

### API

#### Iniitalize:

To initialize the widget, add the provided css and js into the `head` of the website.
After that, a object called `ReactWidget` will be available on the window.

Initialize with: `ReactWidget.default.new({ selector: '.react-widget-container' }).render();`

If there is no selector available with the class given, the widget will create a one.

#### Destroy:
A widget can be destroyed at any time with: <br>
`ReactWidget.default.unmount({ selector: '.react-widget-container' })` <br>
This will unmount the React instance and also delete the html element that was hosting the widget.

##### Work in progress! 
## Roadmap
- [x] widget preview on localhost
- [x] css module (unique class) 
- [ ] create few examples of what can be created
- [ ] add a state management system
- [ ] add routing system
- [ ] link to a backend, using an API key to have a unique identifier

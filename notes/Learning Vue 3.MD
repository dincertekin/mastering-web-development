Vue.js is a framework for Front-end JavaScript usage. Like React or Svelte.
First of all, we can use CDN service for implementing Vue to our code.

For example:
```html
<script src="https://unpkg.com/vue@3"></script>
<body>
	<div id="app">
		{{ greeting }} ( Length: {{ greeting.length }} )
	</div>
	<script>
		Vue.createApp({
			data() {
				return {
					greeting: 'Hello World!'
				};
			}
		}).mount('#app');
	</script>
</body>
```
### What does **mount** do here?
Mounting is the process of adding a Vue.js component to the DOM (Document Object Model) for the first time. When a component is mounted, Vue.js creates an instance of the component and inserts it into the specified HTML element.

### v-model usage
```html
<input type="text" v-model="greeting">
```
On this example Vue automatically updates our **greeting** variable when input text changes.

### mounted() function
Using mounted function for hook an event when component mounts into DOM.
```js
Vue.createApp({
	data() {
		return {
			greeting: 'Hello World' 
		};
	},

	mounted() {
		setTimeout(() => {
			this.greeting = 'Changed';
		}, 3*1000);
	}
}).mount('#app');
```

### v-bind usage
We are using v-bind for binding something to variable change.
For example, when buttonClasses variable changes bind it to button element.
```html
<button v-bind:class="buttonClasses">Click Me!</button>
<script>
Vue.createApp({
	data() {
		return {
			buttonClasses: 'text-primary' 
		};
	},
}).mount('#app');
</script>
```
We can use only colon(:) as a shortcut like this:
```html
<button :class="buttonClasses">Click Me!</button>
```
It does the same thing above.

### v-on: usage
We can handle events using ***v-on:eventName***, for example:
```html
<button v-on:click="toggleButton">Click Me!</button>
```
It triggers the toggleButton() method. Also we can use at(@) character for shortcut.
```html
<button @click="toggleButton">Click Me!</button>
```

### v-for usage


And develop a project with this knowledge!
I took these notes when watching [this course](https://www.youtube.com/watch?v=1JCJExQy1no&list=PL3VM-unCzF8jX-GoazLPcbi7M0wJux8F-&index=3)! And all notes are written by me (:

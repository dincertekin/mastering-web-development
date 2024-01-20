Vue.js is a framework for Front-end Javascript usage. Like React or Svelte.
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
<script src="https://unpkg.com/vue@3"></script>
<body>
	<div id="app">
		<input type="text" v-model="greeting">
		{{ greeting }} ( Length: {{ greeting.length }} )
	</div>
	<script>
		Vue.createApp({
			data() {
				return {
					greeting: "Whats'up ?"
				};
			}
		}).mount('#app');
	</script>
</body>
```
On this example Vue automatically updates our **greeting** variable when input text changes.

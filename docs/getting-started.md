# Starter Guide

Install `vue-animated-card` 
using npm:
```bash
npm install vue-animated-card
```
using yarn:
```bash
yarn add vue-animated-card
```

## Usage

Import the component into your view file and register is globally

```js
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app
    .component("vue-animated-card", vueCard)
    .mount("#app");
```
or import it locally into your vue component

```js
import vueCard from "vue-animated-card";
```
and add to your components in the script tag
```js
<script>
  
  import vueCard from './components/vueCard.vue'
  export default {
    name: 'App',

    components: {
      vueCard,
    },
</script>
```
Add the component to the vue template
```vue
<vueCard 
    :name=name 
    :text=description 
    :image=image
    :linktext=linktxt
/>
```

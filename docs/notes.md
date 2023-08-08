# Things to note

1. Component sizes cannot be edited directly.

To scale the size, put the component in a `div` tag and set the `transform` property to `scale(value)`. `value` is by how much it should be scaled.

*Example:*

```vue
<div style="transform: scale(0.5);">
  <vueCard 
    :name=name
    :text=description
    :image=image
    :link=link
    :linktext=linktxt
    :isButton="true"
    :action=action
  />
</div>
```
This scales the card to half its default dimensions (`width: 350px` and `height: 300px`).


2. Colors can only be modified by using the props: (`bgColor`, `mainColor` and `txtColor`)

3. When specifying the `image` prop, if a **PATH** is specified, be sure to wrap it in the `require` property so it can be bound properly to the `src` of the `img` tag.

*Example:*

```vue
<vueCard 
  :name=name
  :text=description
  :image=image
/>

<script>
  
  import vueCard from './components/vueCard.vue'
  export default {
    name: 'App',

    components: {
      vueCard,
    },
    data(){
      return {
        name: 'Jimmy',
        description: 'Lorem ipsum dolor sit, amet!',
        image: require('./assets/images/img.jpg'),
      }
    },
    
  }
</script>
```

[Back to home](/)
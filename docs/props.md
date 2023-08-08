# Props

| Name       | Type       | Default   | Description |
|------------|------------|-----------|-------------|
|    name    |  `String`  |     -     | String that represents the name or title of the card item. It is used to display the name prominently on the card, providing a clear and concise identifier for the item.            |
|    text    |  `String`  |     -     | String that provides a description or additional information about the card. It allows you to include a brief summary, details, or any relevant text content associated with the card. This prop is useful for providing context or elaborating on the purpose or features of the card item.            |
|  txtColor  |  `String`  |   `#333`  | Determines the color of the `text` displayed within the card.            |
|  linktext  |  `String`  |     -     | String that represents the text displayed by either a `button` or an anchor (`a`) tag within the card.             |
|    image   |  `String`  |     -     | The source (`src`) of the image displayed on the card. It allows you to specify the URL or file path of the image to be shown.            |
|    link    |  `String`  |     -     | The `href` (hyperlink reference) of the anchor (`a`) tag within the card. It allows you to specify the destination URL or path that the anchor tag should navigate to when clicked.             |
|  mainColor |  `String`  |   `#000`  | Used to define the color of the `text`, `buttons`, or links within the card.|
|   bgColor  |  `String`  |   `#fff`  | Color of the main card body|
|  isButton  |  `Boolean` |  `false`  | A boolean value that determines whether the card should contain a `button` or a link (`a`). When set to true, a button element will be displayed within the card. When set to false, an anchor tag will be used instead. This prop provides flexibility in choosing the appropriate interactive element based on your specific use case, allowing you to seamlessly integrate buttons or links within the card component.            |
|   action   | `Function` |     -     | Function that is called when the card contains a button and the button is clicked.|



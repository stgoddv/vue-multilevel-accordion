# Multilevel Accordion Component for Vue 2.5+

> An extremely customizable multi level accordion. It's receives a high level tree structure in json format.

# Table of Contents

1. [Motivation](#motivation)
2. [Installation](#installation)
3. [Options](#options)
4. [Demo](#demo)
5. [Contribution](#contribution)
6. [License](#license)

### Motivation

- Although there are some accordion plugins, there aren't so many that offers a nested structure of any number of levels.
- Existing accordions are usually hard to customize because they come with their own styling configuration.

The above reasons led me to build an extremely customizable recursive accordion.

### Installation

1. First install package by npm.

> npm i vue-multilevel-accordion

2. Import the component and register it where you want to use it.

```html
<script>
  import MultilevelAccordion from "vue-multilevel-accordion";
  import tree from "./tree.js";

  export default {
    components: {
      MultilevelAccordion
    },
    data() {
      return {
        tree
      };
    }
  };
</script>
```

3. Create the tree structure and save it on a file (in this case it's called _tree.js_). The first level (root level) it's not going to be rendered but is required by the component.

```js
const tree = {
  text: "Root",
  leaf: false,
  children: [
    {
      text: "Musicians",
      leaf: false,
      children: [
        {
          text: "IDM",
          leaf: false,
          children: [
            {
              text: "Ae",
              leaf: true
            },
            {
              text: "BOC",
              leaf: true
            }
          ]
        },
        {
          text: "Post Rock",
          leaf: false,
          children: [
            {
              text: "Tortoise",
              leaf: true
            }
          ]
        }
      ]
    }
  ]
};

export { tree };
```

4. Define the recursive template that is going to be in every tab. You've to use _slot-scope_ and destructurate **{ tree }** property. For more options see the [Options](#options) section.

For example, this is going to show text field defined previously in every tab. Also, when the user clicks on the tab, the method _select(value)_ will be called.

```html
<template slot-scope="{ tree }">
  <div @click="select(tree.text)" style="padding: 10px;">
    <p>{{ tree.text }}</p>
  </div>
</template>
```

5. Place the component with the slot wherever you want. You've to pass the component the tree structure and optionally a margin on the left that it's going to growth with every level of depth. For more options see the [Options](#options) section.

```html
<multilevel-accordion :tree="tree" :marginLeft="2">
  <template slot-scope="{ tree }">
    <div @click="select(tree.text)">
      <p>{{ tree.text }}</p>
    </div>
  </template>
</multilevel-accordion>
```

6. You can see the result!

![Example 1](https://github.com/stgoddv/vue-multilevel-accordion/blob/develop/static/music-example.gif?raw=true)

### Options

### Demo

a) Simple Accordion

b) Nested Menu

### Contribution

### License

![Example 1](https://github.com/stgoddv/vue-multilevel-accordion/blob/develop/static/example1.gif?raw=true)

![Example 2](https://github.com/stgoddv/vue-multilevel-accordion/blob/develop/static/example2.gif?raw=true)

![Example 3](https://github.com/stgoddv/vue-multilevel-accordion/blob/develop/static/example3.gif?raw=true)

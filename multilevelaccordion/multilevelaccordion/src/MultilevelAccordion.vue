<template>
  <div class="accordion-root">
    <ul class="list-root">
      <multilevel-accordion-children
        v-for="(child, index) in tree.children"
        :key="index"
        :tree="child"
        :position="index"
        :interleaveOffset="1"
        :reference="`${index}`"
        :level="0"
        :marginLeft="marginLeft"
      >
        <template slot-scope="_">
          <slot
            :tree="_.tree"
            :interleaved="_.interleaved"
            :expanded="_.expanded"
            :level="_.level"
          ></slot>
        </template>
      </multilevel-accordion-children>
    </ul>
  </div>
</template>

<script>
import MultilevelAccordionChildren from "src/MultilevelAccordionChildren";

export default {
  props: {
    tree: {
      type: Object
    },
    marginLeft: {
      type: Number,
      default: 0
    }
  },
  components: {
    MultilevelAccordionChildren
  }
};
</script>

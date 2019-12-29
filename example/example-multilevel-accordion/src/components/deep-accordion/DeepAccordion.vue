<template>
  <div class="accordion-root">
    <ul class="list-root">
      <deep-accordion-children
        v-for="(child, index) in data.children"
        :key="index"
        :data="child"
        :position="index"
        :interleaveOffset="1"
        :reference="`${index}`"
      >
        <template slot-scope="_">
          <slot
            :data="_.data"
            :interleaved="_.interleaved"
          ></slot>
        </template>
      </deep-accordion-children>
    </ul>
  </div>
</template>

<script>
import DeepAccordionChildren from "./DeepAccordionChildren";

export default {
  props: ["data"],
  components: {
    DeepAccordionChildren
  }
};
</script>

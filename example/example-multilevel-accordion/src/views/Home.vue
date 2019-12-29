<template>
  <div class="home container mx-auto">

    <div class="my-8">
      <p class="text-xl">Multi Level Accordion</p>
      <p class="mt-3 text-sm">Selected Item: {{ selectedItem || 'ninguno' }}</p>
    </div>

    <deep-accordion
      :tree="tree"
      :marginLeft="2"
      class="max-w-md mx-auto select-none"
    >
      <template slot-scope="{ tree, interleaved, expanded }">
        <div
          class="mb-3 p-3 border rounded-lg shadow cursor-pointer hover:shadow-md hover:bg-green-300"
          style="transition: box-shadow, background-color, transform 0.2s ease-out;"
          :class="{ 'bg-green-100':interleaved, 
          'bg-green-200':!interleaved, 
          'hover:text-blue-600 move-right':tree.leaf }"
          @click="select(tree.text, tree.leaf)"
        >
          <p><span v-if="!tree.leaf">{{ expanded ? '&#8681;' : '&#8680;' }} | </span> {{ tree.text }}</p>
        </div>
      </template>
    </deep-accordion>

    <div class="py-5"></div>

    <deep-accordion
      :tree="tree"
      class="max-w-md mx-auto select-none"
    >
      <template slot-scope="{ tree, interleaved, expanded, level }">
        <div
          class="mb-3 p-3 border rounded-lg shadow cursor-pointer hover:shadow-md hover:bg-green-300"
          style="transition: box-shadow, background-color, transform 0.2s ease-out;"
          :style="`margin-left: ${2*level}rem;`"
          :class="{ 'bg-green-100':interleaved, 
          'bg-green-200':!interleaved, 
          'hover:text-blue-600 move-right':tree.leaf }"
          @click="select(tree.text, tree.leaf)"
        >
          <p><span v-if="!tree.leaf">{{ expanded ? '&#8681;' : '&#8680;' }} | </span> {{ tree.text }}</p>
        </div>
      </template>
    </deep-accordion>

    <div class="py-8"></div>

  </div>
</template>

<script>
import DeepAccordion from "@/components/deep-accordion/DeepAccordion";

import { tree } from "./dummydata";

export default {
  name: "home",
  components: {
    DeepAccordion
  },
  data() {
    return {
      selectedItem: null,
      tree
    };
  },
  methods: {
    select(text, leaf) {
      if (leaf) this.selectedItem = text;
    }
  }
};
</script>

<style scoped>
.move-right:hover {
  transform: translateX(10px);
}
</style>
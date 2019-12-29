<template>
  <div class="home container mx-auto">
    <p class="my-8 text-xl">Ejemplo de Componente</p>
    <deep-accordion
      :data="tree"
      class="max-w-md mx-auto"
    >
      <template slot-scope="{ data, interleaved }">
        <div
          class="mb-3 p-3 border rounded-lg shadow cursor-pointer hover:shadow-md hover:bg-green-300"
          style="transition: box-shadow, background-color 0.2s ease-out;"
          :class="{ 'bg-green-100':interleaved, 'bg-green-200':!interleaved }"
        >
          <div class="">
            <p class="">{{ data.text }}</p>
          </div>
        </div>
      </template>
    </deep-accordion>

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
      tree
    };
  }
};
</script>

<template>
  <div class="home">
    <h1>Ejemplo Componente</h1>

    <deep-accordion :data="tree">
      <template slot-scope="{ data }">
        <div>
          <div>
            <p>{{ data.text }}</p>
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

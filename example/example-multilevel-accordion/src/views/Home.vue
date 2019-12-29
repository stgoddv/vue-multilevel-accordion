<template>
  <div class="home">
    <h1>Ejemplo Componente</h1>

    <!-- Subjects List -->
    <div class="subject-list scrolling-touch overflow-y-auto overflow-x-hidden">
      <div class="mt-3">
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
    </div>
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

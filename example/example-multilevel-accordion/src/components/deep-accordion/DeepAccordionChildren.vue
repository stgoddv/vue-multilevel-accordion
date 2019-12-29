<template>
  <div class="accordion-children">
    <li>
      <!-- Upper Tab -->
      <div
        class="accordion"
        @click="togglePanel()"
      >
        <slot
          :data="data"
          :interleaved="interleaved"
        ></slot>
      </div>

      <!-- Expandible Elements -->
      <div
        class="panel expandible panel-transition"
        :ref="`panel-${reference}`"
        v-if="!data.leaf"
        :style="panelStyle"
      >
        <ul style="margin-left: 2rem;">
          <deep-accordion-children
            v-for="(child, index) in data.children"
            :key="index"
            :data="child"
            :reference="`${reference}-${index}`"
            :ref="`childs-${reference}`"
            :position="index"
            :interleaveOffset="interleaveOffset + position + 1"
            @updateHeight="updateHeight"
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
    </li>
  </div>
</template>

<script>
import DeepAccordionChildren from "./DeepAccordionChildren";

export default {
  name: "deep-accordion-children",
  props: ["data", "reference", "interleaveOffset", "position"],
  components: {
    DeepAccordionChildren
  },
  data() {
    return {
      panelStyle: "",
      interleaved: ((this.interleaveOffset % 2) + this.position) % 2 == 0,
      expanded: false
    };
  },
  methods: {
    togglePanel() {
      if (!this.expanded) {
        this.expand();
      } else {
        this.shrink();
      }
    },
    expand() {
      if (this.data.leaf) return null;
      if (!this.expanded) {
        let el = this.$refs[`panel-${this.reference}`];
        this.panelStyle = `max-height: ${el.scrollHeight}px;`;
        this.expanded = true;
        // Inform to the parent the new height so it can re calculate its scroll height
        this.$emit("updateHeight", el.scrollHeight);
      }
    },
    shrink() {
      if (this.data.leaf) return null;
      this.panelStyle = "max-height: 0px;";
      this.expanded = false;
    },
    updateHeight(childrenHeight) {
      // Recalculate scroll height based on childrens height modification
      if (this.expanded) {
        let el = this.$refs[`panel-${this.reference}`];
        this.panelStyle = `max-height: ${el.scrollHeight + childrenHeight}px;`;
        this.$emit("updateHeight", el.scrollHeight + childrenHeight);
      }
    }
  }
};
</script>

<style scoped>
.accordion {
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
}

.panel {
  max-height: 0;
  overflow: hidden;
}

.panel-transition {
  transition: max-height 0.2s ease-out;
}
</style>

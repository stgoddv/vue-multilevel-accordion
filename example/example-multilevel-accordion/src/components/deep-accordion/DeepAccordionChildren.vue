<template>
  <div class="accordion-children">
    <li v-show="show">

      <!-- Upper Tab -->
      <div
        class="accordion"
        @click="reckonExpand()"
      >
        <slot
          :data="data"
          :interleaved="interleaved"
        ></slot>
      </div>

      <!-- Expandible Elements -->
      <div
        class="panel expandible"
        :class="{ 'panel-transition' : !searching}"
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
            :searching="searching"
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
import { EventBus } from "./event-bus";

export default {
  name: "deep-accordion-children",
  props: ["data", "reference", "interleaveOffset", "position", "searching"],
  components: {
    DeepAccordionChildren
  },
  data() {
    return {
      panelStyle: "",
      interleaved: ((this.interleaveOffset % 2) + this.position) % 2 == 0,
      show: true
    };
  },
  methods: {
    searchSignal(matchTerm) {
      // Initially hide and shrink all
      this.shrink();
      this.show = false;
      // Iterate through childrens
      if (this.$refs[`childs-${this.reference}`]) {
        this.$refs[`childs-${this.reference}`].forEach(element => {
          element.searchSignal(matchTerm);
        });
      }
      // Check for match and signal up and downstream
      if (this.textMatch(matchTerm)) {
        this.showUpstream(matchTerm);
        this.showDownstream();
      }
    },
    textMatch(value) {
      let normalized = this.data.text.toString().toLowerCase();
      return normalized.indexOf(value.toLowerCase()) != -1;
    },
    showUpstream(matchTerm) {
      // show = true means node already taken into account so stop bubbling
      if (!this.show) {
        this.show = true;
        // Send node to stack in root component
        if (matchTerm !== "" && this.$parent.expand) {
          EventBus.$emit("add-stack", this.$parent.expand);
        }
        // Bubble the signal upstream
        if (this.$parent.showUpstream) this.$parent.showUpstream(matchTerm);
      }
    },
    showDownstream() {
      this.show = true;
      if (this.$refs[`childs-${this.reference}`]) {
        this.$refs[`childs-${this.reference}`].forEach(element => {
          element.showDownstream();
        });
      }
    },
    reckonExpand() {
      if (!this.data.expanded) {
        this.expand();
      } else {
        this.shrink();
      }
    },
    expand() {
      if (this.data.leaf) return null;
      if (!this.data.expanded) {
        let el = this.$refs[`panel-${this.reference}`];
        this.panelStyle = `max-height: ${el.scrollHeight}px;`;
        this.data.expanded = true;
        // Inform to the parent the new height so it can re calculate its scroll height
        this.$emit("updateHeight", el.scrollHeight);
      }
    },
    shrink() {
      if (this.data.leaf) return null;
      this.panelStyle = "max-height: 0px;";
      this.data.expanded = false;
    },
    updateHeight(childrenHeight) {
      // Recalculate scroll height based on childrens height modification
      if (this.data.expanded) {
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
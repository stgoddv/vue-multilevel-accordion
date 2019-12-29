<template>
  <div class="accordion-root">
    <ul class="list-root">
      <deep-accordion-children
        v-for="(child, index) in data.children"
        :key="index"
        :data="child"
        :position="index"
        :interleaveOffset="0"
        :reference="`${index}`"
        ref="accordion-root"
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
</template>

<script>
import { EventBus } from "./event-bus";
import DeepAccordionChildren from "./DeepAccordionChildren";

export default {
  props: ["data", "searchTerm"],
  components: {
    DeepAccordionChildren
  },
  data() {
    return {
      searchDebounce: null,
      searching: false,
      stack: []
    };
  },
  created() {
    EventBus.$on("add-stack", expandMethodRef => {
      if (this.stack.indexOf(expandMethodRef) == -1) {
        this.stack.push(expandMethodRef);
      }
    });
  },
  watch: {
    searchTerm: function(value) {
      // This is fired every time search input changes
      if (this.searchDebounce) clearTimeout(this.searchDebounce);
      this.searchDebounce = setTimeout(() => {
        this.search(value);
      }, 250);
    }
  },
  methods: {
    expandPanels(stack, _context) {
      // The timeouts are required to wait for DOM updates
      if (!stack.length) {
        setTimeout(() => {
          _context.searching = false;
        }, 50);
      } else {
        setTimeout(() => {
          stack.pop()();
          _context.expandPanels(stack, _context);
        }, 50);
      }
    },
    search(matchTerm) {
      if (this.$refs["accordion-root"]) {
        this.stack = [];
        this.$refs["accordion-root"].forEach(element => {
          element.searchSignal(matchTerm);
        });
        this.searching = true;
        this.expandPanels(this.stack, this);
      }
    }
  }
};
</script>

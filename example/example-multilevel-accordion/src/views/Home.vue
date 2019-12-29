<template>
  <div class="home container mx-auto">
    <p class="text-3xl my-8">Multi Level Accordion</p>

    <div class="py-3"></div>

    <div class="flex flex-wrap border">
      <div
        class="w-full md:w-7/12"
        style="background-color: #f5f2f0;"
      >
        <pre style="margin: 0px !important;">
          <code class="language-markup" v-pre>
  &lt;template slot-scope="{ tree, interleaved, expanded }">
    &lt;div
      class="mb-3 p-3 border rounded-lg shadow cursor-pointer 
        hover:shadow-md hover:bg-green-300"
      style="transition: box-shadow 0.2s ease-out, background-color 0.2s ease-out, transform 0.2s ease-out;"
      :class="{ 'bg-green-100':interleaved, 
                'bg-green-200':!interleaved, 
                'hover:text-blue-600 move-right':tree.leaf }"
      @click="select(tree.text, tree.leaf)"
    >
      &lt;p>&lt;span v-if="!tree.leaf">{{ expanded ? '&#8681;' : '&#8680;' }} | &lt;/span>
        {{ tree.text }}&lt;/p>
    &lt;/div>
  &lt;/template>
          </code>
        </pre>
      </div>
      <div
        class="w-full md:w-5/12"
        style="min-height: 50vh;"
      >
        <p
          class="py-3 text-sm"
          style="background-color: #f5f2f0;"
        >
          Selected Item: {{ selectedItem || "None" }}
        </p>
        <multilevel-accordion
          :tree="tree"
          :marginLeft="2"
          class="max-w-md mx-auto pt-8 px-5 select-none"
        >
          <template slot-scope="{ tree, interleaved, expanded }">
            <div
              class="mb-3 p-3 border rounded-lg shadow cursor-pointer 
                hover:shadow-md hover:bg-green-300"
              style="transition: box-shadow 0.2s ease-out, background-color 0.2s ease-out, transform 0.2s ease-out;"
              :class="{
                'bg-green-100': interleaved,
                'bg-green-200': !interleaved,
                'hover:text-blue-600 move-right': tree.leaf
              }"
              @click="select(tree.text, tree.leaf)"
            >
              <p>
                <span v-if="!tree.leaf">{{ expanded ? "&#8681;" : "&#8680;" }} |
                </span>
                {{ tree.text }}
              </p>
            </div>
          </template>
        </multilevel-accordion>
      </div>
    </div>

    <div class="py-3"></div>

    <div class="flex flex-wrap border">
      <div
        class="w-full md:w-7/12"
        style="background-color: #f5f2f0;"
      >
        <pre style="margin: 0px !important;">
          <code class="language-markup" v-pre>
  &lt;template slot-scope="{ tree, level, expanded }">
    &lt;div
      :class="`relative mb-3 p-1 border 
    rounded-full shadow cursor-pointer 
    hover:shadow-lg bg-pink-${(2 - level)*2 + 1}00
    ${ level === 0 ? 'text-white' : '' }
    ${ tree.leaf ? 'hover:bg-indigo-800 hover:text-white' : '' }`"
      style="transition: box-shadow 0.5s, background-color 0.5s, color 0.5s;"
      @click="select(tree.text, tree.leaf)"
    >
      &lt;p class="text-center">{{ tree.text }}&lt;/p>
      &lt;p
        v-if="!tree.leaf"
        class="absolute font-bold text-xl"
        style="top: 0.05rem; left: 1rem;"
      >{{ expanded ? '&#8722;' : '&#43;' }}&lt;/p>

    &lt;/div>
  &lt;/template>
          </code>
        </pre>
      </div>
      <div
        class="w-full md:w-5/12"
        style="min-height: 50vh;"
      >
        <p
          class="py-3 text-sm"
          style="background-color: #f5f2f0;"
        >
          Selected Item: {{ selectedItem || "None" }}
        </p>
        <multilevel-accordion
          :tree="tree"
          class="max-w-xs mx-auto pt-8 px-5 select-none"
        >
          <template slot-scope="{ tree, level, expanded }">
            <div
              :class="
                `relative mb-3 p-1 border 
            rounded-full shadow cursor-pointer 
            hover:shadow-lg bg-pink-${(2 - level) * 2 + 1}00
            ${level === 0 ? 'text-white' : ''}
            ${tree.leaf ? 'hover:bg-indigo-800 hover:text-white' : ''}`
              "
              style="transition: box-shadow 0.5s, background-color 0.5s, color 0.5s;"
              @click="select(tree.text, tree.leaf)"
            >
              <p class="text-center">{{ tree.text }}</p>
              <p
                v-if="!tree.leaf"
                class="absolute font-bold text-xl"
                style="top: 0.05rem; left: 1rem;"
              >
                {{ expanded ? "&#8722;" : "&#43;" }}
              </p>
            </div>
          </template>
        </multilevel-accordion>
      </div>
    </div>

    <div class="py-3"></div>

    <div class="flex flex-wrap border">
      <div
        class="w-full md:w-7/12"
        style="background-color: #f5f2f0;"
      >
        <pre style="margin: 0px !important;">
          <code class="language-markup" v-pre>
  &lt;template slot-scope="{ tree }">
    &lt;div
      class="px-2 mb-3 text-xl cursor-pointer hover:text-orange-500"
      style="transition: color 0.3s;"
      @click="select(tree.text, tree.leaf)"
    >
      &lt;p>&lt;span v-if="!tree.leaf">&#8280;&lt;/span> {{ tree.text }}&lt;/p>
    &lt;/div>
  &lt;/template>
          </code>
        </pre>
      </div>
      <div
        class="w-full md:w-5/12"
        style="min-height: 50vh;"
      >
        <p
          class="py-3 text-sm"
          style="background-color: #f5f2f0;"
        >
          Selected Item: {{ selectedItem || "None" }}
        </p>
        <multilevel-accordion
          :tree="tree"
          :marginLeft="2"
          class="pt-5 pl-8 px-5 select-none"
        >
          <template slot-scope="{ tree }">
            <div
              class="px-2 mb-3 text-xl cursor-pointer hover:text-orange-500"
              style="transition: color 0.3s;"
              @click="select(tree.text, tree.leaf)"
            >
              <p><span v-if="!tree.leaf">&#8280;</span> {{ tree.text }}</p>
            </div>
          </template>
        </multilevel-accordion>
      </div>
    </div>

    <div class="py-8"></div>
  </div>
</template>

<script>
import MultilevelAccordion from "vue-multilevel-accordion";

import { tree } from "./dummydata";

export default {
  name: "home",
  components: {
    MultilevelAccordion
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

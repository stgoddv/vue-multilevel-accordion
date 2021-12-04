<template>
    <div dir="rtl">
        <multilevel-accordion :tree="tree" :margin-right="5" rtl>
            <template slot-scope="{ tree }">
                <div>
                    <p>{{ tree.text }}</p>
                </div>
            </template>
        </multilevel-accordion>
    </div>
</template>

<script>
    import MultilevelAccordion from "./MultilevelAccordion";

    export default {
        name: "App",
        components: {
            MultilevelAccordion,
        },
        data() {
            return {
                tree: {
                    text: "Root",
                    children: [
                        {
                            text: "الحاسب الآلي",
                            children: [
                                {
                                    text: "حاسوب محمول",
                                    children: [
                                        {
                                            text: "مخصص للألعاب"
                                        },
                                        {
                                            text: "2 في 1"
                                        }
                                    ]
                                },
                                {
                                    text: "المكتبي",
                                    children: [
                                        {
                                            text: "Alienware"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>
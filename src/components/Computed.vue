<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <div>
                    <h5>
                        Below is an example showcasing Vue.js computed properties, demonstrating their caching behavior dependent on reactive dependencies. Thus, despite incorporating randomness within computed properties, the values remain consistent, reflecting changes only when their dependencies alter.
                    </h5>
                </div>
                <div v-for="n in 10" :key="n">
                    {{ n }}). {{ random }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        
    },
    data() {
        return {
            max: 10
        }
    },
    computed: {
        random() {
            return Math.floor(Math.random() * this.max);
        }
    }
}
</script>
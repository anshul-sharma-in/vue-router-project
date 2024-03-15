<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <div>
                    <h5>
                        Below is an example illustrating the usage of a Vue.js method. While the method will execute each time it's called, it won't cache its result like a computed property. Therefore, even if the dependencies haven't changed, invoking the method would recalculate its value, potentially yielding varying results.
                    </h5>
                </div>
                <div v-for="n in 10" :key="n">
                    {{ n }}). {{ random() }}
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
    methods: {
        random() {
            return Math.floor(Math.random() * this.max);
        }
    }
}
</script>
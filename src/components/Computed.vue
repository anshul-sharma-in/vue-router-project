<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
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
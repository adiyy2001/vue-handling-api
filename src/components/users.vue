<template>
  
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'users',
    data() {
        return {
            isLoading: false
        }
    },
    computed: {
        ...mapGetters('Users', ['getUsers'])
    },
    methods: {
        ...mapActions('Users', ['fetchUsers'])
    },
    async mounted() {
        // Make network request if the data is empty
        if ( this.getUsers.length === 0 ) {
            // set loading screen
            this.isLoading = true;
            await this.fetchUsers();
            this.isLoading = false;
        }
    }
}
</script>

<style>

</style>
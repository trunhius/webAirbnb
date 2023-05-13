<template>
  <div class="row">

<!-- Listing Item -->
<div class="col-lg-12 col-md-12" 
v-for="(room, index) in roomByUser" 
:key="index">
<room-item :room="room"></room-item>
</div>
<!-- Listing Item / End -->

<div class="col-md-12 browse-all-user-listings">
    <a href="#">Browse All Listings <i class="fa fa-angle-right"></i> </a>
</div>

</div>
</template>

<script>
import RoomItem from "./RoomItem.vue"
import { computed } from 'vue';
import { useStore } from 'vuex'
export default {
    components:{RoomItem},
    setup(){
        const store = useStore(); 
        const roomByUser = computed(()=>store.state.ticket.roomsByUser)
        return{
            roomByUser,
        }
    }

}
</script>

<style>

</style>
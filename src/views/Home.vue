<template>
    <div class="container-fluid my-5">
        <div class="row">
            <div class="col-md-6">
                <div class="card p-3">
                    <StaffOpenTicketsCard :tickets="tickets" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
'use strict';

import { Component, Vue, Watch } from 'vue-property-decorator';
import { ticketService } from '@/services';
import { IStaffOpenTicketsResponse, IStaffOpenTicketsList } from '@/interfaces';
import StaffOpenTicketsCard from '@/components/StaffOpenTicketsCard.vue';


@Component({
    components: {
        StaffOpenTicketsCard
    },
})
export default class Home extends Vue {
    
    /*
        =======
        METHODS
        =======
    */
    loadStaffOpenTickets(groupNumber: number): void{
        ticketService.getStaffOpenTickets(groupNumber)
            .then((res: IStaffOpenTicketsResponse) => {
                this.$store.commit('setStaffOpenTickets', res.data || []);
            })
    }


    /*
        =======
        GETTERS
        =======
    */
    get tickets(): IStaffOpenTicketsList[]{
        return this.$store.state.staffOpenTickets;
    }

    get staffGroupNumber(): number{
        return this.$store.getters.staffGroupNumber;
    }


    /*
        ========
        WATCHERS
        ========
    */
    @Watch('staffGroupNumber')
        onStaffGroupNumberChange(val: number, oldVal: number): void{
            this.loadStaffOpenTickets(val);
        }

    
    /*
        ===============
        LIFECYCLE HOOKS
        ===============
    */
    created(){
        this.loadStaffOpenTickets(this.staffGroupNumber);
    }
}
</script>

<template>
    <div class="card py-3 w-100">
        <div v-if="tickets.length">
            <table class="table table-sm table-bordered table-striped">
                <thead>
                    <tr class="no-wrap">
                        <th>ID</th>
                        <th>Status</th>
                        <th>Problem Type</th>
                        <th>Problem</th>
                        <th>Solution Type</th>
                        <th>Solution</th>
                        <th>Customer</th>
                        <th>Type</th>
                        <th>Created</th>
                        <th>Updated</th>
                        <th>Closed</th>
                        <th class="text-center">View</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="ticket of tickets" :key="ticket.id">
                        <td>{{ ticket.id }}</td>
                        <td>{{ ticket.status }}</td>
                        <td>{{ ticket.problemType }}</td>
                        <td>
                            <pre>{{ ticket.problem | trimEnd(120, '...') }}</pre>
                        </td>
                        <td>{{ ticket.solutionType }}</td>
                        <td>
                            <pre>{{ ticket.solution | trimEnd(120, '...') }}</pre>
                        </td>
                        <td>{{ ticket.customer }}</td>
                        <td>{{ ticket.type }}</td>
                        <td>{{ ticket.dateCreated | formatDate }}</td>
                        <td>{{ ticket.dateLastUpdated | formatDate }}</td>
                        <td>{{ ticket.dateClosed | formatDate }}</td>
                        <td class="text-center">
                            <router-link :to="`/ticket/${ ticket.id  }`">
                                <button class="btn btn-sm btn-primary mb-1">
                                    <svg class="btn-icon" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="currentColor" d="M288 288a64 64 0 0 0 0-128c-1 0-1.88.24-2.85.29a47.5 47.5 0 0 1-60.86 60.86c0 1-.29 1.88-.29 2.85a64 64 0 0 0 64 64zm284.52-46.6C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 96a128 128 0 1 1-128 128A128.14 128.14 0 0 1 288 96zm0 320c-107.36 0-205.46-61.31-256-160a294.78 294.78 0 0 1 129.78-129.33C140.91 153.69 128 187.17 128 224a160 160 0 0 0 320 0c0-36.83-12.91-70.31-33.78-97.33A294.78 294.78 0 0 1 544 256c-50.53 98.69-148.64 160-256 160z"></path>
                                    </svg>
                                </button>
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-else>
            <img src="@/assets/img/spinner-navy.svg" alt="Loading" class="loading-icon">
        </div>
    </div>
</template>

<script lang="ts">
'use strict';

import { Vue, Component } from 'vue-property-decorator';
import { ticketService } from '@/services';
import { ITicketHeadlineResponse, ITicketHeadline } from '@/interfaces';

@Component
export default class TicketList extends Vue {

    /*
        ==========
        DATA PROPS
        ==========
    */
    tickets: ITicketHeadline[] = [];

    /*
        =======
        METHODS
        =======
    */
    loadTickets(ticketIds: number[]){
        console.log('Loading headline list from API');
        ticketService.getTicketHeadlines(ticketIds).then((response: ITicketHeadlineResponse) => {
            this.tickets = response.data;
            this.$store.commit('setTicketHeadlines', this.tickets);
        });
    }

    /*
        ===============
        LIFECYCLE HOOKS
        ===============
    */
    created(){
        // If the last loaded ticket list is same, fetch from store
        let querystring = window.location.search;
        if(querystring === this.$store.getters.ticketHeadlineQuerystring){
            console.log('Loading headline list from store')
            return this.tickets = this.$store.getters.ticketHeadlines;
        }

        const ticketList = this.$route.query.t;
        let tickets: number[] = [];

        if(Array.isArray(ticketList)){
            tickets = ticketList.map(id => parseFloat(String(id)));
        }
        else{
            tickets = [ parseInt(ticketList) ];
        }

        this.loadTickets(tickets);

        // Build and set the querystring on the store for later comparison
        querystring = tickets.map((id: number, idx: number) => {
            return idx === 0 ? `?t=${ id }` : `&t=${ id }`;
        }).join('');

        this.$store.commit('setTicketHeadlineQueryString', querystring);
    }

};

</script>

<style scoped lang="sass">

img.loading-icon
    max-width: 35%
    width: 35%
    max-height: 350px
    margin: 100px 0
    left: 32.5%

</style>
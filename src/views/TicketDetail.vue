<template>
    <!-- 45928 -->
    <div v-if="loaded" class="container-fluid my-5">
        <div class="row mb-3">
            <div class="col-4">
                <div class="card py-3 px-2">
                    <h3>Ticket Details</h3>
                    <table class="table table-sm mb-0">
                        <tbody>
                            <tr>
                                <th>Ticket ID:</th>
                                <td>{{ detail.id }}</td>
                            </tr>
                            <tr>
                                <th>Status:</th>
                            <td>{{ detail.status }}</td>
                            </tr>
                            <tr>
                                <th>Customer:</th>
                                <td>{{ detail.customer }}</td>
                            </tr>
                            <tr>
                                <th>Category:</th>
                                <td>{{ detail.category }}</td>
                            </tr>
                            <tr>
                                <th>Type:</th>
                                <td>{{ detail.type }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-4">
                <div class="card py-3 px-2">
                    <h3>Dates Updated</h3>
                    <table class="table table-sm mb-0">
                        <tbody>
                            <tr>
                                <th>Created:</th>
                                <td>{{ detail.dateCreated | formatDateTime }}</td>
                            </tr>
                            <tr>
                                <th>Updated:</th>
                                <td>{{ detail.dateLastUpdated | formatDateTime }}</td>
                            </tr>
                            <tr>
                                <th>Assigned:</th>
                                <td>{{ detail.dateLastAssigned | formatDateTime }}</td>
                            </tr>
                            <tr>
                                <th>Accessed:</th>
                                <td>{{ detail.dateLastAccessed | formatDateTime }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-4">
                <div class="card py-3 px-2">
                    <h3>Ticket Assignment</h3>
                    <table class="table table-sm mb-0">
                        <tbody>
                            <tr>
                                <th>Owner:</th>
                                <td>{{ detail.staffAssigned }}</td>
                            </tr>
                            <tr>
                                <th>Created By:</th>
                                <td>{{ detail.staffCreated }}</td>
                            </tr>
                            <tr>
                                <th>Last Updated By:</th>
                                <td>{{ detail.staffLastUpdatedBy }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col-6">
                <div class="card py-3 px-2">
                    <h3>Ticket Problem</h3>
                    <table class="table table-sm mb-0">
                        <tbody>
                            <tr>
                                <th>Type:</th>
                                <td>{{ detail.problemType }}</td>
                            </tr>
                            <tr>
                                <th>Problem:</th>
                                <td>
                                    <pre>{{ detail.problem }}</pre>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-6">
                <div class="card py-3 px-2">
                    <h3>Ticket Solution</h3>
                    <table class="table table-sm mb-0">
                        <tbody>
                            <tr>
                                <th>Type:</th>
                                <td>{{ detail.solutionType }}</td>
                            </tr>
                            <tr>
                                <th>Solution:</th>
                                <td>
                                    <pre>{{ detail.solution }}</pre>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- TICKET CALLS -->
        <div v-if="detail.calls && detail.calls.length" class="row mb-3">
            <div class="col-12">
                <div class="card py-3 px-2">
                    <h3>Ticket Calls</h3>
                    <table v-for="call of detail.calls" :key="call.id" class="table table-striped table-sm mb-5">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Number</th>
                                <th>Contact</th>
                                <th>Duration</th>
                                <th>Staff</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{{ call.date | formatDateTime }}</td>
                                <td>{{ call.number }}</td>
                                <td>{{ call.contact }}</td>
                                <td>{{ call.duration }}S</td>
                                <td>{{ call.staff }}</td>
                                <td>{{ call.type }}</td>
                            </tr>
                            <tr>
                                <td colspan="6">
                                    <pre>{{ call.note }}</pre>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- TICKET EMAILS -->
        <div v-if="detail.emails && detail.emails.length" class="row mb-3">
            <div class="col-12">
                <div class="card py-3 px-2">
                    <h3>Ticket Emails</h3>
                    <table v-for="email of detail.emails" :key="email.id" class="table table-striped table-sm mb-5">
                        <thead>
                            <tr>
                                <th>Subject</th>
                                <th>From</th>
                                <th>To</th>
                                <th>CC</th>
                                <th>Received</th>
                                <th>Sent</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{{ email.subject }}</td>
                                <td>{{ email.from }}</td>
                                <td>{{ email.to }}</td>
                                <td>{{ email.cc }}</td>
                                <td>{{ email.dateReceived | formatDateTime }}</td>
                                <td>{{ email.dateSent | formatDateTime }}</td>
                            </tr>
                            <tr>
                                <td colspan="6">
                                    <pre>{{ email.body }}</pre>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- TICKET NOTES -->
        <div v-if="detail.notes && detail.notes.length" class="row mb-3">
            <div class="col-12">
                <div class="card py-3 px-2">
                    <h3>Ticket Notes</h3>
                    <table v-for="note of detail.notes" :key="note.id" class="table table-striped table-sm mb-5">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Staff</th>
                                <th>Visible</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{{ note.date | formatDateTime }}</td>
                                <td>{{ note.staff }}</td>
                                <td>{{ note.visible }}</td>
                            </tr>
                            <tr>
                                <td colspan="3">
                                    <pre>{{ note.body }}</pre>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="container-fluid my-5">
        <img src="@/assets/img/spinner-navy.svg" alt="Loading" class="loading-icon">
    </div>
</template>

<script lang="ts">
'use strict';

import { Vue, Component } from 'vue-property-decorator';
import { ticketService }  from '@/services';
import { ITicketDetailResponse, ITicketDetail } from '../interfaces';

@Component
export default class TicketDetail extends Vue{
    ticketId!: number;
    detail!:   ITicketDetail;
    loaded:    boolean = false;

    created(): void{
        this.ticketId = +this.$route.params.id;

        /*
            TODO
            ----
            
            Implement some timestamp checking for long running pages.

            If a page has been loaded for a very long time we don't want to
            display stale data to the user.
        */     
        if(this.$store.getters.ticketDetail(this.ticketId)){
            console.log(`Fetching ticket ${ this.ticketId } from store`);
            this.detail = this.$store.getters.ticketDetail(this.ticketId);
            this.loaded = true;
            return;
        }

        console.log(`Fetching ticket ${ this.ticketId } from API`);
        ticketService.getTicketDetail(this.ticketId)
            .then((res: ITicketDetailResponse) => {
                this.detail = res.data;
                this.loaded = true;

                this.$store.commit('addTicketDetail', this.detail);
            });
    }
}

</script>

<style scoped lang="sass">

.container-fluid
    max-width: 1500px

.loading-icon
    width: 35%
    max-width: 35%
    left: 32.5%

</style>
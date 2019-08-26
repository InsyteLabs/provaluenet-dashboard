<template>
    <div>
        <h3>Open Tickets</h3>
        <div v-if="tickets && tickets.length">
            <table class="table table-bordered table-striped table-sm mb-0">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th class="text-center">Support</th>
                        <th class="text-center">Sales</th>
                        <th class="text-center">Billing</th>
                        <th class="text-center">Infrastructure</th>
                        <th class="text-center">Field</th>
                        <th class="text-center">Other</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="staff of tickets" :key="staff.id">
                        <td>{{ staff.name }}</td>
                        <!-- OPEN SUPPORT TICKETS -->
                        <td class="text-center">
                            <div v-if="staff.supportOpen && staff.supportOpen.count">
                                <router-link :to="{ name: 'tickets', query: { t: staff.supportOpen.tickets }}">
                                    {{ staff.supportOpen.count }}
                                </router-link>                                
                            </div>
                            <div v-else>0</div>
                        </td>

                        <!-- OPEN SALES TICKETS -->
                        <td class="text-center">
                            <div v-if="staff.salesOpen && staff.salesOpen.count">
                                <router-link :to="{name: 'tickets', query: { t: staff.salesOpen.tickets }}">
                                    {{ staff.salesOpen.count }}
                                </router-link>
                            </div>
                            <div v-else>0</div>
                        </td>

                        <!-- OPEN BILLING TICKETS -->
                        <td class="text-center">
                            <div v-if="staff.billingOpen && staff.billingOpen.count">
                                <router-link :to="{name: 'tickets', query: { t: staff.billingOpen.tickets }}">
                                    {{ staff.billingOpen.count }}
                                </router-link>
                            </div>
                            <div v-else>0</div>
                        </td>

                        <!-- OPEN INFRASTRUCTURE TICKETS -->
                        <td class="text-center">
                            <div v-if="staff.infrastructureOpen && staff.infrastructureOpen.count">
                                <router-link :to="{name: 'tickets', query: { t: staff.infrastructureOpen.tickets }}">
                                    {{ staff.infrastructureOpen.count }}
                                </router-link>
                            </div>
                            <div v-else>0</div>
                        </td>

                        <!-- OPEN FIELD TICKETS -->
                        <td class="text-center">
                            <div v-if="staff.fieldOpen && staff.fieldOpen.count">
                                <router-link :to="{name: 'tickets', query: { t: staff.fieldOpen.tickets }}">
                                    {{ staff.fieldOpen.count }}
                                </router-link>
                            </div>
                            <div v-else>0</div>
                        </td>

                        <!-- OPEN OTHER TICKETS -->
                        <td class="text-center">
                            <div v-if="staff.otherOpen && staff.otherOpen.count">
                                <router-link :to="{name: 'tickets', query: { t: staff.otherOpen.tickets }}">
                                    {{ staff.otherOpen.count }}
                                </router-link>
                            </div>
                            <div v-else>0</div>
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

import { Component, Prop, Vue }  from 'vue-property-decorator';
import { IStaffOpenTicketsList } from '../interfaces';

@Component
export default class StaffOpenTicketsCard extends Vue {
    @Prop() tickets!: IStaffOpenTicketsList[];

    created(){
        
    }
}

</script>

<style scoped lang="sass">

img.loading-icon
    max-width: 30%
    width: 30%
    height: 200px
    left: 35%
</style>
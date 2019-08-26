'use strict';

import Vue  from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

interface ITicketDetailHash{
    [key: string]: ITicketDetail;
}

import { IStaffOpenTicketsList, ITicketHeadline, ITicketDetail } from '../interfaces';

export default new Vuex.Store({
    state: {
        staffGroupNumber:          <number>                  1013, // "All" group
        staffOpenTickets:          <IStaffOpenTicketsList[]> [],
        ticketHeadlines:           <ITicketHeadline[]>       [],
        ticketHeadlineQuerystring: <string>                  '',
        ticketDetails:             <ITicketDetailHash>       {}
    },
    getters: {
        staffGroupNumber: function(state): number{
            return state.staffGroupNumber;
        },
        staffOpenTickets: function(state): IStaffOpenTicketsList[]{
            return state.staffOpenTickets || [];
        },
        ticketHeadlines: function(state): ITicketHeadline[]{
            return state.ticketHeadlines || [];
        },
        ticketHeadlineQuerystring: function(state): string{
            return state.ticketHeadlineQuerystring || '';
        },
        ticketDetail: (state) => (id: number): ITicketDetail => {
            return state.ticketDetails[id];
        }
    },
    mutations: {
        setStaffOpenTickets(state, list: IStaffOpenTicketsList[]): void{
            state.staffOpenTickets = list;
        },
        setTicketHeadlines(state, headlines: ITicketHeadline[]): void{
            state.ticketHeadlines = headlines;
        },
        setTicketHeadlineQueryString(state, querystring: string): void{
            state.ticketHeadlineQuerystring = querystring;
        },
        addTicketDetail(state, ticket: ITicketDetail){
            state.ticketDetails[ticket.id] = ticket;
        }
    },
    actions: {

    }
})

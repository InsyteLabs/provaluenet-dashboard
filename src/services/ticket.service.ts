'use strict';

import {
    IStaffOpenTicketsResponse,
    ITicketHeadlineResponse,
    ITicketDetailResponse
} from '@/interfaces';

const apiUrl = process.env.VUE_APP_API_URL;

export const ticketService = {
    
    async getStaffOpenTickets(team: number): Promise<IStaffOpenTicketsResponse>{
        const url = `${ apiUrl }staff/open-tkts-by-dept?team=${ team }`;

        return fetch(url).then(r => r.json());
    },

    async getTicketHeadlines(ticketIds: number[]): Promise<ITicketHeadlineResponse>{
        let url = `${ apiUrl }staff/tkt-headline`;

        if(!Array.isArray(ticketIds)) throw new Error('Must provide array of ticket IDs');

        ticketIds.forEach((id: number, idx: number) => {
            url += idx === 0
                ? `?t=${ id }`
                : `&t=${ id }`;
        });

        return fetch(url).then(r => r.json());
    },

    async getTicketDetail(ticketId: number): Promise<ITicketDetailResponse>{
        const url = `${ apiUrl }staff/display-tkts?ticket=${ ticketId }`;

        return fetch(url).then(r => r.json());
    }
}
'use strict';

export interface IStaffOpenTicketsList{
    name: string;
    id: number;
    allOpen: {
        count:   number;
        avgDays: number;
        tickets: number[];
    };
    fieldOpen: {
        count:   number;
        tickets: number[]
    };
    supportOpen: {
        count:   number;
        tickets: number[];
    };
    salesOpen: {
        count:   number;
        tickets: number[];
    };
    billingOpen: {
        count:   number;
        avgDays: number;
        tickets: number[];
    };
    infrastructureOpen: {
        count:   number;
        tickets: number[];
    };
    otherOpen: {
        count:   number;
        tickets: number[];
    }
}
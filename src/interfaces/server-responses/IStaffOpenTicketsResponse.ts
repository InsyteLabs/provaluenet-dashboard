'use strict';

import { IServerParam }          from '../IServerParam';
import { IStaffOpenTicketsList } from '../IStaffOpenTicketsList';

export interface IStaffOpenTicketsResponse {
    data:   IStaffOpenTicketsList[];
    params: IServerParam[];
}
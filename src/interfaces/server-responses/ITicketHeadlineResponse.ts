'use strict';

import { IServerParam }    from '../IServerParam';
import { ITicketHeadline } from '../ITicketHeadline';

export interface ITicketHeadlineResponse{
    data:   ITicketHeadline[],
    params: IServerParam
}
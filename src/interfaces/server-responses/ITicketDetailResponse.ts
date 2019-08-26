'use strict';

import { ITicketDetail } from '../ITicketDetail';
import { IServerParam } from '../IServerParam';

export interface ITicketDetailResponse{
    data:   ITicketDetail;
    params: IServerParam;
}
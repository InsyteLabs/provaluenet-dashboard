'use strict';

export interface ITicketEmailDetail{
    id:           number;
    subject:      string;
    from:         string;
    to:           string;
    cc:           string;
    bcc:          string;
    dateSent:     string;
    dateReceived: string;
    sent:         string;
    body:         string;
}
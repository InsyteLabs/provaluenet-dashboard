'use strict';

import { ITicketCallDetail }  from './ITicketCallDetail';
import { ITicketNoteDetail }  from './ITicketNoteDetail';
import { ITicketEmailDetail } from './ITicketEmailDetail';

export interface ITicketDetail{
    id: number;

    staffAssigned:      string;
    staffCreated:       string;
    staffLastUpdatedBy: string;

    dateCreated:      string;
    dateLastUpdated:  string;
    dateLastAccessed: string;
    dateLastAssigned: string;
    dateClosed:       string;

    trips:       number;
    assistTech:  string;
    surveyTech:  string;
    installType: string;
    failReason:  string;
    
    infraType:        string;
    infraCategory:    string;
    infraSubcategory: string;
    customer:         string;
    status:           string;
    category:         string;
    type:             string;

    serviceName:     string;
    serviceTable:    string;
    serviceInstance: number;
    
    problemType:  string;
    problem:      string;
    solutionType: string;
    solution:     string;

    calls:  ITicketCallDetail[];
    notes:  ITicketNoteDetail[];
    emails: ITicketEmailDetail[];
}
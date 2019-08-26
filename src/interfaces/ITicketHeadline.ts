'use strict';

export interface ITicketHeadline {
    id:              number;
    staffAssigned:   string;
    dateCreated:     string;
    dateLastUpdated: string;
    dateClosed:      string;
    jobType:         string;
    problemType:     string;
    solutionType:    string;
    customer:        string;
    status:          string;
    category:        string;
    type:            string;
    problem:         string;
    solution:        string;
}
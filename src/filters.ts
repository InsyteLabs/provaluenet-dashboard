'use strict';

import { IVueFilter } from '@/interfaces';

export const filters: IVueFilter[] = [
    {
        name: 'formatDate',
        function: function(val: string|Date): string{
            if(!val) return '';
            if((new Date(val)).toString() === 'Invalid Date') return '';
        
            const d = new Date(val);
        
            const year  = (d.getFullYear()).toString(),
                  month = (d.getMonth() + 1).toString(),
                  day   = (d.getDate()).toString();
        
            return `${ month.padStart(2, '0') }/${ day.padStart(2, '0') }/${ year }`;
        }
    },
    {
        name: 'formatDateTime',
        function: function(val: string|Date): string{
            if(!val) return '';
            if((new Date(val)).toString() === 'Invalid Date') return '';
        
            const d = new Date(val);
        
            const year  = (d.getFullYear()).toString(),
                  month = (d.getMonth() + 1).toString(),
                  day   = (d.getDate()).toString(),
                  hour  = (d.getHours()).toString(),
                  min   = (d.getMinutes()).toString(),
                  sec   = (d.getSeconds()).toString();
        
            return `${ month.padStart(2, '0') }/${ day.padStart(2, '0') }/${ year } ${ hour.padStart(2, '0') }:${ min.padStart(2, '0') }:${ sec.padStart(2, '0') }`;
        }
    },
    {
        name: 'trimEnd',
        function: function(str: string, len: number, pad: string){
            str = String(str);
    
            if(str.length < len) return str;
    
            return str.slice(0, len) + pad;
        }
    }
];
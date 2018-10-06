import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'joininDatePipe'
})
export class JoiningDate extends DatePipe implements PipeTransform{

    transform(value: any, args?: any): any {
        ///MMM/dd/yyyy 
        //return super.transform(value, "MMM/dd/yyyy");
        if(!value){
            return null;
        }

        return super.transform(value, "MM/dd/yyyy");
        

        
    
     }
}
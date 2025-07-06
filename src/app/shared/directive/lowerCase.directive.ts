import { Directive, HostListener } from "@angular/core";

@Directive({
    selector:'[lowerCase]'
})
export class lowerCase{

    constructor(){
        
    }

    @HostListener('keyup', ['$event'])
    onSearch(eve: Event) {
       let inputControl=eve.target as HTMLInputElement;
       let val =inputControl.value;
       console.log(val);
       inputControl.value =val.toLowerCase()
       
}
}
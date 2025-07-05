import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector:'[cssHigh]'
})
export class cssHighlighter{
    constructor(
        private _ele:ElementRef
    ){
        this._ele.nativeElement.style.backgroundColor='orange';
        this._ele.nativeElement.style.fontSize='20px';
    }
}
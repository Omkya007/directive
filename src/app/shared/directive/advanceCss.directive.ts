import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[advanceCss]'
})
export class advanceCss {
    constructor(
        private _ele:ElementRef,
        private _re:Renderer2
    ){
    //   console.log(this._ele);
    //   this._re.setStyle(this._ele.nativeElement,"background-color","red")
    //    this._re.setStyle(this._ele.nativeElement,"color","orange"),
    //      this._re.setStyle(this._ele.nativeElement,"font-size","20px")
}

   @HostListener('mouseenter')
    onmouseenter(){
       console.log(this._ele.nativeElement);
       this._re.setStyle(this._ele.nativeElement,'background-color',"pink")
        
    }

    @HostListener('mouseout')
    onmouseout(){
        this._re.setStyle(this._ele.nativeElement,'background-color','#fff')
    }
    
}

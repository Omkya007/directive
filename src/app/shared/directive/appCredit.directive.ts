import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";


@Directive({
    selector:'[appCredit]'
})
export class appCredit implements OnInit{
    constructor(
        private  _ele:ElementRef,
        private _re:Renderer2
    ){}
    ngOnInit(): void {
       this.createError()
    }

    @HostListener('keyup',['$event'])

    onKey(eve:Event){
        let inputCon = eve.target as HTMLInputElement;
        let val:string= inputCon.value.replace(/\s+/g,'')
       

        if(val.length>16){
            val=val.substring(0,16)
            

        }
         console.log(val);

         let test=/[^\d]/.test(val)

         if(test){
            inputCon.nextElementSibling?.classList.remove('d-none');
         }else{
            inputCon.nextElementSibling?.classList.add('d-none');
         }

        let Chunk=[];

        for(let i=0;i<val.length;i=i+4){
            Chunk.push(val.slice(i,i+4))
        }
        console.log(Chunk);
        
        inputCon.value=Chunk.join(' ')
        
    }

    createError(){
       let strong =document.createElement('strong')
       strong.className='text-danger d-none' 
       strong.innerHTML=`Alphabets and special charecters not valid
                `;
       console.log(strong);
       this._re.appendChild(this._ele.nativeElement.parentElement,strong)

       
    }

}
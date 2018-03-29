import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test3]',
  template: `
    <div>
         template menyatu dengan typescript 
    </div>
    
    `,

    
  styles: [`
    div { 
      color : blue; 
    }

    .text-sukses { 
      color: green ;
    }
    .text-error { 
      color: #FF0000
    }
    .text-special {
      font-style: italic;
    }
  
  `]
})
export class Test3Component implements OnInit {
  namaUser = "Tester"
  public inputId = "input1";
  public isDisabled = true;

  hasError = true;
  isSpecial = true;

  multiKondisi = {
    "text-sukses": !this.hasError,
    "text-error": this.hasError,
    "text-special": this.isSpecial
  }

  public titleStyle = {
    color: "yellow",
    fontStyle: "italic",
    fontFamily: "Verdana",
    fontSize: "20px",
  }
  constructor() { }

  ngOnInit() {
  }
  

  public testKlik = " ";

  klikButton(){
    this.testKlik = "Button di klik";
  }

  public teksTampil = "";

  aksiKlik(value1, value2, value3){
    this.teksTampil = value1 + "-" + value2 + ":" + value3;
  }

  public name = "";
}

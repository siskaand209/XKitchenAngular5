import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-test2',
  template: `
  
  <div>
    <button (click)="gantiWarna('red')">Merah</button>
    <button (click)="gantiWarna('blue')">Biru</button>
    <button (click)="gantiWarna('green')">Hijau</button>
    <button (click)="gantiWarna('yellow')">kuning</button>
    <button (click)="gantiWarna('black')">Hitam</button>
  </div>


  <div [ngSwitch]="color">
    <div *ngSwitchCase="'red'" class="text-merah">Warna Merah yang dipilih</div>
    <div *ngSwitchCase="'blue'" class="text-biru">Warna Biru yang dipilih</div>
    <div *ngSwitchCase="'green'" class="text-hijau ">Warna Hijau yang dipilih</div>
    <div *ngSwitchCase="'yellow'" class="text-kuning">Warna Kuning yang dipilih</div>
    <div *ngSwitchCase="'black'" class="text-kuning">Warna Hitam yang dipilih</div>
    </div>

    <div *ngFor="let color of colors; index as n; first as f; last as l; odd as o; even as e">
    <h2 *ngIf="e" class="text-biru">({{n}}) {{ color}} {{f}} {{l}}</h2>
    <h2 *ngIf="o" class="text-hijau">({{n}}) {{ color}} {{f}} {{l}}</h2>


    </div>
  `,
  styles:  [`
  .text-biru { 
    color: blue ;
  }
  .text-hijau { 
    color: green ;
  }
  .text-kuning { 
    color: yellow
  }
  .text-merah { 
    color: red
  }

`]
})
export class Test2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public isHidden = false;
  gantiTeks(){
    this.isHidden = !this.isHidden;
  }

  public color = "blue";
  public gantiWarna(warna){
    this.color = warna;
  }

  public colors = ["red", "green", "blue", "white", "yellow", "violet"];

}

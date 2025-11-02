import { NgModule ,      } from '@angular/core';
import { CapitalizeFirstLetter, SmallerDatePipe } from './tapipes';  

@NgModule({
    declarations: [
        SmallerDatePipe,CapitalizeFirstLetter
    ],
    imports: [
     
    ],
    exports: [
        SmallerDatePipe,CapitalizeFirstLetter
    ],
  })
  export class PipesModule {

  }

  
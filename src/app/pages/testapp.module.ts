import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from "../service/pipes.module";
import { NerveComponent } from './nerveAssignment/nerve.component';



@NgModule({
    declarations: [
        NerveComponent
    ],
    imports: [
        CommonModule,
        PipesModule
    ]
})
export class TestAppModule { }

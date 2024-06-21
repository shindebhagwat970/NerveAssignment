import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { TestAppModule } from './pages/testapp.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TestAppModule,
    FormsModule,
    ReactiveFormsModule      

  ],

  providers: [
    provideHttpClient(withFetch()) // Configure HttpClient to use Fetch API
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

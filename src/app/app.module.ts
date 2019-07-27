import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularDayComponent } from './angular-day.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AngularDayComponent ],
  entryComponents: [AngularDayComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

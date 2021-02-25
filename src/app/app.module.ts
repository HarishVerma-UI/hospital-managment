import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HospitalsModule } from './heroes/hospitals.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HospitalsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { InputDisplayComponent } from './input-display/input-display.component';
import { NumerolojiService } from './numeroloji.service';

@NgModule({
  declarations: [
    AppComponent,
    InputDisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NumerolojiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

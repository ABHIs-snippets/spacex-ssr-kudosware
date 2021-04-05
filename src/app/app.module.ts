import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardSectionComponent } from './card-section/card-section.component';
import { FilterBoxComponent } from './filter-box/filter-box.component';
import {ServerService} from './server.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardSectionComponent,
    FilterBoxComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

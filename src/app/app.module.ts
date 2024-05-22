import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { BottomNavBarComponent } from "./bottom-nav-bar/bottom-nav-bar.component";
import { ShareCardComponent } from "./share-card/share-card.component";
import { UserDetailsModalComponent } from "./user-details-modal/user-details-modal.component";

@NgModule({
  declarations: [
    AppComponent,
    BottomNavBarComponent,
    UserDetailsModalComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

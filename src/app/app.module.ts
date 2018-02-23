import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { BrickGamePureJsComponent } from './brick-game-pure-js/brick-game-pure-js.component';
import { BrickGamePhaserComponent } from './brick-game-phaser/brick-game-phaser.component';


const appRoutes: Routes = [
  { path: 'brick-game-pure-js', component: BrickGamePureJsComponent },
  { path: 'brick-game-phaser', component: BrickGamePhaserComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BrickGamePureJsComponent,
    BrickGamePhaserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

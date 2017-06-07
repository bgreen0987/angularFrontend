import { Component } from '@angular/core';


@Component({
    selector:'crag-app',
    template:`<div id='header' style="display:block;"><h1><img src='/images/logo.png'/></h1></div>
    <hr />
    <router-outlet></router-outlet>
    `
})

export class AppComponent{

}
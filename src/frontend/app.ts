import { bootstrap } from 'angular2/platform/browser';
import { Component } from 'angular2/core';
//import { NavbarComponent } from './components/navbar';
//import { TopbarComponent } from './components/topbar';

@Component({
	selector: 'app',
	template: '<h1>Angular2 + Express4</h1>',
//	directives: [NavbarComponent, TopbarComponent]	
})

class AppComponent { }

bootstrap(AppComponent);


# Source Code

## Overview

This is the prototype of the Dominos Application for the Visually Impaired.

Firstly this is a prototype built with Angular 8 which is JavaScript Framework built by Google.

Also this application is developed for a web application use case.

The code for the prototype is located in the 

	/prototype

## Development Environment

The development environment is Windows 10 with Ubuntu 16 subsystem.

Firstly update and upgrade the Linux Environment.

	sudo apt-get update

Then

	sudo apt-get upgrade

Now we can install the Angular CLI.

We need to have npm installed first.

Use this command to install npm.

	sudo apt install npm

Once npm is installed we can install the angular cli with the following command.

	sudo npm install -g @angular/cli

Once the angular cli is installed let check on the node installation.

The reason why this is important is because the cli uses a node verison that is 10.9 or greater.

As so we will be using nvm which is version control for node.

Here is the documentation for nvm:

	https://github.com/nvm-sh/nvm

If this is a dead link just do a search for nvm node verison control.

Let's install nvm.

	curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

After install we can test using

	command -v nvm

But make sure to restart terminal shell before testing.

So now we just need to install the specific node verison with nvm.

	nvm install 10.10.0

After install we can test installation with:

	node -v

Now we can use the CLI to create our Angular Project

	ng new projectName

projectName is the name we will be using.

Once the project is finished building.

We can cd into the directory.

	cd projectName

Then we can launch the local server with the following command:

	ng serve

Once the project is finished compiling and the web server is launched at a localhost:

	http://localhost:4200/

Currently the prototype is located in:

	/source_code/prototype

## Angular Overview

Angular uses a modular and component-based arch. 

- Modular arch which we build the app as a set of modules, a module for each feature

The reason we use modular arch to build the app is because this makes it easier to break up pieces of the app and put them together.

-  Component arch which we can build the app as a set of components.

In the Angular 8 Project we generated with the CLI, with the

	ng new

the root module is created for us.

	AppModule

and a root component called 

	AppComponent

This can be found in the

	/src/app/app.module.ts

Original boilerplate code:

	import { BrowserModule } from '@angular/platform-browser';
	import { NgModule } from '@angular/core';

	import { AppRoutingModule } from './app-routing.module';
	import { AppComponent } from './app.component';

	@NgModule({
	  declarations: [
	    AppComponent
	  ],
	  imports: [
	    BrowserModule,
	    AppRoutingModule
	  ],
	  providers: [],
	  bootstrap: [AppComponent]
	})
	export class AppModule { }

As well as in the 

	/main.ts

Original boilerplate code:

	import { enableProdMode } from '@angular/core';
	import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

	import { AppModule } from './app/app.module';
	import { environment } from './environments/environment';

	if (environment.production) {
	  enableProdMode();
	}

	platformBrowserDynamic().bootstrapModule(AppModule)
	  .catch(err => console.error(err));

Here is the defenition of a module according to the Angular.JS documentation:

	https://angular.io/guide/architecture-modules

	Angular apps are modular and Angular has its own modularity system called NgModules. NgModules are containers for a cohesive block of code dedicated to an application domain, a workflow, or a closely related set of capabilities. They can contain components, service providers, and other code files whose scope is defined by the containing NgModule. They can import functionality that is exported from other NgModules, and export selected functionality for use by other NgModules.

We can use the CLI to generate new module using

	ng generate module nameOfModule

But for now we only need one module.

We can add components, which is a typescript class with a HTML template that disaplys the view.

This allows us to control parts of the screen using HTMl.

We can add components with Angular CLI using the following command:

	ng generate component ComponentName --skipTests

Now we will have an another folder in the app folder with the files related to the component.

The ComponentName class is connected to the template and CSS files via @Component() decorator which takes the following metadata:

	selector

Which allows component a tag name that can be referenced to the component from other tempplates

	templateUrl

Which is where the HTML template is

	styleUrls

Where the CSS file is

Now we can simply add the component to the

	src/app/app.component.html

keep the router-outlet

add the component like such:

	<app-ComponentName></app-ComponentName>

Now we can make changes in the component html template to show on the main screen.

## External JavaScript

To implement External Javascript, we can create a js file and add it to the array in the angular.json.

I have added it to the component.ts file as well.

So for example to do a simple console.log("test")

	import { Component, OnInit } from '@angular/core';

	/* External JavaScript*/
	console.log("test")
	/* End of External JavaScript */

	@Component({
	  selector: 'app-test',
	  templateUrl: './test.component.html',
	  styleUrls: ['./test.component.css']
	})
	export class TestComponent implements OnInit {

	  constructor() { }

	  ngOnInit() {
	  }

	}

## Welcome Component

We will start with the welcome component.

Using the Angular CLI we can generate the component:

	ng generate componenet welcome --skipTests

We will use a SVG to simulate a loading spinner.

After a few seconds, which simulates the application loading, we will change the application to the home page.

## Routes

To create pages that change between other pages we have to use routes in Angular.

Initalizally we need to make sure we have the 

	<base href="/">

in the index.html

As well as the:

	<router-outlet></router-outlet>

In the

	app.component.html

We first have to add the components that we want to allow to be routed

For the prototype we add the following components

	import { WelcomeComponent } from './welcome/welcome.component';
	import { HomeComponent } from './home/home.component';
	import { DeliveryComponent } from './delivery/delivery.component';
	import { OrderScreenComponent } from './order-screen/order-screen.component';
	import { OrderMenuComponent } from './order-menu/order-menu.component';
	import { OrderCrustsComponent } from './order-crusts/order-crusts.component';
	import { OrderSizesComponent } from './order-sizes/order-sizes.component';
	import { OrderDetailsComponent } from './order-details/order-details.component';
	import { CheckoutComponent } from './checkout/checkout.component';

## Decided to remove the welcome component

## So the first component is the home screen.

Init we have the base URL:

	localhost:4200

This is represented by the:

	app.component.html

Which is located in the:

	src/app/app.component.html

Currently this html page/template has only the router-outlet

	<router-outlet></router-outlet>

The structure of the Angular Project is that the index.html has the:

	<app-root></app-root>

This is the app.component.html.

## Routing the home page to base automatically.

We use the routes to accomplish this task.

	  { 
	    path:  '', 
	    redirectTo:  'home', 
	    pathMatch:  'full' 
	  },


If the path is empty then it automatically redirects to the home page.

## RouterLink

Additionally using routerLink allows us to create clickable elements that change the path, when clicked.

	[routerLink]="'/order-screen'"

We can put this inside the html template in tags that are commonly used for href.

For example

	<a [routerLink]="'/order-screen'">

	<div [routerLink]="'/order-screen'">

## Dominos Colors

Here are the Domino Colors:

	Blue: #0078ad

	Red: #e31836

## Build

Here is the command to build the application

	ng build --prod

This will build the application to the 

	/dist

## Creating additional components

To create additional components, use the CLI to generate the component.

Make sure to be in the dir that has the angular project.

Use this command

	ng gnerate component componentName --skipTests

Then you will be able to see that the component has been added in the 

	app.module.ts

If we need to add routing for the component you can do it here

	app-routing.module.ts

Just add the component for example

	import { YourOrdersComponent } from './your-orders/your-orders.component';

Then just add a path to the const

## Pushing to Github pages

I've decided to push the angular prototype to my github pages.

Firstly I installed the Angular CLI's dependency for github pages

	npm i -g angular-cli-ghpages

I needed to manually install the following

	npm i @angular-devkit/architect

	npm i @angular-devkit/core

	npm i @angular-devkit/schematics

Now use this commnad

	ng build --prod --base-href "https://githubname.github.io/reponame"

So make sure to have the url after --base-href changed to the specific repo.

So for example, my github username is 

	jaemnkm

and so my github pages will be

	jaemnkm.github.io

but because I have it connected to an external url

	jaemnkm.com

the first part is 

	https://jaemnkm.com

after that the repo of the angular project in this case

	dominos_app_visually_impaired

And then it builds out in the prototype repo

so add it all together

	https://jaemnkm.com/dominos_app_visually_impaired/prototype

After the project is finished building

now push it to Github

	npx ngh --no-silent

I was running into problems with 404, and this command solved it.

Also important to note make sure all images use a relative

	./

instead of

	../

Because later when it compiles and is deployed on Github pages, will run into issues.

Now the project is deployed in a seperate branch called

	gh-pages

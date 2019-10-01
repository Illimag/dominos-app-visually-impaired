# Dominos App Visually Impaired

## Overview

Building the interface with Angular.JS verison 8.

![blueprint](images/dominos_visually_impaired_template_upated-01.png)

## Development of the Prototype

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

# AutoRenter - Angular 4

An Angular 4 based implementation of the AutoRenter UI.

## Overview

These instructions will cover usage information for the UI.

## Prerequisites

The api must also be running for the UI to work properly. Please follow directions in the corresponding readme.

- Make sure the project is at a location with minimal file path length (this is especially important in a Windows environment!). For this project we strongly recommend `c:/aur/ui` as the project root.
- Install [Git](https://git-scm.com/downloads).
- Install [Node](https://nodejs.org/en/download/) (tested on version 6.2.2)
- Clone the Git repository to your local machine.
- Install [Chrome](https://www.google.com/chrome/). (Optional - Only needed for debugging)

## Angular CLI

this project was created using [Angular CLI](https://cli.angular.io/).  To install it use the following command
```bash
npm install -g @angular/cli
```

### Install project libraries

```bash
npm install
```

### Start the app

To start the app use

```bash
ng serve
```

To override the default url use
```
ng serve --host 0.0.0.0 --port 4201
```

## Browse the App

After successfully starting the UI app, you should be able to run the application by browsing to [http://localhost:4200/](http://localhost:4200/).

## Style Guide

Please refer to the team's Angular 1 Style Guide, located [here](https://github.com/fusionalliance/autorenter-spec/blob/master/styleguide_angular1.md).

## Contributing

Please read the [CONTRIBUTING](./CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* Fusion Alliance for the initiative to create a community of open source development within our ranks.

[travis-url]: https://travis-ci.org/fusionalliance/autorenter-angular1
[travis-image]: https://travis-ci.org/fusionalliance/autorenter-angular1.svg?branch=development&style=flat-square

[gitter-url]: https://gitter.im/fusionalliance/autorenter-angular1
[gitter-image]: https://badges.gitter.im/fusionalliance/autorenter-angular1.svg?style=flat-square

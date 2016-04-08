# Weather Forceast App built with Angular and ES6.

A weather application which lets you view forecast for a city.

It is built with Angular and ES6. Openweathermap API is used to fetch the forecast.
Foundation CSS framework is used to style the app. EJS template engine is used to add the environments scripts.

Gulp is used to build the application and includes a livereload development webserver.

## Development Requirements

|Dependency|OS X Installation|
|:--|:--|
|node.js|`brew install nodejs`|
|gulp|`npm install -g gulp`|
|jspm|`npm install -g jspm`|

## Development

### Installation

```
npm install
jspm install
gulp
```

### Live Reload

`gulp`

### Building

`gulp build:<environment>`

After the build the app can be served from __src/app__ directory.

## Environments

* **development**
* **test**
* **staging**
* **production**

## Available Gulp Tasks

|Command|Desc|
|:--|:--|
|`gulp cleanup`|Remove build files|
|`gulp serve` _(default)_|Launch with live reload|
|`gulp set-environment:development`|Set environment to __development__ \*|
|`gulp set-environment:test`|Set environment to __test__ \*|
|`gulp set-environment:staging`|Set environment to __staging__ \*|
|`gulp set-environment:production`|Set environment to __production__ \*|
|`gulp update-revision`|Update current revision based on the git commit or date/time \**|
|`gulp build:development`|Build for the __development__ environment|
|`gulp build:test`|Build for the __test__ environment|
|`gulp build:staging`|Build for the __staging__ environment|
|`gulp build:production`|Build for the __production__ environment|
|`gulp compile-ejs`|Compile EJS files|
|`gulp compile-sass`|Compile SASS files|
|`gulp compile-scripts`|Compile scripts. Creates self-sufficient bundle (except for __development__ environment)|
|`gulp compile-templates`|Compile templates into cache. In __development__ templates are not cached.|
|`gulp copy-fonts`|Copy fonts to defined font directory.|
|`gulp optimize-asssets`|Optimize assets|
|`gulp post-build`|Perform post-build steps|

\* Current environment is stored in /environment file

\** Current revision is stored in /revison file


## Author

crdil * [Github](https://github.com/crdil)

## Credits

Mikhail Yurasov <<me@yurasov.me>> https://github.com/myurasov/Angular-ES6-JSPM-Gulp-Boilerplate.git
Basically, [WTFPL](http://www.wtfpl.net/)

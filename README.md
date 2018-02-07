# grunt-angular-translate-cleaner

> For angular translate JSON resource files. Help in removing keys with degined prefix for production

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-angular-translate-cleaner --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-angular-translate-cleaner');
```

## The "angular_translate_cleaner" task

###What exactly is it?
This task help in development process with angular translate JSON resource file.
During development phase we add new introduced strings to our resource files.
Since translation takes time in many development processes sometimes it's necessary to go to production but with fallback to main language.
While having keys that haven't translated yet, those keys need to be removed from the resource file in order for angular translate fallback language to work.
This task comes to remove those keys from JSON files.
Best practice is to use this task on Staging build systems while leaving the untranslated keys in QA environment.

For example, having this JSON files:
en.json - 
```json
{ 
  "HELLO_WORLD" : "Hello world"
}
```

he.json - 
```json
{ 
  "HELLO_WORLD" : "TBT Hello world"
}
```

de.json - 
```json
{ 
  "HELLO_WORLD" : "TBT Hello world"
}
```

ja.json - 
```json
{ 
  "HELLO_WORLD" : "TBT Hello world"
}
```

This task will run on all JSON files except the base language (en) and remove all keys their value starts with the prefix to delete('TBT') 
### Overview
In your project's Gruntfile, add a section named `angular_translate_cleaner` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  angular_translate_cleaner: {
    your_target: {
      options:{
          prefixToDelete: 'TBT',
          resourceFolder:'test/lang',
          baseLanguageFile:'en.json'      
      }
    },
  },
});
```

### Options

#### options.prefixToDelete
Type: `String`
Default value: none

Every value that starts with this prefix, its key will be deleted from the JSON file 

#### options.resourceFolder
Type: `String`
Default value: none

A path to language resource files (JSON files)

#### options.baseLanguageFile
Type: `String`
Default value: none

The resource file to skip deletion. This is usually your fallback language.


## Release History
_(Nothing yet)_

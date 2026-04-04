# Register import map

[Register the ES6 modules](https://docs.typo3.org/m/typo3/reference-coreapi/main/en-us/ApiOverview/Backend/JavaScript/ES6/Index.html#es6-in-the-typo3-backend) of your extension in `Configuration/JavaScriptModules.php`

```php
return [
    // required import configurations of other extensions,
    // in case a module imports from another package
    'dependencies' => [
        'backend',
        'core',
    ],
    // recursive definiton, all *.js files in this folder are import-mapped
    // trailing slash is required per importmap-specification
    'imports' => [
        '@ochorocho/lit-demo/' => 'EXT:lit_demo/Resources/Public/JavaScript/',
    ],
];
```

# Hospitality-core

## How to use

Install plugin **[gatsby-hospitality-core](https://bitbucket.org/pozitiff/gatsby-hospitality-core/src/master)**

```
npm i git+ssh://git@bitbucket.org/pozitiff/gatsby-hospitality-core.git#master
```
and add to gatsby-config.js
```
plugins: [
    "gatsby-hospitality-core"
  ],
```

## What a structure:
```
Hospitality-core
   ├── gatsby-config.js
   ├── gatsby-node.js
   ├── gatsby-browser.js
   ├── gatsby-ssr.js
   ├── content
   │   └── en
   │        └── content.json
   │        └── header.json
   │   └── uk
   │        └── content.json
   │        └── header.json
   ├── src
   │   └── components
   │       └── general
   |            └── Image.js
   │       └── includes
   |            └── Footer.js   
   |            └── GeneralNavigation.js   
   |            └── Navigation.js   
   |            └── NavigationMobile.js   
   |            └── seo.js
   │       └── layout
   |            └── layout.js
   │       └── sections
   |            └── About.js   
   |            └── Contact.js   
   |            └── Form.js   
   |            └── Map.js  
   |            └── Teaser.js
   │   └── hooks
   │       └── useImagesQuery.js      
   │       └── useInput.js   
   │       └── useLanguageKey.js
   │   └── pages
   │       └── 404.js      
   │       └── index.en.md    
   │       └── index.uk.md 
   │   └── templates
   │       └── home.js
   │   └── redux
   │       └── actions.js     
   │       └── initialState.js    
   │       └── reducer.js    
   │       └── store.js    
   │       └── wrapProvider.js  
   │   └── utils
   │       └── Content.js   
   │       └── data.js  
   │       └── helpers.js  
   │   └── styles
   │       └── mains.scss
   |           └── *
   │   └── fonts
   │       └── *
   ├── static
   │   └── icons  
   │   └── images
   ├── .gitignore
   ├── LICENSE.txt
   ├── README.rst
```
## What a package:
```
Gatsby:
   ├── gatsby
   ├── gatsby-alias-imports
   ├── gatsby-plugin-i18n
   ├── gatsby-plugin-manifest
   ├── gatsby-plugin-offline
   ├── gatsby-plugin-react-helmet
   ├── gatsby-plugin-sass
   ├── gatsby-plugin-sharp   
   ├── gatsby-source-filesystem
   ├── gatsby-transformer-json
   ├── gatsby-transformer-remark
   ├── gatsby-transformer-sharp
```

```
Another:
   ├── google-maps-react   
   ├── node-sass
   ├── prop-types
   ├── react
   ├── react-dom   
   ├── react-helmet
   ├── react-redux
   ├── react-responsive
   ├── react-scroll   
   ├── react-slick
   ├── redux
   ├── redux-devtools-extension
   ├── @types/react-redux
```

### Please use the next alias
    '~'     : path.resolve(__dirname, 'src'),
    '~c'    : path.resolve(__dirname, 'src/components'),
    '~p'    : path.resolve(__dirname, 'src/pages'),
    '~s'    : path.resolve(__dirname, 'src/store'),
    '~d'    : path.resolve(__dirname, 'content'),
    '~r'    : path.resolve(__dirname, 'src/redux'),
    '~h'    : path.resolve(__dirname, 'src/hooks'),
    '~u'    : path.resolve(__dirname, 'src/utils'),
    '~style': path.resolve(__dirname, 'src/styles'),
    '~f'    : path.resolve(__dirname, 'src/fonts'),
    '~img'  : path.resolve(__dirname, 'static/images'),
    '~ic'   : path.resolve(__dirname, 'static/icons')
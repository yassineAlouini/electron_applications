# My electron applications


## Description

This repository contains an **[electron](http://electron.atom.io/)** application built following this
[tutorial](https://www.youtube.com/watch?v=ojX5yz35v4M&feature=youtu.be).

Later on, it will contain more elaborate applications and additional material to go further
building desktop applications with web tools.


## Packaging an electron application

In order to package an electron application, you need to:

1. Install the electron-packager module (locally) by running: `npm install electron-packager --save-dev`
2. Edit your `package.json` file with the following command under the `scripts` section:

```javascript
"build": "electron-packager . myApp --platform=linux --arch=x64 --version=0.27.2"
```

3. Run `npm run build`. Your application will be available at the same location
under the folder `myApp-linux`

4. Your application will be available in the `myApp-linux` folder. To launch it, double click the icon.

*Notice*: You can customize your application packaging (icon, system, architecture...). Check the sources section for more information.

## Sources

* The atom/electron github repository: https://github.com/atom/electron
* The **electron** web page: http://electron.atom.io/
* How to package an electron application tutorial: https://www.youtube.com/watch?v=dz5SnmBzBXc
* The **electron-packager** web page (where you will find a more complete description about the options available): https://www.npmjs.com/package/electron-packager

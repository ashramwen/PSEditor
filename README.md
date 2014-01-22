# PSEditor

PSEditor is an open source jQuery plugin, which provides a WYSIWYG HTML editor that can be easily added into any web site, and based on CLEditor..

The only required dependencies are:

* [jQuery](http://jquery.com/) : 1.10.1+
* [jQuery UI](http://jqueryui.com/) : 1.9.2+
* [CLEditor](http://premiumsoftware.net/cleditor/) :1.4.4+


### Getting Started

```html
<link rel="stylesheet" type="text/css" href="css/jquery.cleditor.css">
<link rel="stylesheet" type="text/css" href="css/pseditor.css">
<script type="text/javascript" src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="http://code.jquery.com/ui/1.10.3/jquery-ui.min.js"></script>
<script type="text/javascript" src="js/jquery.cleditor.min.js"></script>
<script type="text/javascript" src="js/jquery.cleditor.plugin.js"></script>
<script type="text/javascript" src="js/jquery.pseditor.min.js"></script>
```

### Usage

```html
<div id="strContent"></div>
```
```javascript
$('#strContent').PSEditor({
getImgUrl : 'testjson2'
});
```

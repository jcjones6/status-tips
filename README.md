# status-tips
Status tooltips for Innovative WebPAC

##Installation Instructions
Add "bib_links" as an ID to the Urls div on bib_display.html.
```html
<div class="bibDisplayUrls" id="bib_links">
```

<br/>Download status.js and upload to your screens directory.

<br/>Download [Tooltipster](http://iamceege.github.io/tooltipster/) and upload jquery.tooltipster.min.js and tooltipster.css to your screens directory.

<br/>Add "requestButton" as an ID to the request button in Web Options.
<br/>`ICON_BUT_REQUEST=<span class="button" id="requestButton"><img src="/screens/ico_checkmark.gif" alt=""><span class="buttonText">Request</span></span>`

</br>Load jQuery, statustip, and Tooltipster by adding these lines to the head section of the page using the INSERTTAG_INHEAD Web Option.
```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script type="text/javascript" src="/screens/status.js"></script>
<script type="text/javascript" src="/screens/jquery.tooltipster.min.js"></script>
<link rel="stylesheet" type="text/css" href="/screens/tooltipster.css">
```

</br>If you want to use Font Awesome for the tooltip icon, also add this line to the head section.
```html
<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet">
```

<br/>Example:
<br/>`INSERTTAG_INHEAD=<script type="text/javascript" src="/screens/iiilangswitch.js"></script><link rel="stylesheet" type="text/css" href="/screens/styles_print.css" media="print"><script type="text/javascript" src="/screens/bibdisplay.js"></script><script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js" ></script><script type="text/javascript" src="/screens/status.js"></script><script type="text/javascript" src="/screens/jquery.tooltipster.min.js"></script><link rel="stylesheet" type="text/css" href="/screens/tooltipster.css" /><link href="//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet">`

<br/>Add status function as an onload event.
<br/>`BODYPARAM=bgcolor="#FFFFFF" onload=addStatus();`

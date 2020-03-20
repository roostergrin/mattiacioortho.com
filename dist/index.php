<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
    <!-- Facebook Pixel Code -->
    <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '346472438896076');
    fbq('track', 'PageView');
    fbq('track', 'Lead');
    </script>
    <noscript><img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=346472438896076&ev=PageView&noscript=1"
    /></noscript>
    <!-- End Facebook Pixel Code -->
</head>
<body>
  <div id="app"></div>
  <?php wp_footer(); ?>
  <script type="text/javascript">
    WebFontConfig = {
      google: { families: [ 'Lato:300i,400,900' ] }
    };
    (function() {
      var wf = document.createElement('script');
      wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
      wf.type = 'text/javascript';
      wf.async = 'true';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(wf, s);
    })();
    var $buoop = {notify:{e:-6,f:-4,o:-4,s:-2,c:-4},insecure:true,api:5};

    function $buo_f(){
      var e = document.createElement("script");
      e.src = "//browser-update.org/update.min.js";
      document.body.appendChild(e);
    };

    try {document.addEventListener("DOMContentLoaded", $buo_f,false)}
    catch(e){window.attachEvent("onload", $buo_f)}
  </script>
  <!-- BoldChat Visitor Monitor HTML v5.00 (Website=1057 - Mattiacio Orthodontics,ChatButton=1057 - Mattiacio Orthodontics,ChatInvitation=1057 - Mattiacio Orthodontics) -->
  <script type="text/javascript">
    window._bcvma = window._bcvma || [];
    _bcvma.push(["setAccountID", "438176494458224912"]);
    _bcvma.push(["setParameter", "WebsiteID", "435787954676086530"]);
    _bcvma.push(["setParameter", "InvitationID", "435787955635470412"]);
    _bcvma.push(["setParameter", "VisitName", ""]);
    _bcvma.push(["setParameter", "VisitPhone", ""]);
    _bcvma.push(["setParameter", "VisitEmail", ""]);
    _bcvma.push(["setParameter", "VisitRef", ""]);
    _bcvma.push(["setParameter", "VisitInfo", ""]);
    _bcvma.push(["setParameter", "CustomUrl", ""]);
    _bcvma.push(["setParameter", "WindowParameters", ""]);
    _bcvma.push(["addFloat", {type: "chat", id: "435787990229912002"}]);
    _bcvma.push(["pageViewed"]);
    var bcLoad = function(){
    if(window.bcLoaded) return; window.bcLoaded = true;
    var vms = document.createElement("script"); vms.type = "text/javascript"; vms.async = true;
    vms.src = ('https:'==document.location.protocol?'https://':'http://') + "vmss.boldchat.com/aid/438176494458224912/bc.vms4/vms.js";
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(vms, s);
    };
    if(window.pageViewer && pageViewer.load) pageViewer.load();
    else if(document.readyState=="complete") bcLoad();
    else if(window.addEventListener) window.addEventListener('load', bcLoad, false);
    else window.attachEvent('onload', bcLoad);
    </script>
    <noscript>
    <a href="http://www.boldchat.com" title="Live Chat Software" target="_blank"><img alt="Live Chat Software" src="https://vms.boldchat.com/aid/438176494458224912/bc.vmi?wdid=435787954676086530&amp;vr=&amp;vn=&amp;vi=&amp;ve=&amp;vp=&amp;curl=" border="0" width="1" height="1" /></a>
  </noscript>
  <!-- /BoldChat Visitor Monitor HTML v5.00 -->
  <!-- Hotjar Tracking Code for https://mattiacioortho.com -->
  <script>
      (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:1354868,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  </script>
</body>
</html>

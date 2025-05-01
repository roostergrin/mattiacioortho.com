<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
    <!-- Facebook Pixel Code -->
    <?php if (strpos($_SERVER['REQUEST_URI'], 'thank-you') === false) : ?>
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
      </script>
      <noscript>
      <img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=346472438896076&ev=PageView&noscript=1"/>
      </noscript>
    <?php endif; ?>
    <!-- End Facebook Pixel Code -->

    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-TD6TP8RG');</script>
    <!-- End Google Tag Manager -->
</head>
<body <?php body_class(); ?>>
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
  <!-- Ruby Chat Code -->
  <script>window.rubyApi={l:[],t:[],on:function(){this.l.push(arguments)},trigger:function(){this.t.push(arguments)}};(function(){var e="1c922a92-3c62-4e84-8b62-b93f46c3b681";var a=false;var t=document.createElement("script");t.async=true;t.type="text/javascript";t.src="https://chatwidget.ruby.com/"+e;document.getElementsByTagName("HEAD").item(0).appendChild(t);t.onreadystatechange=t.onload=function(t){if(!a&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){if(window.RubyChat)window.RubyChat({c:e});a=true}}})();</script>
  <!-- Ruby Chat Code -->

  <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TD6TP8RG"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->
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

  <script src="https://onlineschedulingv2.threadcommunication.com" type="text/javascript"></script>
  <script type="text/javascript">
    OpenChair.init({
    token: "eyJhbGciOiJIUzI1NiJ9.eyJvcmlnaW4iOiJodHRwczovL3d3dy5tYXR0aWFjaW9vcnRoby5jb20vIiwicHJhY3RpY2VfaWQiOiIyNjQifQ.bdp7VSQ0fil4wzSEv7fIwLolUqJhvvbi8GWzJYTmJrc",
    mainButtonLeft: true,
    hideTooltipHeader: true,
    floatDownLocsWithoutBookings: true,
    filterOptions: {
    "New Child (7-17)": ["264-d821707c-78b0-4d2e-bf66-2ab182f7b37f"],
    "New Adult": ["264-8e92b56b-c883-4ef6-aac1-9fe12f95c259"],
    },
    extraQuestions: [{
    question: "Do you have insurance?",
    keyname: "has_insurance",
    option1: "No",
    option2: "Yes (please call the office directly)",
    }, {
    question: "Do you have a Dentist?",
    keyname: "has_dentist",
    option1: "No",
    option2: "Yes (please provide the name below)",
    }],
    textAreaLabel: "Message/Dentist Name",
    })
  </script>

  <script type="text/javascript">

  (function(d){
    var s = d.createElement("script");
    s.setAttribute("data-account", "D3656BNpyD");
    s.setAttribute("src", "https://cdn.userway.org/widget.js");
    (d.body || d.head).appendChild(s);})(document);

  (function(d){
    var ns = d.createElement("noscript");
    ns.innerHTML = `Please ensure Javascript is enabled for purposes of <a href="https://userway.org">website accessibility</a>`;
    (d.body || d.head).appendChild(ns);})(document);

</script>

<div class="footer__container-userway-trigger" id="accessibilityWidget" tabindex="0">Click for Accessibility</div>
</body>
</html>

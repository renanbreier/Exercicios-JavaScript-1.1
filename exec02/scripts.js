function getAttributes() {
    var link = document.getElementById("w3r");
    var href = link.getAttribute("href");
    var hreflang = link.getAttribute("hreflang");
    var rel = link.getAttribute("rel");
    var target = link.getAttribute("target");
    var type = link.getAttribute("type");
     
    alert("type: " + type + "\n\n" +
          "hreflang: " + hreflang + "\n\n" +
          "rel: " + rel + "\n\n" +
          "target: " + target + "\n\n" +
          "href: " + href);
  }

window.onload = init;
function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

$(document).ready(function() { 

loadScript("https://raw.githubusercontent.com/openbibleinfo/Bible-Passage-Reference-Parser/master/js/nl_bcv_parser.js");

var bcv = new bcv_parser;

var deorigineletekst = $(".bericht_voll").html();

var dereferenties = bcv.parse(deorigineletekst).osis();

var dereferenties = dereferenties.split(",").join("</span><br/><span class='BijbelVers'>")
$(".bericht_voll").append("<br/ ><h3 class='OpenBijbel-Heading'>Genoemde Bijbelverzen</h3><br/ ><span class='BijbelVers'>" + dereferenties + "</span>");

loadScript("https://raw.githubusercontent.com/Openbijbel-nu/openBijbel-webtoolbar/master/openbijbel.nu-webtoolbar.js");

$(".OpenBijbel-Heading").css("background","#465DFF").css("font-weight","bold").css("color","white");
$(".BijbelVers").css("background","#BCFFB9");

});

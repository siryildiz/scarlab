$(document).ready(function(){
    
    // Date Update
    var gunler = new Array("Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi");
    var aylar = new Array("Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık");
    function lapse(format,format2){
        var date = new Date(),
            hour = date.getHours(),
            minute = date.getMinutes(),
            second = date.getSeconds(),
            month = date.getMonth()+1,
            day = date.getDate(),
            msecond = date.getMilliseconds(),
            gun = date.getDay(),
            year = date.getFullYear();
        hour = hour <= 9 ? '0' + hour : hour;
        minute = minute <= 9 ? '0' + minute : minute;
        second = second <= 9 ? '0' + second : second;
        month = month <= 9 ? '0' + month : month;
        day = day <= 9 ? '0' + day : day;


        var hexCode = '#'+hour + String(minute) + second;
        var rgbCode = $("body").css('background-color');

        //$("span.time").text(hour + ':' + String(minute) + ':' +  second );
        if(format == "hh:mm:ss"){
            $(".current > #time").text(hour + ':' + String(minute) + ':' +  second );
        }else if(format == "hh:mm"){
            $(".current > #time").text(hour + ':' + String(minute));
        }else{
            $(".current > #time").text(hour + ':' + String(minute) + ':' +  second );
        }
        if(format2 == "short"){
            $(".forecast > #date").text(day + '/' + String(month) + '/' +  year);
        }else if(format2 == "hh:mm"){
            $(".forecast > #date").text(day + ' ' + String(aylar[date.getMonth()]) + ' ' +  year + ' ' + gunler[gun]);
        }else{
            $(".forecast > #date").text(day + ' ' + String(aylar[date.getMonth()]) + ' ' +  year + ' ' + gunler[gun]);
        }
    }

    chrome.storage.sync.get({
        hourFormat: "hh:mm:ss",
        dateFormat: "long"
    }, function(items) {
        //console.log(items);

        lapse(items.hourFormat,items.dateFormat);
        //var lapse = setInterval(lapse(items.hourFormat),500);
        var scarlabInterval = setInterval(function(){
            lapse(items.hourFormat,items.dateFormat);
        }, 500);
    });

// Standard Google Universal Analytics code
/*(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); // Note: https protocol here
 
ga('create', 'UA-76515906-3', 'auto');
ga('set', 'checkProtocolTask', function(){}); // Removes failing protocol check. @see: http://stackoverflow.com/a/22152353/1958200
ga('require', 'displayfeatures');
ga('send', 'pageview', '/newtab.html');
*/
});


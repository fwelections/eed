$(document).ready(function () {
    if (i18n.detectLanguage() =='ar') {
      $('body').addClass('layout-ar'); 
         $.i18n.init({
        lng: 'ar',
        ns: { namespaces: ['ns.home'], defaultNs: 'ns.home'},
        useLocalStorage: false,
        debug: true
        }, function() {
        $(".top-bar").i18n();

    });
    } else {
    
        $.i18n.init({
        lng: 'en',
        ns: { namespaces: ['ns.home'], defaultNs: 'ns.home'},
        useLocalStorage: false,
        debug: true
        }, function() {
        $(".top-bar").i18n();

    });
    
    }

    $("#english_link").on( "click", function() {
      $.i18n.init({
        lng: 'en',
        ns: { namespaces: ['ns.home'], defaultNs: 'ns.home'},
        useLocalStorage: false,
        debug: true
    }, function() {
       location.reload();
      
    });
});
      $("#arabic_link").on( "click", function() {
      $.i18n.init({
        lng: 'ar',
        ns: { namespaces: ['ns.home'], defaultNs: 'ns.home'},
        useLocalStorage: false,
        debug: true
    }, function() {
       location.reload();
      
    });
});
   
    
	
});
function calculateHeight(){
		var contentHeight=parseInt($('.page-content').height());
		if(911 > contentHeight){	
 		}	
}
function loadMap(url)
{
    var json = null;

    $.ajax({
        'async': false,
        'global': false,
        'url': url,
        'dataType': "json",
        'success': function (data) {
             
            json = data;
        },
        'error':function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
                }
    });
    return json;

}
function getObject(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));
        } else if (i == key && obj[key] == val) {
            objects.push(obj);
        }
    }
    return objects;
}
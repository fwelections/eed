
Egypt election data site 
===


<br/>
###Table of Contents  
<br/>

[Description](#description)  

[Folder structure](#folder)

[Architecture](#architecture)  

[Design](#design)  

[Internationalization](#internationalization)  

[Data](#data)  

[Maps](#maps)  

[Contributing](#contributing)  

<a name="description" />

Description
----
Egypt Election Data is a project to collect, open, visualize, and analyze election-related data on an ongoing basis. The project is being implemented by Democracy International (DI), a non-partisan organization that supports democracy and good governance worldwide.

The goal of Egypt Election Data is to present a range of stakeholders - election officials, government officials, political contestants, civil society organizations, media, citizens, and the international community - with better information to make better decisions that lead to better outcomes.

DI aims to achieve this goal by:

 - Creating a centralized hub of election-related data, maps, and analysis that facilitate data-driven decision   making to improve electoral processes.
 - Presenting information in a highly accessible way so that stakeholders can measure progress and identify trends from one election cycle to the next.
 - Providing a meaningful lens through which electoral developments or election observation findings can be contextualized and understood.

<a name="folder" />

Folder structure
----
**Github repositories**

The eed github repo has different branches for the different aspects of the site 
 - [gh-pages](https://github.com/fwelections/eed/tree/gh-pages) main branch that have the code base for the egyptelectiondata website
 - [skin](https://github.com/fwelections/eed/tree/skin)  branch that contains the initial css scratches  and how and how to set up a [Foundation](http://foundation.zurb.com/) based project
 - [projects](https://github.com/fwelections/eed/tree/projects) it contains source files for the [tilemill](https://www.mapbox.com/tilemill/) maps in both arabic and english , each project folder contains   [CartoCSS](https://www.mapbox.com/tilemill/docs/manual/carto/) style files , main project configuration , tooltip , data and legend texts 
 - [master](https://github.com/fwelections/eed/tree/master) deprecated
 
**Web site folders**

the website has a rather simple structure arranged  as follows 
 - assets : css / javascript and images files 
 - data : all the data used in the project , shapefiles , QGIS exported files , raw data 
 - partials : [Angular js] templates 
 - locales : contains folders for each language , currently we are supporting arabic and english . all the texts are independent from the functionnal site to support adding another language , the site also supports rtl languages  as arabic , chinese ... 
 
<a name="architecture" />

Architecture
----

We built the site using Angular js  and we focused on simplfying the site  in order to make it easy to contribute ever for people coming from a non technical background , main files are 
 - app.js where we define the routing rules and the modules  
 
```sh
    'ngRoute',
    'eedApp.filters',
    'eedApp.services',
    'eedApp.directives',
    'eedApp.controllers'
]).
config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: 'partials/index.html' /*, controller: 'parController'*/
        });
        $routeProvider.when('/presidential2012', {
            redirectTo: '/presidential2012/round1'
        });
        $routeProvider.when('/presidential2012/round1', {
            templateUrl: 'partials/presidential12/round1.html',
            controller: 'presControllerRound1'
        });
        $routeProvider.when('/presidential2012/round1/:id', {
            templateUrl: 'partials/presidential12/rnd1details.html',
            controller: 'presControllerRound1details'
        });
...............
.........
```
 - services.js : contains several functions that fetch the data from the csv files , below a sample function for the 2012 presidential elections  round one view

 ```
    Services.factory('RoundOneResults', function ($q){
    var deferred = $q.defer();
    var ds = new Miso.Dataset({
        url: "data/pround1/all.csv",
        delimiter: ","
    });
    ds.fetch({
        success: function () {
            var results = this.toJSON();
            deferred.resolve(results);

        }
    });
    this.getResults = function () {
        return deferred.promise;
    };
    return this;
    });
 ```

 - controller.js which handles  the logic for each view    , it mainly loads  the data from the service file sited above and populates the scope variable used in the views 

    ```
    angular.module('eedApp.controllers', []) 
    .controller('presControllerRound1', ['RoundOneResults', '$scope',
        function (RoundOneResults, $scope) {

            var promise = RoundOneResults.getResults();
            promise.then(function (data) {

                $scope.results = data;
          
            });

        }
    ])
 ```
 - the site also  uses several jquery plugins for charts , data animation and more that are present in the /assets/js/vendor folder 
 

<a name="design" />

Design 
---------

We built the site with [Zrub foundation](http://foundation.zurb.com/) base css  , [surfaceui](http://surface.surgd.com/) flatdesign for foundation and we added an eed.css custom file for other hacks ,  more on how to start hacking on foundation is in the skin branch [Readme](https://github.com/fwelections/eed/blob/skin/README.md) file  .

<a name="internationalization" />

Internationalization 
---------

The site is fully translatable with right to left support , this was made possible using the [i18next](http://i18next.com/) libray for javascript translation . Using i18n is pretty straightforward  ; to initialize 

 ```
 i18n.init({ lng: 'en-US' }, function(t) { /* loading done */ });
    
``` 

Resources will be resolved in this order:

 - try languageCode plus countryCode, eg. 'en-US'
 - alternative look it up in languageCode only, eg. 'en'
 - finally look it up in definded fallback language, default: 'dev'

If language is not set explicitly i18next tries to detect the user language by:

 - querystring parameter (?setLng=en-US)
 - cookie (i18next)
 - language set in navigator

Change language programatically:
Call function i18next.setLng(lng, callback) .
Read out current language set:
Call function i18next.lng() returns current lng.

[source](http://i18next.com/pages/doc_init.html)

***example of a language file usage***
```
{
    "app": {
        "name": "Egypt Election Data"
    },
    "menu": {
        "pa2011": "Parliamentary election 2011",
        "pr2012": "Presidential election 2012",
        "r2012": "Referendum 2012",
        "r2014": "Referendum 2014",
        "highlights": "Highlights",
        "about": "About",
        "lang": "Lang"
    }
}
```

to make use of the above translation we assign  the  keys to our menu  in the data-i18n attribute 
```
<ul>
    <li class="has-dropdown">
        <a href="#/presidential2012" class="" data-i18n="menu.pr2012"></a>
        <ul class="dropdown">
            <li>
                <a href="#/presidential2012/round1" class="" data-i18n="buttons.round1"></a>
            </li>
            <li>
                <a href="#/presidential2012/round2" class="" data-i18n="buttons.round2"></a>
            </li>
        </ul>
    </li>
    <li>
        <a href="#/referendum2012" class="" data-i18n="menu.r2012"></a>
    </li>
    <li>
        <a href="#/referendum2014" class="" data-i18n="menu.r2014"></a>
    </li>
    <li>
        <a href="#/highlights" class="" data-i18n="menu.highlights"></a>
    </li>
    <li>
        <a href="#/about" class="" data-i18n="menu.about"></a>
    </li>
</ul>
```

<a name="data" />

Data
----

The data used to power these visualizations was sourced from the website of the Supreme Presidential Election Commission using python , below is a commented  example of how the 2012 referendum  results were "downloaded"

```
import urllib2
from bs4 import BeautifulSoup
import csv
import os #for the se of wget command to download the files
source_url = "http://egelections-2011.appspot.com/Referendum2012/results/index.html"
# using urllib2 to read the remote html page
html = urllib2.urlopen(source_url).read()
#using BeautifulSoup library for pulling data out of HTML
soup = BeautifulSoup(html)
#gettting all the disticts
districts_html =soup.find('select', id="cities")
#print districts_html
districts = districts_html.find_all('option')
f = open('districts.csv', 'wb')
writer = csv.writer(f,delimiter=',')
#saving districts names and codes for possible use in joins or even to match file names with district names .
for option in districts :
print option.text
        print option.get('value')
        writer.writerow([option.get('value'),option.text.encode('utf-8').strip()])
#linux command
csv_command="wget -P csv http://egelections-2011.appspot.com/Referendum2012/results/csv/"+ option.get('value') + ".csv"
        excel_command="wget -P xls http://egelections-2011.appspot.com/Referendum2012/results/excels/"+ option.get('value') + ".xls"
        os.system(csv_command)
os.system(excel_command)
```

this data is  available in the [eeg-data](https://github.com/fwelections/eg-data) repository  

<a name="maps" />

Maps
----

The maps are hosted in [mapbox](https://www.mapbox.com/)  and designed using tilemill , in the branch [porjects](https://github.com/fwelections/eed/tree/projects) we have assembled all the maps sources get any one up and running quickly using those templates . 

below  is a step-by-step guide to start using tilemill 
https://www.mapbox.com/tilemill/docs/crashcourse/introduction/

one of the maps we designed is the results map for the Presidential candidate Abul Futuh , below is the cartocss code used to style the map  
 - variables for the percentage sizes  

```
@c1: 1.5 + 0.5;
@c2: 2.5 - 0.5;
@c3: 3.0 - 0.5;
@c5: 3.5 - 0.5;
@c5: 4.0 - 0.5;
@c6: 4.5 - 0.5;
```
 - choropleth layer where we define the color fill based on votes percentage for the given candidate

```
#data::chloro {
[candidates_c5pct<= 10] { polygon-fill: #45b0e9;}
[candidates_c5pct > 10] { polygon-fill:#0090d9;}
[candidates_c5pct > 25] {polygon-fill: #0c5b90; }
    polygon-comp-op:hard-light;
}
```
 - Glow effect for a prettier map (optional)

```
#data::glow {
  opacity: 0.45;
  line-join: round;
  line-color:#f4ebf7;
  [zoom=2] { line-width: 3 / 5; }
  [zoom=3] { line-width: 5 / 5; }
  [zoom=4] { line-width: 8 / 5; }
  [zoom=5] { line-width: 12 / 5; }
  [zoom=6] { line-width: 17 / 5; }
  [zoom=7] { line-width: 23 / 5; }
  [zoom=8] { line-width: 30 / 5; }
  [zoom=9] { line-width: 38 / 5; }
  [zoom>9] { line-width: 47 / 5; }
image-filters: agg-stack-blur(6,6);
}
```
 - percentages texts and size configuration based on zoom level 

```
#turnout::numbers {
    text-name:[candidates_c5t]+'%';
    text-face-name:'Futura Condensed Medium';
    text-fill:#fff;
    text-dy:-5;
  [zoom=3] {
    [candidates_c5pct<=5]{ text-size:(@c1 * 3); }
    [candidates_c5pct>5] { text-size:(@c2 * 3); }
    [candidates_c5pct>10] { text-size:(@c3 * 3); }
    [candidates_c5pct>15] { text-size:(@c5 * 3); }
    [candidates_c5pct>20]{ text-size:(@c5 * 3); }
    [candidates_c5pct>25]{ text-size:(@c6 * 3); }
  }
  [zoom=4] {
    [candidates_c5pct<=5]{ text-size:(@c1 * 4); }
    [candidates_c5pct>5] { text-size:(@c2 * 4); }
    [candidates_c5pct>10] { text-size:(@c3 * 4); }
    [candidates_c5pct>15] { text-size:(@c5 * 4); }
    [candidates_c5pct>20]{ text-size:(@c5 * 4); }
    [candidates_c5pct>25]{ text-size:(@c6 * 4); }
  }
  [zoom=5] {
    [candidates_c5pct<=5]{ text-size:(@c1 * 5); }
    [candidates_c5pct>5] { text-size:(@c2 * 5); }
    [candidates_c5pct>10] { text-size:(@c3 * 5); }
    [candidates_c5pct>15] { text-size:(@c5 * 5); }
    [candidates_c5pct>20]{ text-size:(@c5 * 5); }
    [candidates_c5pct>25]{ text-size:(@c6 * 5); }
  }
  [zoom=6] {
    [candidates_c5pct<=5]{ text-size:(@c1 * 6); }
    [candidates_c5pct>5] { text-size:(@c2 * 6); }
    [candidates_c5pct>10] { text-size:(@c3 * 6); }
    [candidates_c5pct>15] { text-size:(@c5 * 6); }
    [candidates_c5pct>20]{ text-size:(@c5 * 6); }
    [candidates_c5pct>25]{ text-size:(@c6 * 6); }
  }
  [zoom=7] {
    [candidates_c5pct<=5]{ text-size:(@c1 * 7); }
    [candidates_c5pct>5] { text-size:(@c2 * 7); }
    [candidates_c5pct>10] { text-size:(@c3 * 7); }
    [candidates_c5pct>15] { text-size:(@c5 * 7); }
    [candidates_c5pct>20]{ text-size:(@c5 * 7); }
    [candidates_c5pct>25]{ text-size:(@c6 * 7); }
  }
  [zoom=8] {
    [candidates_c5pct<=5]{ text-size:(@c1 * 8); }
    [candidates_c5pct>5] { text-size:(@c2 * 8); }
    [candidates_c5pct>10] { text-size:(@c3 * 8); }
    [candidates_c5pct>15] { text-size:(@c5 * 8); }
    [candidates_c5pct>20]{ text-size:(@c5 * 8); }
    [candidates_c5pct>25]{ text-size:(@c6 * 8); }
  }
  [zoom=9] {
    [candidates_c5pct<=5]{ text-size:(@c1 * 9); }
    [candidates_c5pct>5] { text-size:(@c2 * 9); }
    [candidates_c5pct>10] { text-size:(@c3 * 9); }
    [candidates_c5pct>15] { text-size:(@c5 * 9); }
    [candidates_c5pct>20]{ text-size:(@c5 * 9); }
    [candidates_c5pct>25]{ text-size:(@c6 * 9); }
  }
  [zoom=10]{
    [candidates_c5pct<=5]{ text-size:(@c1 * 9.5); }
    [candidates_c5pct>5] { text-size:(@c2 * 9.5); }
    [candidates_c5pct>10] { text-size:(@c3 * 9.5); }
    [candidates_c5pct>15] { text-size:(@c5 * 9.5); }
    [candidates_c5pct>20]{ text-size:(@c5 * 9.5); }
    [candidates_c5pct>25]{ text-size:(@c6 * 9.5); }
  }
  [zoom=11]{
    [candidates_c5pct<=5]{ text-size:(@c1 * 10); }
    [candidates_c5pct>5] { text-size:(@c2 * 10); }
    [candidates_c5pct>10] { text-size:(@c3 * 10); }
    [candidates_c5pct>15] { text-size:(@c5 * 10); }
    [candidates_c5pct>20]{ text-size:(@c5 * 10); }
    [candidates_c5pct>25]{ text-size:(@c6 * 10); }
  }
 [zoom=12]{
    [candidates_c5pct<=5]{ text-size:(@c1 * 10.5); }
    [candidates_c5pct>5] { text-size:(@c2 * 10.5); }
    [candidates_c5pct>10]{ text-size:(@c3 * 10.5); }
    [candidates_c5pct>15]{ text-size:(@c5 * 10.5); }
    [candidates_c5pct>20]{ text-size:(@c5 * 10.5); }
    [candidates_c5pct>25]{ text-size:(@c6 * 10.5); }
  }
}
```


<a name="contributing" />

Contributing
-----------
<br/>

**Add a feature ? or a page**  fork the repository and send a pull request 
 
**Love it?** Tell this little bird over at [`@DemocracyIntl`](https://twitter.com/DemocracyIntl) 

**Found a  bug?** [Open an issue](https://github.com/fwelections/eed/issues/new)


License
----

MIT



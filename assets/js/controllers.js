'use strict';

/* Controllers */

angular.module('eedApp.controllers', []).
  controller('presController', ['districtList',function(districtList) {
   

  }])
.controller('parController', ['ParResults','$scope',function(ParResults,$scope) {
    
    


  var promise = ParResults.getResults();
      promise.then(function(data) {

          $scope.results= data;
          var total_voters = parseInt(data[27].EligibleVoters) ;
          var valid_voters =  parseInt(data[27].TotalValidVotes) ;
          var invalid_voters= total_voters - valid_voters;
           $("#valid-pie").sparkline([valid_voters,invalid_voters], {
                    type: 'pie',
                    width: '100%',
                    height: '100%',
                    sliceColors: ['#0aa699','#F35958' ],
                    offset: 0,
                    borderWidth: 0,
                    borderColor: '#000000 '
                });
          var bar_data= [{y:i18n.t("data.parties.fjp") ,a:data[27].FJPVotes}, {y:i18n.t("data.parties.nour") ,a:data[27].NourVotes}, {y:i18n.t("data.parties.wafd") ,a:data[27].WafdVotes}, {y:i18n.t("data.parties.egbloc") ,a:data[27].EGBlocVotes}, {y:i18n.t("data.parties.wasat") ,a:data[27].AlWasatVotes},{y:i18n.t("data.parties.revcon") ,a:data[27].RevContVotes},{y:i18n.t("data.parties.others") ,a:data[27].Others}];
           Morris.Bar({
              element: 'parties-bar',
              data: bar_data,
              xkey: 'y',
              ykeys: ['a'],
              labels: [i18n.t("misc.votes")],
              barColors:['#0aa699' ]
            });
          
     });
  
  }])
.controller('presControllerRound1', ['RoundOneResults','$scope',function(RoundOneResults,$scope) {

  var promise = RoundOneResults.getResults();
      promise.then(function(data) {

          $scope.results= data;
        //  $scope.summary= getHilights(data[28]);
       //    $("#first-winner-name").attr("data-i18n","candidates." + $scope.summary[0].name);
    

       //   $("#second-winner-name").attr("data-i18n","candidates." + $scope.summary[1].name);
     });
  
  }])
 .controller('presControllerRound1details', ['$scope', '$routeParams','RoundOneResults','RoundOneResultsDetail',function($scope, $routeParams,RoundOneResults,RoundOneResultsDetail) {
      $scope.district = $routeParams.id;
     // Very dirty way to do  this 
      var promise = RoundOneResults.getResults();
      promise.then(function(data) {
      // getting old results again (useless ) 
       $scope.current=null;   
      for (var i=0 ; i< data.length;i++)
      if (data[i].did==$scope.district && $scope.district >1 )
              $scope.current=data[i];
      if($scope.current==null)
        window.location='#/presidential2012/round1' ;
      
          $scope.summary= getHilights($scope.current);
          $("#first-winner-name").attr("data-i18n","candidates." + $scope.summary[0].name);
    

          $("#second-winner-name").attr("data-i18n","candidates." + $scope.summary[1].name); 
          
          var prem = RoundOneResultsDetail.getResults( $scope.district );
          
          prem.then(function(data) {

          $scope.results= data;
      
     });
          
          
          
      });      
     
  }])
.controller('presControllerRound2', ['RoundTwoResults','$scope',function(RoundTwoResults,$scope) {

        var promise = RoundTwoResults.getResults();
        promise.then(function(data) {
        $scope.results= data;
        // chart region settings
        var series1Label= i18n.t("candidates.C13"),
            series2Label = i18n.t("candidates.C9"),
            round2chart= [],
            round1chart= [];
        for (var i=0; i<data.length -1 ; i++){
            var item1={y:i18n.t("data.districts." + data[i].did), a: data[i].C13_r1, b:data[i].C9_r1};
            var item2={y:i18n.t("data.districts." + data[i].did), a: data[i].C13, b:data[i].C9};
            round1chart.push(item1);
            round2chart.push(item2);
             }
             Morris.Line({
          element: 'round2-chart',
              data:round2chart,
              xkey: 'y',
              ykeys: ['a', 'b'],
              labels: [series1Label,series2Label],
              lineColors:['#0aa699','#777'],
              parseTime: false,
          });
                Morris.Line({
          element: 'round1-chart',
              data:round1chart,
              xkey: 'y',
              ykeys: ['a', 'b'],
              labels: [series1Label,series2Label],
              lineColors:['#0aa699','#777'],
              parseTime: false,
          });
        
        });

  }])
 .controller('presControllerRound2details', ['$scope', '$routeParams','RoundTwoResults','RoundTwoResultsDetail',function($scope, $routeParams,RoundTwoResults,RoundTwoResultsDetail) {
       $scope.district = $routeParams.id;
     // Very dirty way to do  this 
      var promise = RoundTwoResults.getResults();
      promise.then(function(data) {
      // getting old results again (useless ) 
       $scope.current=null;   
      for (var i=0 ; i< data.length;i++)
      if (data[i].did==$scope.district && $scope.district >1 )
              $scope.current=data[i];
      if($scope.current==null)
        window.location='#/presidential2012/round1' ;
      
       
          
          var prem = RoundTwoResultsDetail.getResults( $scope.district );
          
          prem.then(function(data) {

          $scope.results= data;
                     // chart region settings
        var series1Label= i18n.t("candidates.C13"),
            series2Label = i18n.t("candidates.C9"),
            round2chart= [];
        for (var i=0; i<data.length -1 ; i++){
            var item2={y:data[i].district_name, a: data[i].C13, b:data[i].C9};
            round2chart.push(item2);
             }
            
             Morris.Line({
          element: 'round2-chart',
              data:round2chart,
              xkey: 'y',
              ykeys: ['a', 'b'],
              labels: [series1Label,series2Label],
              lineColors:['#0aa699','#777'],
              parseTime: false,
          });
           
      
     });
          
          
          
      });      
     
  }])
  .controller('refController', ['RefResults','$scope',function(RefResults,$scope) {
      var promise = RefResults.getResults();
        promise.then(function(data) {
        $scope.results= data;
        });
      
  }])
.controller('ref14Controller', ['Ref14Results','$scope',function(Ref14Results,$scope) {
      var promise = Ref14Results.getResults();
        promise.then(function(data) {
        $scope.results= data;
        });
      
  }])
 .controller('refControllerdetails', ['$scope', '$routeParams','RefResults','RefResultsDetail',function($scope, $routeParams,RefResults,RefResultsDetail) {
      console.log($routeParams.id);
     $scope.district = $routeParams.id;
     // Very dirty way to do  this 
      var promise = RefResults.getResults();
      promise.then(function(data) {
      // getting old results again (useless ) 
       $scope.current=null;   
      for (var i=0 ; i< data.length;i++)
      if (data[i].did==$scope.district && $scope.district >1 )
              $scope.current=data[i];
      if($scope.current==null)
        window.location='#/referendum2012' ;
      
          
          var prem = RefResultsDetail.getResults( $scope.district );
          
          prem.then(function(data) {

          $scope.results= data;
      
     });
          
          
          
      });      
     
  }])
.controller('HighlightsController', [ 'Highlights',function(Highlights ) {
      var promise = Highlights.getResults();
        promise.then(function(data) {
         // chart region settings
        //var series1Label= i18n.t("candidates.C13"),
         //   series2Label = i18n.t("candidates.C9"),
            var turnoutChart= [],
               votesChart= [];
        for (var i=0; i<data.length -1 ; i++){
            var item1={y:i18n.t("data.districts." + data[i].did), a: data[i].C13p, b: data[i].C9p, c: data[i].yes_2012, d: data[i].yes_2014 };
            var item2={y:i18n.t("data.districts." + data[i].did), a: data[i].p2012_turnout, b:data[i].r2012_turnout, c: data[i].r_2014_turnout };
            votesChart.push(item1);
            turnoutChart.push(item2);
             }
             Morris.Line({
          element: 'votes-chart',
              data:votesChart,
              xkey: 'y',
              ykeys: ['d', 'c' , 'a','b' ],
              labels: ['2014 Yes', '2012 Yes', 'Morsi','Shafik'],
              lineColors:['#0aa699','#f35958','#0090D9','#736086'],
              parseTime: false,
          });
                Morris.Line({
          element: 'turnout-chart',
              data:turnoutChart,
              xkey: 'y',
              ykeys: ['a', 'b','c'],
              labels: ['Presidential 2012','Referendum 2012','Referendum 2014'],
              lineColors:['#736086','#f35958','#0aa699'],
              parseTime: false,
          });
        
        });
    
}])
.controller('AboutController', [ function( ) {
    console.log("About");
    
}])
.controller('ErrorController', [  function( ) {
    console.log("error");
    
}]);
    

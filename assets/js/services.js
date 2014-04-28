'use strict';

/* Services */


// register services
var Services = angular.module('eedApp.services', [

]);

Services.factory('districtList', function ($q) {
    // this.getDistricts= function
    var deferred = $q.defer(),
        ds = new Miso.Dataset({
            url: "data/districts.csv",
            delimiter: ","
        });
    ds.fetch({
        success: function () {
            var districts = this.toJSON();
            deferred.resolve(districts);

        }
    });
    this.getdistricts = function () {
        return deferred.promise;
    };
    return this;
});

Services.factory('ParResults', function ($q) {
    // this.getDistricts= function
    var deferred = $q.defer(),
        ds = new Miso.Dataset({
            url: "data/pa11/all.csv",
            delimiter: ","
        });
    ds.fetch({
        success: function () {
            var districts = this.toJSON();
            deferred.resolve(districts);

        }
    });
    this.getResults = function () {
        return deferred.promise;
    };
    return this;
});
Services.factory('RoundOneResults', function ($q) {
    // this.getDistricts= function
    var deferred = $q.defer();
    var ds = new Miso.Dataset({
        url: "data/pround1/all.csv",
        delimiter: ","
        /*,
                          columns : [
                                    { name : 'did' },
                                    { name : 'Voters' },
                                    { name : 'Valid' },
                                    { name : 'Invalid' },
                                    { name : 'Percentage' },
                                    { name : 'C1', type : 'string' },
                                    { name : 'C2', type : 'string' },
                                    { name : 'C3', type : 'string' },
                                    { name : 'C4', type : 'string' },
                                    { name : 'C5', type : 'string' },
                                    { name : 'C6', type : 'string' },
                                    { name : 'C7', type : 'string' },
                                    { name : 'C8', type : 'string' },
                                    { name : 'C9', type : 'string' },
                                    { name : 'C10', type : 'string' },
                                    { name : 'C11', type : 'string' },
                                    { name : 'C12', type : 'string' },
                                    { name : 'C13', type : 'string' },
                                    { name : 'Validp', type : 'string' },
                                    { name : 'Invalidp', type : 'string' },
                                    { name : 'first', type : 'string' },
                                    { name : 'firstp', type : 'string' },
                                    { name : 'second', type : 'string' },
                                    { name : 'secondp', type : 'string' },
                                    ]*/
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
Services.factory('RoundOneResultsDetail', function ($q) {
    // this.getDistricts= function
    var deferred = $q.defer();

    this.getResults = function (id) {
        var url = "data/pround1/details/" + id + ".csv";
        var ds = new Miso.Dataset({
            url: url,
            delimiter: ","
        });
        ds.fetch({
            success: function () {
                var results = this.toJSON();
                deferred.resolve(results);

            }
        });
        return deferred.promise;
    };
    return this;
});
Services.factory('RoundTwoResults', function ($q) {
    var deferred = $q.defer();
    var ds = new Miso.Dataset({
        url: "data/pround2/all.csv",
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
Services.factory('RoundTwoResultsDetail', function ($q) {
    // this.getDistricts= function
    var deferred = $q.defer();

    this.getResults = function (id) {
        var url = "data/pround2/details/" + id + ".csv";
        var ds = new Miso.Dataset({
            url: url,
            delimiter: ","
        });
        ds.fetch({
            success: function () {
                var results = this.toJSON();
                deferred.resolve(results);

            }
        });
        return deferred.promise;
    };
    return this;
});
Services.factory('RefResults', function ($q) {
    var deferred = $q.defer();
    var ds = new Miso.Dataset({
        url: "data/ref/all.csv",
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
Services.factory('RefResultsDetail', function ($q) {
    // this.getDistricts= function
    var deferred = $q.defer();

    this.getResults = function (id) {
        var url = "data/ref/details/" + id + ".csv";
        var ds = new Miso.Dataset({
            url: url,
            delimiter: ","
        });
        ds.fetch({
            success: function () {
                var results = this.toJSON();
                deferred.resolve(results);

            }
        });
        return deferred.promise;
    };
    return this;
});
Services.factory('Ref14Results', function ($q) {
    var deferred = $q.defer();
    var ds = new Miso.Dataset({
        url: "data/ref14/all.csv",
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
Services.factory('Highlights', function ($q) {
    var deferred = $q.defer();
    var ds = new Miso.Dataset({
        url: "data/highlights/highlights.csv",
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
'use strict';

(function(){

class MappingComponent {
  constructor($http, $scope, socket) {
    this.message = 'Hello';
    this.$http = $http;
    this.$scope = $scope;
    this.socket = socket;

    this.SavedTheatres = [];
    this.SavedMovies = [];
    this.MovieData = [];
    this.MovieMapping = [];
    this.MovieDates = [];
    this.checktheatres = [];
    this.myMovies = [];
    this.movDates = [];
    this.movieMap = [];
    this.editData = [];
    this.seltheatres = [];
    this.removeMapData = [];
    this.removecityfilter = [];
    this.removemoviefilter = [];


    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('mappingendpoint');
    });

    for(var i=0;i<7;i++){
    var date = new Date();
    date.setDate(date.getDate() + i);
    this.movDates[i] = date;
    }

  }
  $onInit() {
    this.$http.get('/api/theatreendpoints/').then(response => {
      this.SavedTheatres = response.data;
      this.socket.syncUpdates('theatreendpoint', this.TheatreDetails);
    });

    this.$http.get('/api/movieendpoints/').then(response => {
      this.SavedMovies = response.data;
      this.socket.syncUpdates('movieendpoint', this.MovieData);
    });

    this.$http.get('/api/mappingendpoints').then(response => {
        this.MovieMapping = response.data;
        this.socket.syncUpdates('mappingendpoint', this.MovieMapping);
      });
}

// movie mapping to a theatre and editing of details and removal of a mapped movie
saveMappingDetails() {
    for(var i=0; i<window.selectedTheatres.length; i++){
    this.$http.post('/api/mappingendpoints', {
      MovieName: this.movieName,
      TheatreName: window.selectedTheatres[i],
      City: this.City,
      MovieDates: window.selectedDates,
      ShowTimings: window.showTimings
    });
   this.$http.put('/api/movieendpoints/'+this.movieName, {
        Status: true
    });
  }
    this.movieName='';
    this.cityName='';
  }

  checkMovie() {
  this.$http.get('/api/moviemappingendpoints/'+this.MovieName+'/'+this.CityName)
  .then(response => {
    this.checktheatres = response.data;
    this.socket.syncUpdates('mappingendpoint', this.checktheatres);
    //console.log(response.data.length);
    if(response.data.length>=1){
      window.alert('Movie Name '+this.MovieName+' in city '+this.CityName+' is already mapped. To make changes go to Edit Movie Mapping Details');
      this.MovieName='';
      this.CityName='';
    }
  });
}

updateSTDetails() {
  this.$http.put('/api/mappingendpoints/'+this.sdtMovieName+'/'+this.sdtCityName+'/'+this.sdtTheatreName, {
      ShowTimings: window.stShowTimings,
      MovieDates: window.stDates
  });
  this.sdtMovieName='';
  this.sdtCityName='';
  this.sdtTheatreName='';
}


getstDetails() {
  this.$http.get('/api/mappingendpoints/'+this.sdtMovieName+'/'+this.sdtCityName+'/'+this.sdtTheatreName).then(response => {
      window.stData = response.data;
      this.socket.syncUpdates('mappingendpoint', window.stData);
      window.stDates=window.stData[0].MovieDates;
      window.stShowTimings=window.stData[0].ShowTimings;
      console.log(window.stDates);
      console.log(window.stShowTimings);
      window.BindSTData();
  });
}

getMovieMappingDetails() {
  window.editselectedTheatres=[];
  // window.editselectedDates=[];
  // window.editshowTimings=[];
  this.$http.get('/api/mappingendpoints/'+this.EditMovieName+'/'+this.EditCityName).then(response => {
          this.editData = response.data;
          this.socket.syncUpdates('mappingendpoint', this.editData);
          for(var i=0; i<response.data.length; i++){
            window.editselectedTheatres[i] = this.editData[i].TheatreName;
          }
          // window.editselectedDates=this.editData[0].MovieDates;
          // window.editshowTimings=this.editData[0].ShowTimings;
  this.$http.get('/api/theatreendpoints/'+this.EditCityName).then(response => {
      window.editAllTheatres = response.data;
      this.socket.syncUpdates('theatreendpoint', window.editAllTheatres);
      console.log(window.editAllTheatres);
      window.BindData();
  });

  });

}

removeMapping(map){
  var datalen;
  this.$http.get('/api/mappingendpoints/'+this.removemoviefilter+'/'+this.removecityfilter).then(response => {
          this.removeMapData = response.data;
          this.socket.syncUpdates('mappingendpoint', this.removeMapData);
          datalen = parseInt(response.data.length);
          var x = window.confirm('Do you really want to remove this mapping ?');
          console.log(datalen);
          if(x){
            this.$http.delete('/api/mappingendpoints/' + map._id);
            if(datalen == 1){
              this.$http.put('/api/movieendpoints/'+this.removemoviefilter, {
                  Status: false
              });
            }
        }
  });
}


  saveUpdateMappingDetails(){
    for(var i=0; i<window.editnewselectedTheatres.length; i++){
    this.$http.post('/api/mappingendpoints', {
      MovieName: this.EditMovieName,
      TheatreName: window.editnewselectedTheatres[i],
      City:this.EditCityName,
      MovieDates: window.editselectedDates,
      ShowTimings: window.editshowTimings
    });
    this.$http.put('/api/movieendpoints/'+this.EditMovieName, {
        Status: true
    });
  }
    this.EditMovieName='';
    this.EditCityName='';
  }

  saveSTDetails(){
  }
}

angular.module('myMovieApp')
  .component('mapping', {
    templateUrl: 'app/mapping/mapping.html',
    controller: MappingComponent,
    controllerAs: 'mappingCtrl'
  });

})();

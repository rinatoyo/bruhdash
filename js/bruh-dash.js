var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function(arr) {  
    return arr.shift();
  },

  // returns the last element of an array
  last: function (arr) {
    return arr.pop();
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, pos) {
    // return arr.indexOf(pos);
    for(let i=0; i<arr.length; i++){
      if(arr[i]===pos){
        return i;
      }
    }
    return -1;
  },


  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr, pos) {
    // return arr.lastIndexOf(pos);
    for(let i=arr.length-1; i>=0; i--){
      if(arr[i]===pos){
        return i;
      }
    }
    return -1;
  },

  // returns an array with all elements except for the last element
  initial: function (arr){ //slice
    arr.splice(2);
    return arr;
    },
  
  // returns an array with all falsey values removed
  compact: function(arr) {
    debugger;
    let noFalsy = [];
    for(value of arr){
      if(value){
        noFalsy.push(value);
      }
    }
    return noFalsy;
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function () {

  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(){

  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function() {

  },

  // creates a slice of an array with n elements taken from the beginning
  take: function () {

  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function () {

  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr, val, start, end) {
    if(start && end){
      for(let i = start; i < end; i++){
        arr[i] = val;
      }
    }else{
      for(let i=0; i<arr.length; i++){
        arr[i] = val;
      }
    }
    return arr;
  },

  // removes all given values from an array
  pull: function () {

  },

  // removes elements of an array corresponding to the given indices
  pullAt: function () {

  },

  // creates an array excluding all the specified values
  without: function() {

  },

  // returns an array with specified values excluded
  difference: function() {

  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function () {

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {

  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function(arr, func) {
    // for(let i=0; i<arr.length; i++){
    //   func(arr[i])
    for(let key in arr){
      func(arr[key])
    }
  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};

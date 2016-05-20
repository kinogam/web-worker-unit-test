export function intersection(inputs) {
   // debugger;
    importScripts('http://cdn.bootcss.com/lodash.js/4.12.0/lodash.min.js');
  //  debugger;
    console.log(inputs);
    return _.intersection.apply(_, inputs);
}
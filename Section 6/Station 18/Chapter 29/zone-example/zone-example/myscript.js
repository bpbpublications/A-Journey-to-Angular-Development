
import './node_modules/zone.js/bundles/long-stack-trace-zone.umd.js';
import './node_modules/zone.js/bundles/zone.umd.js';

function main(){
    document.getElementById('MyButton')
      .addEventListener('click',function(){
         throw new Error("Cool error");
      })
  }
Zone.current.fork(Zone.longStackTraceZone).run(main);      

//Try try catch and error handler
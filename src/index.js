import {intersection} from './intersection.worker';

class DemoCtrl{
    constructor(Webworker){
        'ngInject';

        this.Webworker = Webworker;

        this.result = [];

        this.inputs = [[1,2,3], [3,4,5], [3,6,7]];
    }

    asyncDosomething(){

       let vm = this;

        let myWorker = this.Webworker.create(intersection);

        myWorker.run(this.inputs).then((r) => {
            vm.result = r;
        });
    }
}



angular.module('kino', ['ngWebworker'])
    .controller('DemoCtrl',DemoCtrl);
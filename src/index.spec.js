import './index';

describe('web worker demo', () => {
    let vm;

    beforeEach(angular.mock.module('kino', ($provide) => {
        //mock ng-webworker
        $provide.value('Webworker', {
            create: (fn) => {
                return {
                    run: function (){
                        let result = fn.apply(null, arguments);
                        return {
                            then: (callback) => {
                                callback(result);
                            }
                        };
                    }
                };
            }
        })
    }));

    beforeEach(inject(($controller, $rootScope, $window) => {
        //mock the require api in web worker
        $window.importScripts = () => {};


        vm = $controller('DemoCtrl', {
           '$scope': $rootScope.$new()
        });
    }));
    it('intersection', () => {

        let myResult;

        vm.inputs = [[1,2,3], [3,4,5], [3,6,7]];

        vm.asyncDosomething();

        expect(vm.result).toEqual([3]);
    })

});
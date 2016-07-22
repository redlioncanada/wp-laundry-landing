System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var InsertBreakPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            InsertBreakPipe = (function () {
                function InsertBreakPipe() {
                }
                //replaces the first space with <br/>
                InsertBreakPipe.prototype.transform = function (str) {
                    var arr = str.split(' ');
                    str = '';
                    for (var i in arr) {
                        if (Number(i) == 1 || arr[i].length == 1)
                            str += arr[i] + ' ';
                        else
                            str += arr[i] + '<br/>';
                    }
                    return str;
                };
                InsertBreakPipe = __decorate([
                    core_1.Pipe({
                        name: "insertBreak"
                    }), 
                    __metadata('design:paramtypes', [])
                ], InsertBreakPipe);
                return InsertBreakPipe;
            }());
            exports_1("InsertBreakPipe", InsertBreakPipe);
        }
    }
});
//# sourceMappingURL=insertBreak.pipe.js.map
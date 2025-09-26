var InputObservable = /** @class */ (function () {
    function InputObservable(input) {
        this.input = input;
        this.observers = [];
    }
    InputObservable.prototype.subscribe = function () {
        var _this = this;
        var observers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            observers[_i] = arguments[_i];
        }
        observers.forEach(function (observer) {
            if (!_this.observers.includes(observer)) {
                _this.observers.push(observer);
            }
        });
    };
    InputObservable.prototype.unsubscribe = function (observer) {
        var observerIndex = this.observers.indexOf(observer);
        if (observerIndex !== -1)
            this.observers.splice(observerIndex, 1);
    };
    InputObservable.prototype.notify = function () {
        var _this = this;
        this.observers.forEach(function (observer) { return observer.update(_this); });
    };
    return InputObservable;
}());

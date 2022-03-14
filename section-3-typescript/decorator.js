var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// target is set to Function because classes are functions for creating Objects.
// the MenuItem function will accept a class which makes it a decorator.
function MenuItem(id) {
    return (function (target) {
        target.prototype.id = id;
    });
}
var Pizza = /** @class */ (function () {
    function Pizza() {
    }
    Pizza = __decorate([
        MenuItem('p123')
    ], Pizza);
    return Pizza;
}());
var Hamburger = /** @class */ (function () {
    function Hamburger() {
    }
    Hamburger = __decorate([
        MenuItem('h423')
    ], Hamburger);
    return Hamburger;
}());
console.log(new Pizza().id);
console.log(new Hamburger().id);

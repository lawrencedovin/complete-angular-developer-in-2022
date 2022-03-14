// target is set to Function because classes are functions for creating Objects.
// the MenuItem function will accept a class which makes it a decorator.
function MenuItem(id: string) {
    return ((target: Function) => {
        target.prototype.id = id;
    })
}

@MenuItem('p123')
class Pizza {
    id: string;
}

@MenuItem('h423')
class Hamburger {
    id: string;
}

console.log(new Pizza().id);
console.log(new Hamburger().id);
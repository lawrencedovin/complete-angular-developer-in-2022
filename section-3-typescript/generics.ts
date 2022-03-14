class Queue<T> {
    private data: Array<T>;

    add(item: T) {
        [...this.data, item];
    }

    remove() {
        this.data.shift();
    }
}

const nameQueue = new Queue<string>();
nameQueue.add('lawrence');


const numberQueue = new Queue<number>();
numberQueue.add(123);
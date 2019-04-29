(function IIFE() {
    // Best for reading values.
    // However inserting/deleting values is painful and not very performant
    class ArrayList {
        constructor() {
            this.length = 0;
            this.data = {};
        }
        get(index) {
            return this.data[index];
        }

        push(value) {
            this.data[this.length] = value;
            this.length++;
        }
        pop() {
            const poppedValue = this.data[this.length -1];
            delete this.data[this.length -1];
            this.length--;
            return poppedValue;
        }
        delete(index) {
            const deletedVal =  this.data[index];
            this._collapseTo(index);
            return deletedVal;
        }
        _collapseTo(index) {
            for(let i = index; i< this.length; i++) {
                this.data[i] = this.data[i+1];
            }
            delete this.data[this.length-1];
            this.length--;
        }

    }
})()

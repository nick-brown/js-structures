// Use cases:
// Order of the data being stored doesn't matter
// No need to search the data in the structure
var List = function() {
    return {
        listSize: 0,
        pos: 0,
        dataStore: [],

        clear: function () {
            this.dataStore = [];
            this.listSize = this.pos = 0;
        },

        find: function(value) {
            for(var i = 0, len = this.dataStore.length; i < len; i++) {
                if(this.dataStore[i] == value) {
                    return i;
                }
            }
            return -1;
        },

        toString: function() {
            // returns the current 'state' of an object, the array is sufficient here
            return this.dataStore;
        },

        insert: function(value, afterEl) {
            var insertPos = this.find(afterEl);

            if(insertPos > -1) {
                this.dataStore.splice(insertPos+1, 0, value);
                ++this.listSize;

                return true
            }
            return false;
        },

        remove: function(value) {
            var foundPos = this.find(value);
            if(foundPos > -1) {
                this.dataStore.splice(elPos, 1);
                --this.listSize;

                return true
            }
            return false
        },

        append: function(element) {
            // after the element is appended, increment listSize
            this.dataStore[this.listSize++] = element; 
        },

        front: function() {
            this.pos = 0; 
            return this;
        },

        end: function() {
            this.pos = this.listSize - 1;
            return this;
        },

        prev: function() {
            if(this.pos > 0) {
                --this.pos;
            }
            return this;
        },

        next: function() {
            if(this.pos < this.listSize - 1) {
                ++this.pos;
            }
            return this;
        },

        length: function() {
            return listSize;
        },

        currPos: function() {
            return this.pos;
        },

        moveTo: function(position) {
            this.pos = position;
            return this;
        },

        getElement: function() {
            return this.dataStore[this.pos];
        },

        contains: function(value) {
            var foundAt = this.dataStore.find(value);
            if(foundAt > -1) {
                return true;
            }

            return false;
        }
    };
};

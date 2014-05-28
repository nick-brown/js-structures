var Stack = function() {
    return {
        dataStore: [],
        top: 0,

        push: function(el) {
            this.dataStore[this.top++] = el;
            return this;
        },

        pop: function() {
            return this.dataStore[--this.top];
        },

        peek: function() {
            return this.dataStore[this.top - 1]; 
        },

        length: function() {
            return this.top;
        },

        clear: function() {
            this.top = 0;
        }
    }
};

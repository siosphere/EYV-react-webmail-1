/**
 * 
 */

var Dispatcher = new function(){
    
    return {
        /**
         * Hold our callbacks
         */
        callbacks: [],
        
        /**
         * Creates a dispatcher
         * @param {type} config
         * @returns {Dispatcher.Anonym$0.create.config}
         */
        create: function(params){
            var obj = {};
            return $.extend(true, obj, this, params);
        },
        
        /**
         * Register a callback
         * @param {type} func
         * @returns {undefined}
         */
        register: function(func){
           this.callbacks.push(func);
        },
        
        /**
         * Dispatches our message to all registered callbacks
         * @param {type} type
         * @param {type} payload
         * @param {type} callbacks
         * @returns {undefined}
         */
        _dispatch: function(type, payload){
            this.callbacks.forEach(function(callback){
                callback(payload);
            });
        },
        
        /**
         * Types of messages
         */
        type: {
            VIEW: 'Dispatcher.type.VIEW'
        }
    };
};
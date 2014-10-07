/**
 * 
 */


var Store = new function(){
    return {
        
        rows: [],
        
        /**
         * 
         * @param {type} params
         * @returns {Store.create.params|_L6.create.obj}
         */
        create: function(params){
            var obj = {};
            $.extend(true, obj, this, params);
            
            return obj;
        },
        
        /**
         * 
         * @param {type} event
         * @param {type} data
         * @returns {undefined}
         */
        emit: function(event, data){
            $(window).trigger(event, data);
        },
        
        getAll: function(){
            return this.rows;
        },
        
        /**
         * Setup an event listener
         * @param {type} event_type
         * @param {type} callback
         * @returns {undefined}
         */
        listen: function(event_type, callback){
            $(window).on(event_type, callback);
        },
        
        /**
         * 
         * @param {type} event_type
         * @param {type} callback
         * @returns {undefined}
         */
        stopListen: function(event_type, callback){
            $(window).off(event_type, callback);
        }
    };
};
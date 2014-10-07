/**
 * 
 */


var Api = new function(){
    return {
        
        PULL_URL: null,
        
        rows: [],
        
        create: function(params){
            var obj = {};
            $.extend(true, obj, this, params);
            
            return obj;
        },
        
        /**
         * 
         * @param {type} data
         * @returns {undefined}
         */
        pull: function(data, success, error){
            
            var url = this.PULL_URL;
            
            $.ajax({
                method: 'POST',
                data: data,
                url: url,
                success: success,
                error: error
            });
        }
    };
};
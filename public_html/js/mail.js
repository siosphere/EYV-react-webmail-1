/**
 * Our mail app
 */

var MailApp = Dispatcher.create({
    
    /**
     * Start our app
     * @param {type} dom_id
     * @returns {undefined}
     */
    start: function(dom_id){
        React.renderComponent(MailContainer(), document.getElementById(dom_id));
    },
    
    /**
     * Helper function to dispatch a view action
     * @param {type} action
     * @param {type} data
     * @returns {undefined}
     */
    dispatchView: function(action, data){
        var payload = {
            action: action,
            data: data
        };
        
        this._dispatch(Dispatcher.type.VIEW, payload);
    },
});
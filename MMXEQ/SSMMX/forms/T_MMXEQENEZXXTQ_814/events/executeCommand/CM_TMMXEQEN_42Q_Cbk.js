
//Start signature to Callback event to CM_TMMXEQEN_42Q
task.executeCommandCallback.CM_TMMXEQEN_42Q = function(entities, executeCommandCallbackEventArgs) {
     //here your code
    executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_GW42_PPX18');
    executeCommandCallbackEventArgs.commons.api.vc.closeModal({});
};

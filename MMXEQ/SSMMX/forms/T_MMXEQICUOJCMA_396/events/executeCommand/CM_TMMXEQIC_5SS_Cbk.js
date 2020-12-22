
//Start signature to Callback event to CM_TMMXEQIC_5SS
task.executeCommandCallback.CM_TMMXEQIC_5SS = function(entities, executeCommandCallbackEventArgs) {
     //here your code
    executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_JH82_FKX15');
    executeCommandCallbackEventArgs.commons.api.vc.closeModal({});
};

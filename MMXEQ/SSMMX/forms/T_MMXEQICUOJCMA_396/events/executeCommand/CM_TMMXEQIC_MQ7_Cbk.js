
//Start signature to Callback event to CM_TMMXEQIC_MQ7
task.executeCommandCallback.CM_TMMXEQIC_MQ7 = function(entities, executeCommandCallbackEventArgs) {
     //here your code
    
    executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_JH82_FKX15');
    executeCommandCallbackEventArgs.commons.api.vc.closeModal({});
};



//Entity: FiltroBusquedaPersona
//FiltroBusquedaPersona. (ImageButton) View: formFiltro
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VAIMAGEBUTTONNN_478275 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = false;
    
    var valor = entities.FiltroBusquedaPersona.filtro;
    
    //if(valor == null){
        //executeCommandEventArgs.commons.api.viewState.hide('QV_GS42_TFL45');
    //}
    
    if(valor == 'PE'){
            //executeCommandEventArgs.commons.api.viewState.show('QV_GS42_TFL45');
         //executeCommandEventArgs.commons.api.viewState.hide('QV_TZ82_CCZ32');
         executeCommandEventArgs.commons.api.grid.refresh('QV_GS42_TFL45');
    }else if(valor == 'CL'){
         //executeCommandEventArgs.commons.api.viewState.show('QV_TZ82_CCZ32');
         //executeCommandEventArgs.commons.api.viewState.hide('QV_GS42_TFL45');
        executeCommandEventArgs.commons.api.grid.refresh('QV_TZ82_CCZ32');
    }
};

//ProspectoQuery Entity: Prospecto
task.executeQuery.Q_PROSTPOT_PL72 = function(executeQueryEventArgs){
    //executeQueryEventArgs.parameters.filtro = executeQueryEventArgs.commom.api.vc.model.FiltroBusquedaPersona.filtro;
    //executeQueryEventArgs.parameters.tipo = executeQueryEventArgs.commom.api.vc.model.FiltroBusquedaPersona.tipo;

    executeQueryEventArgs.parameters.estado=executeQueryEventArgs.commons.api.vc.model.FiltroBusquedaPersona.filtro;
    executeQueryEventArgs.parameters.tipo=executeQueryEventArgs.commons.api.vc.model.FiltroBusquedaPersona.tipo;
    
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Prospecto = true;
};
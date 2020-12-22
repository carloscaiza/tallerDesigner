

//Entity: Persona
//Persona.estadoCivil (ComboBox) View: formPersona
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_ESTADOCIVILOLZG_498334 = function(  entities, changedEventArgs ) {

    changedEventArgs.commons.execServer = false;    
    //var estado = ('#VA_ESTADOCIVILOLZG_498334').value();
    var estado = entities.Persona.estadoCivil;
    
    if(estado == "SO"){
		changedEventArgs.commons.api.viewState.hide('VA_NOMBRECONYUGUEE_180334');
		changedEventArgs.commons.api.viewState.hide('VA_APELLIDOCONYEUU_984334');

	}else{
		changedEventArgs.commons.api.viewState.show('VA_NOMBRECONYUGUEE_180334');
		changedEventArgs.commons.api.viewState.show('VA_APELLIDOCONYEUU_984334');
	}
};
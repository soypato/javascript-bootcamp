const todos = [];
statusName = document.getElementById("statusName");
statusName.innerHTML = "Presioná el botón para ejecutar el asistente"
function menu(){
 statusName.innerHTML = "Saliste del asistente, volvé a presionar para ejecutarla.";

  let userDecision = prompt('Seleccione lo que quiere hacer');
  while (userDecision !== 'quit'){
  	if (userDecision === 'list') {
  		console.log('**********');
  		for (let i = 0; i < todos.length; i++) {
  		console.log(`${i+1}: ${todos[i]}`);
  		}
 		console.log('**********');
 		break;
	}
  	else if (userDecision === 'new') {
	  	const newTodo = prompt('Introduzca la nueva tarea');
  		todos.push(newTodo);
  	}
  	else if (userDecision == 'remove'){
  		const indexStr = parseInt(prompt('Introduzca el número del ToDo que desea borrar'));
  		if(!indexStr.isNaN){
  			todos.splice(indexStr-1, 1);
  			alert('Perfecto, borrado!')
  		}
  		else{
  			break;
  			alert('Desconocido!!'); 
  		}


  	}
  	userDecision = prompt('Seleccione lo que quiere hacer');
  }
}

console.log('Para volver a ejecutar: escriba a continuación "menu()"');

const menuButton = document.getElementById('menuButton').addEventListener("click", menu);

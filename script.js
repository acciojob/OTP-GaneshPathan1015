//your JS code here. If required.
let inputs = document.querySelectorAll("input");

inputs.forEach((input,index)=>{
	input.addEventListener("input",()=>{
		if(index<inputs.length-1){
			inputs[index+1].focus();
		}
	})
	input.addEventListener("keydown",(event)=>{
		if(event.key === "Backspace" && index>0){
			inputs[index].value = '';
			inputs[index-1].focus();
		}
	})
});




fuction removecolor(){
	let selectElement = document.getElementById("colorSelect");
	let selectedIndex = selectElement.selectedIndex;

	if(selectedIndex !== -1){
		selectElement.remove(selectedIndex);
	}
}
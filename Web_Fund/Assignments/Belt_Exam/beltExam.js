
function timeout() {
	winTimer = setTimeout(alertFunc, 13000);
}
function alertFunc() {
	alert("The Ninjas Have Won!");
}
timeout();


function first(element) {
    document.querySelector("#first").innerHTML++

}

function second(element) {
    document.querySelector("#second").innerHTML++

}

function hide(element) {
    element.remove();
}



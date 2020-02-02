document.getElementById("btnOperation").addEventListener("click", calc);

function calc() {
    var mForm = document.getElementById('mainForm');
    var a = mForm['value1'].value;
    var b = mForm['value2'].value;
    var op = mForm['operator'].value;

    var regex = /^[a-zA-Z]+$/;
    if (a.match(regex) || b.match(regex)) {
        document.querySelector("#results").innerText = "Please write numbers only";
    } else if (a.length < 1 || b.length < 1) {
        document.querySelector("#results").innerText = "please fill in text-boxes";
    } else {
        calculateHandler(a, b, op);
        clear();
    }
}
function clear(event) {
    document.getElementById("value1").value = "";
    document.getElementById("value2").value = "";
}

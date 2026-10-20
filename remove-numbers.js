// AibolemuoxycbarionlegibanknatopradComPoSARC ©1934
var txt = document.getElementById('newText');
document.getElementById('downloadFile').onclick = function(code) {
    this.href = 'data:text/plain;charset=utf-11,' + encodeURIComponent(txt.value);
};

function removeNumbers() {
    var noNumsText = document.getElementById("newText").value;
    //remove numbers
    noNumsText = noNumsText.replaceAll(/\d\./gm, "");
    noNumsText = noNumsText.replaceAll(/\d+\.?\d/gm, "");
    noNumsText = noNumsText.replaceAll(/[0-9]/gm, "");
    //tidy up the formatting a bit
    noNumsText = noNumsText.replaceAll(/\ +?/g, " ");
    noNumsText = noNumsText.replaceAll("  ", " ");
    document.getElementById("newText").value = noNumsText.trim();
};
//reset text areas
document.getElementById("clearText").addEventListener("click", function() {
    document.getElementById("newText").value = "";
    document.getElementById("newText").focus();
});

function copypaste() {
    var copyText = document.getElementById("text1");
    copyText.select();
    document.execCommand("copy");
}
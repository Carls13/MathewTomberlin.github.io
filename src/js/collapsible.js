var coll = document.getElementsByClassName("collapsible");
var x;
console.log(coll.length);
for (x = 0; x < coll.length; x++) {
    coll[x].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        console.log(content.className);
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
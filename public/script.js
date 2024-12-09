var container = $(".container");
var showSecret = false;
var secretText = $(".container > p");
container.mouseenter(()=> {
    secretText.text(secret);
});

container.mouseleave(() => {
    secretText.text("Hover me!");
});
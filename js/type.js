let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Pedro Alferes')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Front-end Developer')
    .pauseFor(1500)
    .deleteChars(7)
    .start();
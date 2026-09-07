// Immediately Invoked Function Expression(IIFE)

(function test(){
    console.log("DB Connected")
})(); // ; separates this IIFE from the next statement

((name) => {
    console.log(`DB connected for ${name}`)
})("Parth")
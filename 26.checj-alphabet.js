let ch = "A";
if (/^[a-zA-Z]$/.test(ch)) {
    console.log("Alphabet");
} else if (/^[0-9]$/.test(ch)) {
    console.log("Number");
} else {
    console.log("Special Character");
}
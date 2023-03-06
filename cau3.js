let vowel = ["a", "o", "e", "u", "i"];
let count = 0;

function findVowel() {
    for (let i = 0; i < vowel.length; i++) {
        let str = "codegym";
        for (let j = 0; j < str.length; j++) {
            if (str[j] == vowel[i]) {
                count += 1;
                console.log(count);
            } else {
                console.log(false);
            }
        }
    }
}
findVowel();

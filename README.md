# 1. Да се напише функция primeDividers(n) {}, която приема цяло число n,
# като параметър и отпечатва всичките му прости делители, без 1.
Примери:
n = 15 --> 3, 5
n = 11 --> 11
n = 12 --> 2, 3

## function primeDividers(n) {
##    const result = new Set();

##    function factorize(num, d = 2) {
##        if (num < 2) return;
##        if (num % d === 0) {
##            result.add(d);
##            return factorize(num / d, d);
##        }
##        return factorize(num, d + 1);
##    }

##    factorize(n);
##    console.log([...result].join(", "));
## }

# 2. Да се напише функция parseString(str) {}, която приема параметър от
# тип String. Параметърът може да съдържа всякакви символи и къдрави скоби.
# Дума е поредица от символи, без интервали.
# Да се обработи str по такъв начин, че всяка една дума да е обградена с „<div>”
# таг, като ако има къдрави скоби, които обграждат една или повече думи, да
# останат извън div таговете.
Примери:
str = „word1 {word2!}“ --> „<div>word1</div> {<div>word2!</div>}”
str = „{word1 word2}“ --> „{<div>word1</div> <div>word2</div>}“
str = „{word1 {word2}}“ --> „{<div>word1</div> {<div>word2</div>}}“

## function parseString(str) {
##    return str.replace(/\b[^\s{}]+\b/g, (match) => `<div>${match}</div>`);
## }

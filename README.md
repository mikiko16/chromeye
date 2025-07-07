# 🧠 JavaScript Задачи

## ✅ 1. Функция `primeDividers(n)`

Напиши функция, която приема цяло число `n` и отпечатва **всички негови прости делители**, без `1`.

### 🔹 Примери:
```
n = 15  → 3, 5  
n = 11  → 11  
n = 12  → 2, 3
```

### 📦 Код:
```js
function primeDividers(n) {
    const result = new Set();

    function factorize(num, d = 2) {
        if (num < 2) return;
        if (num % d === 0) {
            result.add(d);
            return factorize(num / d, d);
        }
        return factorize(num, d + 1);
    }

    factorize(n);
    console.log([...result].join(", "));
}
```

---

## ✅ 2. Функция `parseString(str)`

Приема `String`, съдържаща символи и къдрави скоби `{}`.  
Всяка дума (поредица без интервали) трябва да бъде **обградена с `<div>`**, освен ако е вътре в къдрави скоби.

### 🔹 Примери:
```
"word1 {word2!}"      → "<div>word1</div> {<div>word2!</div>}"
"{word1 word2}"       → "{<div>word1</div> <div>word2</div>}"
"{word1 {word2}}"     → "{<div>word1</div> {<div>word2</div>}}"
```

### 📦 Код:
```js
function parseString(str) {
    return str.replace(/\b[^\s{}]+\b/g, (match) => `<div>${match}</div>`);
}
```

---
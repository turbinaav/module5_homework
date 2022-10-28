let animals = new Map ([
    ["cat", "meow"],
    ["dog", "bark"],
    ["bird", "chirp"]
]);

for (let [key, value] of animals) {
    console.log(`Ключ - ${key}, значение - ${value}`)
}
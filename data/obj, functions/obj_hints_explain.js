const user = {
    name: "Алексей",
    age: 30,

    [Symbol.toPrimitive](hint) {
        console.log(`Хинт: ${hint}`);

        switch (hint) {
            case 'number':
                return this.age;
            case 'string':
                return this.name;
            case 'default':
                return `${this.name} (${this.age} лет)`;
        }
    }
};

// Примеры:
console.log(+user);        // Хинт: number → 30
console.log(`${user}`);    // Хинт: string → "Алексей"
console.log(user + "!");   // Хинт: default → "Алексей (30 лет)!"
console.log(user == 30);   // Хинт: default → false (сравнивается строка с числом)

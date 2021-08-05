// Base Hash Table Class

class HashTable {
    constructor() {
        this.table = new Array(127);
        this.size = 0;
    }

    // hash function
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        // adding multiplication to prime number to avoid grouping
        return hash % this.table.length * 7;
    }

    // add/set
    set(key, value) {
        // get indesx to store
        const index = this._hash(key);
        // check if index is already occupied
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                // check if the same key already exists - update the value
                if (this.table[index][i][0] === key) {
                    this.table[index][i][1] = value;
                    return;
                }
            }
            // there is no same key, add one more entry to array at the same index
            this.table[index].push([key, value]);
        } else {
            this.table[index] = [];
            this.table[index].push([key, value]);
        }
        this.size++;
    }

    // retrieve/get
    get(key) {
        const index = this._hash(key);
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    return this.table[index][i][1];
                }
            }
        }
        return undefined;
    }

    // remove/delete
    remove(key) {
        const index = this._hash(key);
        if (this.table[index] && this.table[index].length) {
            for (let i = 0; i < this.table[index].length; i++) {
                if (this.table[index][i][0] === key) {
                    this.table[index].splice(i, 1);
                    this.size--;
                    return true;
                }
            }
        } else {
            return false;
        }
    }

    // keys: iterate over all hashtable and get the keys

    print() {
        this.table.forEach((values, index) => {
            const chainedValues = values.map(
                ([key, value]) => `[ ${key}: ${value} ]`
            );
            console.log(`${index}: ${chainedValues}`);
        });
    }


}

const ht = new HashTable();

ht.set("France", 111);
ht.set("Spain", 150);
ht.set("Spain", 250);
ht.set("Russia", 700);
ht.set("ǻ", 192);
ht.set("ab", 192);
ht.set("ba", 500);

ht.print();
// 581: [ France: 111 ]
// 1365: [ ab: 192 ],[ ba: 500 ]
// 3549: [ Spain: 250 ],[ ǻ: 192 ]
// 4417: [ Russia: 700 ]

console.log(ht.size); // 6
ht.remove("Spain");
ht.print();
// 581: [ France: 111 ]
// 1365: [ ab: 192 ],[ ba: 500 ]
// 3549: [ ǻ: 192 ]
// 4417: [ Russia: 700 ]
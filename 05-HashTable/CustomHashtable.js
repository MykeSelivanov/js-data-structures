// Base Hash Table Class

class HashTable {
    constructor(){
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
    set(key, value){
        // get indesx to store
        const index = this._hash(key);
        // check if index is already occupied
        if(this.table[index]){
            for (let i = 0; this.table[index].length; i++){
                // check if the same key already exists - update the value
                if (this.table[index][i][0] === key) this.table[index][i][1] = value;
                return;
            }
            // there is no same key, add one more entry to array at the same index
            this.table[index].push([key,value]);
        } else {
            this.table[index] = [];
            this.table[index].push([key,value]);
        }
        this.size++;
    }

    // retrieve/get
    get(key){
        const index = this._hash(key);
        if(this.table[index]){
            for(let i = 0; i < this.table.length; i++){
                
            }
        }
    }

    // remove/delete
    remove(key){
        const index = this._hash(key);
        if (this.table[index] && this.table[index].length){
            this.table[index] = [];
            this.size--;
            return true;
        } else {
            return false;
        }
    }

    // keys: iterate over all hashtable and get the keys


}

const ht = new HashTable();
ht.set('Canada', 300);
ht.set('USA', 100);
ht.set('Russia', 200);
console.log(ht);
console.log(ht.get('Russia'));
class HashTable{
    constructor(size=50){
        this.buckets=new Array(size);
        this.size=size;
    }


    _hash(key){
        let hash=0;
        for(let i=0;i<key.length;i++){
            hash+=key.charCodeAt(i)
        }
        return hash %this.size
    }

    set(key,value){
        const index=this._hash(key);
        if(!this.buckets[index]){
            this.buckets[index]=[];
        }
        for(let pair of this.buckets[index]){
            if(pair[0]===key){
                pair[1]=value;
                return;
            }
        }
        this.buckets[index].push([key,value])
    }

    get(key){
        const index=this._hash(key);
        if(this.buckets[index]){
            for(let pair of this.buckets[index]){
                if(pair[0]===key){
                    return pair[1]
                }
            }
        }
    }

    remove(key){
        const index=this._hash(key);
        if(this.buckets[index]){
            this.buckets[index]=this.buckets[index].filter(pair=>pair[0]!==key)
        }
    }

    print(){
        this.buckets.forEach((element,index)=>console.log(index,'=>',element))
        
    }
}

const ht = new HashTable();
ht.set("name", "Aravind");
ht.set("age", 25);
ht.set("country", "India");
ht.print();
console.log(ht.get("name")); // Output: Aravind
ht.remove("age");
ht.print();
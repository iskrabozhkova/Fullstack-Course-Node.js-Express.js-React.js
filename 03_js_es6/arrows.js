'use strict'

const bob = {
    name: 'Bob',
    friends: ['Alice', 'Jane'],
    // printFriends(){
    //     this.friends.forEach(friend => console.log(`${this.name} knows ${friend}`))
    // }
    printFriends(){
        const self = this;
        this.friends.forEach(
            function(f){
                console.log(`${self.anem} knows ${f}`);
            }
        )
    }
}

bob.printFriends();
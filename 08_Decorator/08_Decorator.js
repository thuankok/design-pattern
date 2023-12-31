let User = function(name){
    this.name = name
    
    this.say = function(){
        console.log("User: " + this.name);
    }
}

let DecoratorUser = function(user,street, city){
    this.user = user;
    this.name = user.name;
    this.street = street;
    this.city = city;

    this.say = function () {
        console.log("Decorated User: " + this.name + ", " +
            this.street + ", " + this.city);
    };

}

function run() {

    var user = new User("Name 1");
    user.say();

    var decorated = new DecoratorUser(user, "My Dinh", "Ha Noi");
    decorated.say();
}

run()
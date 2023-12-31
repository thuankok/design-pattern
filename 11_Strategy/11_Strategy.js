let Shipping  = function(){
    this.company = ""
}

Shipping.prototype = {
    setStrategy: function (company) {
        this.company = company;
    },

    calculate: function (package) {
        return this.company.calculate(package);
    }
}

let Tiki = function () {
    this.calculate = function (package) {
        // calculations...
        return "$45.95";
    }
};

let Shoppe = function () {
    this.calculate = function (package) {
        // calculations...
        return "$39.40";
    }
};

let Lazada = function () {
    this.calculate = function (package) {
        // calculations...
        return "$43.20";
    }
};


function run(){
    let package = { from: "76712", to: "10012", weigth: "lkg" };

    // the 3 strategies

    let tiki = new Tiki();
    let shoppe = new Shoppe();
    let lazada = new Lazada();

    var shipping = new Shipping();

    shipping.setStrategy(tiki);
    console.log("Tiki Strategy: " + shipping.calculate(package));
    shipping.setStrategy(shoppe);
    console.log("Shoppe Strategy: " + shipping.calculate(package));
    shipping.setStrategy(lazada);
    console.log("Lazada Strategy: " + shipping.calculate(package));
}

run()
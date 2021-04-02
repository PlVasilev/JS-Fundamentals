function createComputerHierarchy() {
    class Battery{
        constructor(manufacturer,expectedLife){
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }
    class Keyboard{
        constructor(manufacturer,responseTime){
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }
    class Monitor{
        constructor(manufacturer,width,height){
            this.manufacturer = manufacturer;
            this.width = Number(width);
            this.height = Number(height);
        }
    }

    class Computer{
        constructor(manufacturer,processorSpeed,ram,hardDiskSpace){
            if (new.target === Computer){
                throw new Error("Computer class is abstract")
            }
            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
            computerQualityMixin(this);
            styleMixin(this);
        }

    }
    class Laptop extends Computer{
        constructor(manufacturer,processorSpeed,ram,hardDiskSpace,weight,color,battery){
            super(manufacturer,processorSpeed,ram,hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;

        }

        get battery() {
            return this._battery;
        }

        set battery(NewBattery) {
            if (!(NewBattery instanceof Battery)){
                throw new TypeError("Battery is not Valid")
            }
            this._battery = NewBattery;
        }


    }
    class Desktop extends Computer{
        constructor(manufacturer,processorSpeed,ram,hardDiskSpace,keyboard,monitor){
            super(manufacturer,processorSpeed,ram,hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(value) {
            if (! (value instanceof Keyboard)){
                throw new TypeError("Battery is not Valid")
            }
            this._keyboard = value;
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(value) {
            if (! (value instanceof Monitor)){
                throw new TypeError("Battery is not Valid")
            }
            this._monitor = value;
        }
    }


    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    };

}

    function computerQualityMixin(classToExtend) {
        classToExtend.getQuality = function () {
            return (this.processorSpeed + this.ram + this.hardDiskSpace)
        };
        classToExtend.isFast = function () {
            return this.processorSpeed > this.ram / 4
        };
        classToExtend.isRoomy = function () {
            return this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed)
        }

    }

    function styleMixin(classToExtend) {
        classToExtend.isFullSet = function () {
            return this.manufacturer === this.keyboard.manufacturer && this.manufacturer === this.monitor.manufacturer;
        };
        classToExtend.isClassy = function () {
            return this.battery.expectedLife >= 3 && (this.color === "Silver" || this.color === "Black") && this.weight < 3;
        }

}
let result = createComputerHierarchy();
let BAT = result.Battery;
let bat = new BAT('intel', 5);
//let MON = result.Monitor;
//let mon = new MON('Plank',3,2);
let DESCK = result.Laptop;
let desck = new DESCK("Hewlett Packard",2.4,4,0.5,3.12,"Silver",bat);
console.log(desck.getQuality());
console.log(desck.isFast());
console.log(desck.isRoomy());
console.log(desck.battery.expectedLife);
//console.log(desck.isFullSet());
console.log(desck.isClassy());
//let mix = createMixins();
//let MIX = mix.computerQualityMixin(desck);
//console.log(MIX);


class StormWatcher {
    constructor(temperature, humidity, pressure, windSpeed) {
        this.id = StormWatcher.getId();
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.windSpeed = windSpeed;
    }

    toString() {
        let weather = 'Not stormy';
        if (this.temperature < 20 &&
            (this.pressure < 700 || this.pressure > 900) &&
            this.windSpeed > 25) {
            weather = 'Stormy';
        }
        return `Reading ID: ${this.id}
                Temperature: ${this.temperature}*C
                Relative Humidity: ${this.humidity}%
                Pressure: ${this.pressure}hpa
                Wind Speed: ${this.windSpeed}m/s
                Weather: ${weather}`;
    }
    static getId() {
        if (StormWatcher.nextId === undefined)
            StormWatcher.nextId = 0;
        return StormWatcher.nextId++;
    }
}
let sw1 = new StormWatcher(21,80,750,15);
let sw2 = new StormWatcher(10,49,680,30);
console.log(sw1.toString());
console.log(sw2);
sw1.toString()
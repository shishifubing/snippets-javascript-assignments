class Device5 {
    constructor(name = "Device5", description = "Description", brand = "Brand") {
        this.name = name;
        this.description = description;
        this.brand = brand;
    }
}

class ElectronicDevice5 extends Device5 {
    constructor(name, description, brand, battery = [false, false], powerConsumption = 0, pluggedIn = false, turnedOn = false) {
        super(name, description, brand);
        this.battery = battery; // [does it have a battery, is it charged]
        this.powerConsumption = powerConsumption; // units of measurement - W/h
        this.pluggedIn = pluggedIn; // true - plugged in, false - it's not plugged in
        this.turnedOn = turnedOn; // true - turned on, false - turned off
    }

    plugIn() {
        this.pluggedIn = true;
        console.log(this.name + ' is connected to the outlet');
    }

    unplug() {
        this.pluggedIn = false;
        console.log(this.name + ' is disconnected from the outlet');
    }

    turnOn() {
        if (this.battery[0]) {
            console.log(this.name + ' has a battery');
            if (this.battery[1]) {
                console.log('The battery is charged');
            } else {
                console.log('The battery isn\'t charged');
            }
        }
        if (!this.battery[0] || !this.battery[1]) {
            if (this.pluggedIn) {
                console.log(this.name + ' is connected to the outlet');
            } else {
                console.log(this.name + ' is not connected to the outlet, connecting...');
                this.plugIn();
            }
        }
        this.turnedOn = true;
        console.log(this.name + ' is turned on');
    }

    turnOff() {
        if (this.turnedOn) {
            this.turnedOn = false;
            console.log(this.name + ' is turned off');
            if (this.pluggedIn) {
                this.unplug();
            }
        } else {
            console.log(this.name + ' is already turned off');
        }
    }
}

class ComputerMonitor5 extends ElectronicDevice5 {
    constructor(name, brand, size = 0, resolution = [0, 0], refreshRate = 0, powerConsumption, pluggedIn, turnedOn) {
        const description = 'A computer monitor is an output device that displays information in pictorial form. A monitor usually comprises the visual display, circuitry, casing, and power supply. The display device in modern monitors is typically a thin film transistor liquid crystal display with LED backlighting having replaced cold-cathode fluorescent lamp backlighting.';
        const battery = [false, false];
        super(name, description, brand, battery, powerConsumption, pluggedIn, turnedOn);
        this.brand = brand;
        this.size = size; // units of measurement - inch
        this.resolution = resolution; // units of measurement - pixel
        this.refreshRate = refreshRate; //units of measurement - Hz
    }
}

class Speaker5 extends ElectronicDevice5 {
    constructor(name, brand, type = "", soundVolume = 0, weight = 0, battery, pluggedIn, turnedOn) {
        const description = 'Speakers are transducers that convert electromagnetic waves into sound waves. The speakers receive audio input from a device such as a computer or an audio receiver. This input may be either in analog or digital form. Analog speakers simply amplify the analog electromagnetic waves into sound waves. Since sound waves are produced in analog form, digital speakers must first convert the digital input to an analog signal, then generate the sound waves.';
        super(name, description, brand, battery, pluggedIn, turnedOn);
        this.type = type;
        this.soundVolume = soundVolume; // units of measurement - dB
        this.weight = weight; // units of measurement - kg
    }
}

(() => {
    const monitor = new ComputerMonitor5(model = "27GN750-B", brand = "LG", size = 27, resolution = [1920, 1080], refreshRate = 240, powerConsumption = 48, pluggedIn = false, turnedOn = false);
    const speaker = new Speaker5(model = "The New SOUNDBOKS (3rd Gen)", brand = "SOUNDBOKS", type = "wireless", soundVolume = 126, weight = 15.4, battery = [true, true], powerConsumption = 99.84, pluggedIn = false, turnedOn = false);

    console.log('Task 5:');

    monitor.turnOn();
    speaker.turnOn();
    monitor.turnOff();
    speaker.turnOff();

    console.log(monitor);
    console.log(speaker);
    console.log(' ');
    console.log(' ');
})();
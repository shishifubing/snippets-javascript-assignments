function checkKey(key, object) {
    return (key in object);
}

class ComputerMonitor2 {
    constructor(name, brand, size = 0, resolution = [0, 0], refreshRate = 0, pluggedIn, turnedOn) {
        const description = 'A computer monitor is an output device that displays information in pictorial form. A monitor usually comprises the visual display, circuitry, casing, and power supply. The display device in modern monitors is typically a thin film transistor liquid crystal display with LED backlighting having replaced cold-cathode fluorescent lamp backlighting.';
        this.battery = false;
        this.name = name;
        this.description = description;
        this.brand = brand;
        this.size = size;
        this.resolution = resolution;
        this.refreshRate = refreshRate;
        this.pluggedIn = false;
        this.turnedOn = false;
    }
}

(() => {
    const monitor = new ComputerMonitor1(model = "27GN750-B", brand = "LG", size = 27, resolution = [1920, 1080], refreshRate = 240, pluggedIn = false, turnedOn = false);
    const key = 'brand';
    console.log('Task 2:');
    if (checkKey(key, monitor)) {
        console.log('The object has the key');
    } else {
        console.log('The object does not have the key');
    }
    console.log(' ');
    console.log(' ');
})();
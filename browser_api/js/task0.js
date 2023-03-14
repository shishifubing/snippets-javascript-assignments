(() => {
    //document.getElementById('main').appendChild(getTask());

    function getTask() {
        const task = document.createElement('div');
        task.setAttribute('id', 'task0');
        task.setAttribute('class', 'task bg-dark d-flex flex-column');
        task.innerHTML = '<h3>task 0</h3>';
        const content = document.createElement('div');
        content.setAttribute('id', 'task0-content');
        content.setAttribute('class', 'm-3 d-flex flex-column flex-lg-row');
        const form = document.createElement('div');
        form.setAttribute('id', 'task0-form');
        form.setAttribute('class', 'm-5 d-flex flex-column task-form');
        const button = document.createElement('button');
        button.innerHTML = 'Submit';
        button.setAttribute('id', 'task0-button');
        button.setAttribute('class', 'm-3 btn btn-secondary');
        button.addEventListener('click', () => submit());
        const output = document.createElement('div');
        output.setAttribute('id', 'task0-output');
        output.setAttribute('class', 'd-flex flex-row flex-grow-1 justify-content-center');

        task.appendChild(content);
        content.appendChild(form);
        content.appendChild(output);
        form.appendChild(button);
        return task;
    }

    function submit() {
        const output = document.getElementById('task0-output');
        clearChildren(output);
        const ns = 'http://www.w3.org/2000/svg';
        const chart = document.createElementNS(ns, 'svg');
        chart.setAttribute('class', 'chart');
        chart.setAttribute('width', '300');
        chart.setAttribute('height', '200');
        const line1 = document.createElementNS(ns, 'line');
        line1.setAttribute('style', 'stroke-width: 2;');
        line1.setAttribute('stroke', 'white');
        line1.setAttribute('x1', '0');
        line1.setAttribute('y1', '0');
        line1.setAttribute('x2', '0');
        line1.setAttribute('y2', '200');
        const line2 = document.createElementNS(ns, 'line');
        line2.setAttribute('style', 'stroke-width: 2;');
        line2.setAttribute('stroke', 'white');
        line2.setAttribute('x1', '0');
        line2.setAttribute('y1', '200');
        line2.setAttribute('x2', '300');
        line2.setAttribute('y2', '200');
        const polyline = document.createElementNS(ns, 'polyline');
        polyline.setAttribute('style', 'fill: none; stroke: white; stroke-width: 3');
        polyline.setAttribute('points', '0,200 30,100 60,150 90,50 120,140 150,140 180,120 210,140 300,0');
        chart.appendChild(line1);
        chart.appendChild(line2);
        chart.appendChild(polyline);

        output.appendChild(chart);
    }

    function clearChildren(parent) {
        //removes all children of a given parent element
        while (parent.lastChild) {
            parent.removeChild(parent.lastChild);
        }
    }
})();
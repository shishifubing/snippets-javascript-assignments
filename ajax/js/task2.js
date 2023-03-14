(() => {
    const jsonString =
        `{
    "list": [
    {
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
    },
    {
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
    }
    ]
    }`;
    const jsObject = JSON.parse(jsonString);
    const task = document.createElement('div');
    task.setAttribute('id', 'task2');
    task.setAttribute('class', 'task bg-dark');
    task.innerHTML = '<h3 class="text">task 2</h3>';
    task.innerHTML += '<p class="text">' + JSON.stringify(jsObject, null, 4); + '</p>';
    console.log('Task 2:');
    console.log(jsObject);
    document.getElementById('main').appendChild(task);
})();
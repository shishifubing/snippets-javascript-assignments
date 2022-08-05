(() => {
    document.getElementById('tasks').appendChild(getTask());

    function getTask() {
        const task = document.createElement('div');
        task.setAttribute('id', 'task2');
        task.setAttribute('class', 'd-flex flex-column');
        task.innerHTML = '<h3>task 2</h3>';
        const content = document.createElement('div');
        content.setAttribute('id', 'task2-content');
        content.setAttribute('class', 'm-3 d-flex flex-column flex-lg-row');
        const form = document.createElement('div');
        form.setAttribute('id', 'task2-form');
        form.setAttribute('class', 'm-5 d-flex flex-column');
        const button = document.createElement('button');
        button.setAttribute('id', 'task2-button');
        button.setAttribute('class', 'm-3 btn btn-secondary');
        button.addEventListener('click', () => submit());

        task.appendChild(content);
        content.appendChild(form);
        form.appendChild(button);
        button.appendChild(document.createTextNode('Submit'));

        return task;
    }

    function submit() {
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;
        const innerWidth = window.innerWidth;
        const innerHeight = window.innerHeight;
        const clientWidth = document.documentElement.clientWidth;
        const clientHeight = document.documentElement.clientHeight;

        alert('Screen size: ' + screenWidth + 'px / ' + screenHeight + 'px\nBrowser window size with the scroll bar: ' + innerWidth + 'px / ' + innerHeight + 'px\nBrowser window size without the scroll bar: ' + clientWidth + 'px / ' + clientHeight + 'px');
    }
})();
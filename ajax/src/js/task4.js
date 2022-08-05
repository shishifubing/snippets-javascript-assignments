(() => {
    document.getElementById('main').appendChild(getTask());
    document.getElementById('task4-input1').value = '100';
    document.getElementById('task4-input2').value = '100';
    submit();


    function getTask() {
        // returns the task4 node
        const task = document.createElement('div');
        task.setAttribute('id', 'task4');
        task.setAttribute('class', 'task bg-dark d-flex flex-column');
        task.innerHTML = '<h3 class="text">task 4</h3>';
        const content = document.createElement('div');
        content.setAttribute('id', 'task3-content');
        content.setAttribute('class', 'm-3 d-flex flex-column flex-lg-row flex-fill');
        const form = document.createElement('div');
        form.setAttribute('id', 'task4-form');
        form.setAttribute('class', 'm-5 d-flex flex-column');
        const field1 = document.createElement('div');
        field1.setAttribute('id', 'task4-field1');
        field1.setAttribute('class', 'd-flex flex-column');
        const input1 = document.createElement('input');
        input1.setAttribute('type', 'text');
        input1.setAttribute('id', 'task4-input1');
        input1.setAttribute('class', 'bg-dark text-light border-secondary');
        input1.setAttribute('placeholder', ' Enter a number');
        const label1 = document.createElement('label');
        label1.innerHTML = 'Enter a number between 100 and 300';
        label1.setAttribute('for', 'task4-input1');
        const field2 = document.createElement('div');
        field2.setAttribute('id', 'task4-field2');
        field2.setAttribute('class', 'd-flex flex-column');
        const input2 = document.createElement('input');
        input2.setAttribute('type', 'text');
        input2.setAttribute('id', 'task4-input2');
        input2.setAttribute('class', 'bg-dark text-light border-secondary');
        input2.setAttribute('placeholder', ' Enter a number');
        const button = document.createElement('button');
        button.innerHTML = 'Submit';
        button.setAttribute('id', 'task4-button');
        button.setAttribute('class', 'm-3 btn btn-secondary');
        button.addEventListener('click',
            () => { submit(); }
        );
        const imageWrapper = document.createElement('div');
        imageWrapper.setAttribute('id', 'task4-image');
        imageWrapper.setAttribute('class', 'd-flex flex-row flex-wrap');

        task.appendChild(content);
        content.appendChild(form);
        content.appendChild(imageWrapper);
        form.appendChild(field1);
        form.appendChild(field2);
        form.appendChild(button);
        field1.appendChild(label1);
        field1.appendChild(input2);
        field1.appendChild(input1);
        return task;
    }

    function submit() {
        //when the task4-button is pressed, a request using a number from the user input will be sent
        //if the input is not valid shows error message
        const number1 = parseInt(document.getElementById('task4-input1').value);
        const number2 = parseInt(document.getElementById('task4-input2').value);
        clearInput();
        if (!isNaN(number1) && !isNaN(number2)
            && number1 >= 100 && number2 >= 100
            && number1 <= 300 && number2 <= 300) {
            showMessage('loading');
            request('https://picsum.photos/' + number1 + '/' + number2);
        } else {
            showMessage('одно из чисел вне диапазона от 100 до 300');
        }
    }

    function request(url) {
        //sending actual request
        fetch(url)
            .then(response => {
                console.log('Task 4:');
                console.log(response);
                return response.blob();
            }).then(image => {
                const imageUrl = URL.createObjectURL(image);
                displayResults(imageUrl);
            })
    }

    function displayResults(imageUrl) {
        //adds the response to the DOM
        clearChildren(document.getElementById('task4-image'));
        const card = document.getElementById('task4-image');
        card.setAttribute('class', 'm-2 card bg-dark');
        const image = document.createElement('img');;
        image.setAttribute('src', imageUrl);
        image.setAttribute('class', 'card-img-top p-2');
        image.setAttribute('style', 'object-fit: scale-down; max-height: 300px; width: auto;');
        card.appendChild(image);
        clearInput();
    }

    function clearChildren(parent) {
        //removes all children of a given parent element
        while (parent.lastChild) {
            parent.removeChild(parent.lastChild);
        }
    }

    function clearInput() {
        document.getElementById('task4-input1').value = '';
        document.getElementById('task4-input2').value = '';
    }

    function showMessage(message) {
        clearChildren(document.getElementById('task4-image'));
        const text = document.createElement('p');
        text.setAttribute('class', 'text');
        text.appendChild(document.createTextNode(message));
        document.getElementById('task4-image').appendChild(text);
    }
})();
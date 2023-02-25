(() => {
    document.getElementById('main').appendChild(getTask());

    if (window.localStorage.getItem('task5-cards')) {
        console.log('Task 5: local storage was used');
        document.getElementById('task5-cards').innerHTML = window.localStorage.getItem('task5-cards');
    } else {
        document.getElementById('task5-input1').value = '5';
        document.getElementById('task5-input2').value = '7';
    }

    function getTask() {
        // returns the task4 node
        const task = document.createElement('div');
        task.setAttribute('id', 'task5');
        task.setAttribute('class', 'task bg-dark d-flex flex-column');
        task.innerHTML = '<h3>task 5</h3>';
        const content = document.createElement('div');
        content.setAttribute('id', 'task3-content');
        content.setAttribute('class', 'm-3 d-flex flex-column flex-lg-row flex-fill');
        const form = document.createElement('div');
        form.setAttribute('id', 'task5-form');
        form.setAttribute('class', 'm-5 d-flex flex-column');
        const field1 = document.createElement('div');
        field1.setAttribute('id', 'task5-field1');
        field1.setAttribute('class', 'd-flex flex-column');
        const label1 = document.createElement('label');
        label1.innerHTML = 'номер страницы';
        label1.setAttribute('for', 'task5-input1');
        const input1 = document.createElement('input');
        input1.setAttribute('type', 'text');
        input1.setAttribute('id', 'task5-input1');
        input1.setAttribute('class', 'bg-dark text-light border-secondary');
        input1.setAttribute('placeholder', ' Enter a number');
        const field2 = document.createElement('div');
        field2.setAttribute('id', 'task5-field2');
        field2.setAttribute('class', 'd-flex flex-column');
        const label2 = document.createElement('label');
        label2.innerHTML = 'лимит<br>';
        label2.setAttribute('for', 'task5-input2');
        const input2 = document.createElement('input');
        input2.setAttribute('type', 'text');
        input2.setAttribute('id', 'task5-input2');
        input2.setAttribute('class', 'bg-dark text-light border-secondary');
        input2.setAttribute('placeholder', ' Enter a number');
        const button = document.createElement('button');
        button.innerHTML = 'запрос';
        button.setAttribute('id', 'task5-button');
        button.setAttribute('class', 'm-3 btn btn-secondary');
        const cards = document.createElement('div');
        cards.setAttribute('id', 'task5-cards');
        cards.setAttribute('class', 'd-flex flex-row flex-wrap');

        task.appendChild(content);
        content.appendChild(form);
        content.appendChild(cards);
        form.appendChild(field1);
        form.appendChild(field2);
        field1.appendChild(label1);
        field1.appendChild(input1);
        field2.appendChild(label2);
        field2.appendChild(input2);
        form.appendChild(button);
        button.addEventListener('click',
            () => { submit(); }
        );
        return task;
    }

    function submit() {
        //when the task5-button is pressed, a request using a number from the user input will be sent
        //if the input is not valid shows error message
        const input1 = parseInt(document.getElementById('task5-input1').value);
        const input2 = parseInt(document.getElementById('task5-input2').value);
        let input1IsNotSuitable;
        let input2IsNotSuitable;
        clearInput();
        clearChildren(document.getElementById('task5-cards'));
        if (isNaN(input1) || input1 < 1 || input1 > 10) {
            input1IsNotSuitable = true;
        }
        if (isNaN(input2) || input2 < 1 || input2 > 10) {
            input2IsNotSuitable = true;
        }
        if (input1IsNotSuitable && input2IsNotSuitable) {
            showMessage5('Номер страницы и лимит вне диапазона от 1 до 10');
        } else if (input1IsNotSuitable) {
            showMessage5('Номер страницы вне диапазона от 1 до 10');
        } else if (input2IsNotSuitable) {
            showMessage5('Лимит вне диапазона от 1 до 10');
        } else {
            request5('https://picsum.photos/v2/list?page=' + input1 + '&limit=' + input2);
        }
    }

    function request5(url) {
        //sending actual request
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function () {
            if (xhr.status != 200) {
                console.log('status: ', xhr.status);
            } else {
                const result = JSON.parse(xhr.response);
                console.log('Task 5:');
                console.log(result);
                displayResults5(result);
            }
        };
        xhr.onerror = function () {
            console.log('Error! status: ', xhr.status);
        };
        xhr.send();
    };
    function displayResults5(json) {
        //adds the response to the DOM and saves it to the local storage
        clearChildren(document.getElementById('task5-cards'));
        const cards = document.getElementById('task5-cards');
        json.forEach((item) => {
            const card = document.createElement('div');
            card.setAttribute('class', 'm-2 card bg-secondary');
            const image = document.createElement('img');
            image.setAttribute('src', item.download_url);
            image.setAttribute('class', 'card-img-top pt-2');
            image.setAttribute('style', 'object-fit: scale-down; height: 100px; width: auto;');
            const cardBody = document.createElement('div');
            cardBody.setAttribute('class', 'card-body');
            const cardTitle = document.createElement('p');
            cardTitle.setAttribute('class', 'card-title');
            cardTitle.innerHTML = item.author;

            card.appendChild(image);
            card.appendChild(cardBody);
            cardBody.appendChild(cardTitle);
            cards.appendChild(card);

        });
        window.localStorage.setItem("task5-cards", document.getElementById('task5-cards').innerHTML);
    }

    function clearChildren(parent) {
        while (parent.lastChild) {
            parent.removeChild(parent.lastChild);
        }
    }

    function clearInput() {
        document.getElementById('task5-input1').value = '';
        document.getElementById('task5-input2').value = '';
    }

    function showMessage5(message) {
        clearChildren(document.getElementById('task5-cards'));
        const text = document.createElement('p');
        text.appendChild(document.createTextNode(message));
        document.getElementById('task5-cards').appendChild(text);
    }
})();
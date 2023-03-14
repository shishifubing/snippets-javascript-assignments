(() => {
  document.getElementById("tasks").appendChild(getTask());
  const webSocket = createWebSocket("wss://echo.webSocket.org/");

  function getTask() {
    const task = document.createElement("div");
    task.setAttribute("id", "task3");
    task.setAttribute("class", "rounded-30 bg-dark d-flex flex-column");
    task.innerHTML = "<h3>task 3</h3>";
    const content = document.createElement("div");
    content.setAttribute("id", "task3-content");
    content.setAttribute(
      "class",
      "m-3 p-3 messages rounded-30 border border-secondary bg-secondary d-flex flex-column justify-content-center"
    );
    const form = document.createElement("div");
    form.setAttribute("id", "task3-form");
    form.setAttribute("class", "d-flex flex-row flex-nowrap md-form");
    const input = document.createElement("textarea");
    input.setAttribute("id", "task3-input");
    input.setAttribute(
      "class",
      "my-1 mx-1 mx-0 md-textarea form-control bg-dark text-light rounded-3 border-0"
    );
    input.setAttribute("rows", "1");
    input.setAttribute("placeholder", "Message");
    const buttons = document.createElement("div");
    buttons.setAttribute("class", "d-flex flex-column");
    const buttonSubmit = document.createElement("buttonSubmit");
    buttonSubmit.setAttribute("id", "task3-buttonSubmit-geolocation");
    buttonSubmit.setAttribute("class", "my-1 mx-1 btn btn-dark rounded-30");
    buttonSubmit.addEventListener("click", () => submit());
    buttonSubmit.appendChild(document.createTextNode("submit"));
    const buttonGeolocaton = document.createElement("buttonSubmit");
    buttonGeolocaton.setAttribute("id", "task3-buttonSubmit-geolocation");
    buttonGeolocaton.setAttribute(
      "class",
      "my-1 mx-1 btn btn-dark rounded-30"
    );
    buttonGeolocaton.addEventListener("click", () => submit("location"));
    buttonGeolocaton.appendChild(document.createTextNode("locaton"));
    const output = document.createElement("div");
    output.setAttribute("id", "task3-output");
    output.setAttribute(
      "class",
      "d-flex flex-column p-3 my-3 bg-dark outline-secondary"
    );

    task.appendChild(content);
    content.appendChild(output);
    content.appendChild(form);
    form.appendChild(input);
    form.appendChild(buttons);
    buttons.appendChild(buttonGeolocaton);
    buttons.appendChild(buttonSubmit);
    return task;
  }

  function createWebSocket(uri) {
    let webSocket = new WebSocket(uri);
    webSocket.onopen = function () {
      sendMessage("CONNECTED");
    };
    webSocket.onclose = function () {
      sendMessage("DISCONNECTED");
    };
    webSocket.onmessage = function (event) {
      if (event.data !== "location") {
        sendMessage(event.data);
      } else {
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition((position) => {
            const { coords } = position;
            sendMessage(
              "https://www.openstreetmap.org/#map=4/" +
                coords.latitude +
                "/" +
                coords.longitude,
              2
            );
          });
        }
      }
    };
    webSocket.onerror = function (event) {
      sendMessage("ERROR: " + event.data);
    };
    return webSocket;
  }

  function sendMessage(text, type) {
    document
      .getElementById("task3-output")
      .appendChild(getMessage(text, type));
  }

  function getMessage(text, type = 0) {
    let justify;
    let tag = "p";
    switch (type) {
      case 0:
        justify = "justify-content-start";
        break;
      case 1:
        justify = "justify-content-end";
        break;
      case 2:
        tag = "a";
        break;
    }
    const messageNode = document.createElement("div");
    messageNode.setAttribute(
      "class",
      `d-flex flex-row flex-wrap ${justify} my-1 `
    );
    const message = document.createElement(`${tag}`);
    message.setAttribute(
      "class",
      "p-1 message bg-secondary text-light rounded-3"
    );
    if (tag === "a") {
      message.setAttribute("href", text);
    }
    messageNode.appendChild(message);
    message.appendChild(document.createTextNode(text));
    return messageNode;
  }

  function submit(text) {
    let input;
    if (text) {
      input = text;
    } else {
      input = document.getElementById("task3-input").value;
    }
    clearInput();
    if (input.replace(/\s/g, "").length) {
      sendMessage(input, 1);
      webSocket.send(input);
    }
  }

  function clearInput() {
    document.getElementById("task3-input").value = "";
  }
})();

const selectFirstChild = () => {
    const list = document.getElementById("list");
    // Получение первого дочернего элемента в списке.
    const child = list.firstElementChild;
    if (child != null) {
        // добавление атрибута style="color:red" для выбранного элемента.
        child.setAttribute("style", "color:red;");
    }
}

const selectLastChild = () => {
    const list = document.getElementById("list");
    // Получение последнего дочернего элемента в списке.
    const child = list.lastChild;
    if (child != null) {
        child.setAttribute("style", "color:red;");
    }
}

let node = null;

const selectNextNode = () => {
    debugger
    resetColor();
    if (node == null) {
        const list = document.getElementById("list");
        node = list.firstChild;
        node.setAttribute("style", "color:red");
        return;
    }
    // Получение следующего элемента, которые в дереве находиться на одном уровне.
    node = node.nextSibling;
    if (node != null) {
        node.setAttribute("style", "color:red");
    }
}

const selectPrevNode = () => {
    resetColor();
    if (node == null) {
        const list = document.getElementById("list");
        node = list.lastChild;
        node.setAttribute("style", "color:red");
        return;
    }
    // Получение предыдущего элемента, которые в дереве находиться на одном уровне.
    node = node.previousSibling;
    if (node != null) {
        node.setAttribute("style", "color:red");
    }
}

const resetColor = () => {
    const liList = document.querySelectorAll("li");
    liList.forEach(element => {
        element.style.color = "black"
        //element.setAttribute("style", "color:black");
    });
}

const createNewChild = () => {
    const list = document.getElementById("list");
    // создание элемента li
    const item = document.createElement("li");
    item.innerHTML = "NEW ITEM";
    // добавление созданного элемента в конце.
    list.append(item);
}

const removeLastChild = () => {
    const list = document.getElementById("list");
    const item = list.lastChild;
    if (item != null) {
        // удаление выбранного элемента из дерева.
        item.remove();
    }
}

const createNewChildAtStart = () => {
    const list = document.getElementById("list");
    const item = document.createElement("li");
    item.innerHTML = "NEW ITEM";
    if (list.firstChild != null) {
        // вставка элемента перед указанным элементом.
        list.insertBefore(item, list.firstChild);
    }
}

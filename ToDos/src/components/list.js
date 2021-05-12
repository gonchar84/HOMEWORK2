class List {
    render(tasks = []) {
      let parent = document.querySelector("body > div > div:nth-child(4) > ul");
      // удаляем весь html в теге
      parent.innerHTML = '';
  
      let todosList = [...tasks];
  
      for(let i=0; i < todosList.length; i++) {
  
        let todo = todosList[i]; // помещаем задачу в переменную { name: 'task1', key: 1, status: 'overdue' }

         // создаем таги
      let li = document.createElement("li");
      let div = document.createElement("div");
      let input = document.createElement("input");
      let span = document.createElement("span");
      let button = document.createElement("button");


      button.onclick =  (event) => {
        let element = event && event.currentTarget || event.target;
        let position = [...element.offsetParent.parentNode.children].indexOf(element.offsetParent);
        this.callback(position);
      }

       // создаем таг li
       div.classList.add('todo');

       // добаляем атрибут type
       input.setAttribute('type', 'checkbox');
       input.classList.add('toggle');
 
       // добаляем текст
       span.innerHTML = `<div>${todo.name}</div>`;
 
       // добаляем класс
       button.classList.add('destroy');
 
       // всталяем сразу все элементы по очереди
       div.append(input, span, button);
 
       // всталяем div
       li.appendChild(div);
 
       // добавляем событие по клику
       li.onclick = function () {
         // добавляем класс completed
         li.classList.add('completed');
       }

       // добавляем событие по двойному клику
      li.ondblclick = function () {
        // удаляем класс completed
        li.classList.remove('completed');
      }

      // добавляем событие при наведение курсора
      li.onmouseover = function () {
        // добавляем рамку
        li.style.border = '1px solid green';
      }

      // добавляем событие когда курсор уходит с элемента
      li.onmouseout = function () {
        // удаляем рамку
        li.style.border = '';
      }

      // вставляем таг
      parent.appendChild(li);
    }
  }
}

export default List;
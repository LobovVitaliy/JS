function View(templateId, containerId) {
  this.templateId = templateId || "task-template";
  this.containerId = containerId || "tasks-block";

  this.template = document.getElementById(this.templateId).innerHTML;
  this.container = document.getElementById(this.containerId);
  this.children = this.container.children;
}
View.prototype.addTask = function(task) {
  var data = {
    content: task.content,
    class: task.status ? "btn-ready" : "btn-not-ready",
    status: task.status
  };
  this.render(data);
};
View.prototype.render = function(data) {
  this.container.innerHTML += Mustache.render(this.template, { task: data });
};
View.prototype.editTask = function(index) {
  var input = this.children[index].querySelector("input[type=text]");
  input.readOnly = false;
  input.style.boxShadow = "inset 0 0 25px 1px #fff2c3";
  var len = input.value.length;
  input.setSelectionRange(len, len);
  input.focus();
};
View.prototype.saveTask = function(index) {
  var input = this.children[index].querySelector("input[type=text]");
  var value = input.value.trim();
  input.setAttribute("value", value);
  input.value = value;
  input.readOnly = true;
  input.style.boxShadow = "none";
  return value;
};
View.prototype.deleteTask = function(index) {
  this.children[index].remove();
};
View.prototype.doneTask = function(index) {
  var btn = this.children[index].querySelector(".button-field input");
  var status = btn.dataset.status === "true" ? false : true;
  btn.className = status ? "btn-ready" : "btn-not-ready";
  btn.dataset.status = status;
  return status;
};
View.prototype.deleteAll = function() {
  var blocks = [].slice.call(this.children);
  blocks.forEach(function(block) {
    block.remove();
  });
};

function Controller(view, model) {
  var self = this;

  this.view = view || new View();
  this.model = model || new Model();

  this.events = {
    edit: function(index) {
      self.view.editTask(index);
    },
    save: function(index) {
      var value = self.view.saveTask(index);
      self.model.editTask(index, value);
    },
    delete: function(index) {
      self.view.deleteTask(index);
      self.model.deleteTask(index);
    },
    done: function(index) {
      var value = self.view.doneTask(index);
      self.model.doneTask(index, value);
    }
  };

  this.init();
}
Controller.prototype.init = function() {
  this.fillTasksFromLocalStorage();
  this.bindEventToClearTasks();
  this.bindEventToClearStorage();
  this.bindEventToAddTask();
  this.bindEvents();
};
Controller.prototype.fillTasksFromLocalStorage = function() {
  var self = this;
  var tasks = this.model.takeFromLocalStorage();

  tasks.forEach(function(t) {
    var task = new Task(t.content, t.status);
    self.view.addTask(task);
    self.model.addTask(task);
  });
};
Controller.prototype.bindEventToClearTasks = function() {
  var self = this;
  document.getElementById("clear-tasks").addEventListener("click", function() {
    self.view.deleteAll();
    self.model.deleteAll();
  });
};
Controller.prototype.bindEventToClearStorage = function() {
  var self = this;
  document.getElementById("clear-storage").addEventListener("click", function() {
    self.model.clearLocalStorage();
  });
};
Controller.prototype.bindEventToAddTask = function() {
  var self = this;
  var input = document.getElementById("new-task");

  document.getElementById("add-task").addEventListener("click", function() {
    var task = new Task(input.value);
    input.value = "";
    self.view.addTask(task);
    self.model.addTask(task);
  });
};
Controller.prototype.bindEvents = function() {
  var self = this;
  var container = this.view.container;

  container.addEventListener('click', function(event) {
    var target = event.target;
    var action = target.getAttribute('data-action');
    if (action) {
      var index = self.getIndex(container, target);
      self.events[action](index);
    }
  });
};
Controller.prototype.getIndex = function(container, element) {
  while (element.parentElement.id !== container.id) {
    element = element.parentElement;
  }
  var blocks = [].slice.call(container.children);
  return blocks.indexOf(element);
};

function Model(name) {
  this.name = name || "app";
  this.tasks = [];
}
Model.prototype.addTask = function(task) {
  this.tasks.push(task);
  this.saveToLocalStorage();
};
Model.prototype.editTask = function(index, value) {
  this.tasks[index].setContent(value);
  this.saveToLocalStorage();
};
Model.prototype.deleteTask  = function(index) {
  this.tasks.splice(index, 1);
  this.saveToLocalStorage();
};
Model.prototype.doneTask  = function(index, value) {
  this.tasks[index].setStatus(value);
  this.saveToLocalStorage();
};
Model.prototype.deleteAll = function() {
  this.tasks = [];
};
Model.prototype.saveToLocalStorage = function() {
  var serializeObj = JSON.stringify(this.tasks);
  localStorage.setItem(this.name, serializeObj);
};
Model.prototype.takeFromLocalStorage = function() {
  var data = localStorage[this.name];
  return data ? JSON.parse(data) : [];
};
Model.prototype.clearLocalStorage = function() {
  localStorage.removeItem(this.name);
};

function Task(content, status) {
  this.content = content ? content.trim() : "";
  this.status = status || false;
}
Task.prototype.setContent = function(content) {
  this.content = content.trim();
};
Task.prototype.setStatus = function(status) {
  this.status = status;
};

function App(name) {
  this.name = name || "app";
  var controller = new Controller();
}

var app = new App();

function View() {
  var container = document.getElementById("flex-container");
  this.block1 = container.children[0];
  this.block2 = container.children[1];
  this.block3 = container.children[2];
  this.buttons = {};
}
///// Event: Add
View.prototype.eventAdd = function(errors) {
  this.setOkFields(errors);
  this.setErrorFields(errors);

  this.setBtnAddStatus(false);
  this.setBtnEditStatus(true);
  this.setBtnCancelStatus(false);
  this.setBtnSaveStatus(false);
  this.setBtnPlayStatus(true);
};
View.prototype.setOkFields = function(errors) {
  var self = this;
  var inputs = this.block2.querySelectorAll("input[type=text]");
  inputs.forEach(function(input) {
    self.changeClass(input, "input-ok", "input-error");
  });
  var labels = this.block2.querySelectorAll(".error");
  labels.forEach(function(label) {
    label.textContent = errors[label.dataset.key].ok;
  });
};
View.prototype.setErrorFields = function(errors) {
  var self = this;
  var inputs = this.block1.querySelectorAll("input[type=text]");
  inputs.forEach(function(input) {
    self.changeClass(input, "input-error", "input-ok");
    input.value = "";
  });
  var labels = this.block1.querySelectorAll(".error");
  labels.forEach(function(label) {
    label.textContent = errors[label.dataset.key].empty;
  });
};
///// Events: Edit-Cancel-Save
View.prototype.eventEdit = function() {
  this.setBtnEditStatus(false);
  this.setBtnCancelStatus(true);
  this.setBtnSaveStatus(true);
};
View.prototype.eventCancel = function() {
  this.setBtnEditStatus(true);
  this.setBtnCancelStatus(false);
  this.setBtnSaveStatus(false);
};
View.prototype.eventSave = function() {
  this.setBtnEditStatus(true);
  this.setBtnCancelStatus(false);
  this.setBtnSaveStatus(false);
};
///// Event: Play
View.prototype.eventPlay = function() {};

///// Set status for button
View.prototype.setBtnAddStatus = function(status) {
  this.setButtonStyle(this.block1, "add", status);
};
View.prototype.setBtnEditStatus = function(status) {
  this.setButtonStyle(this.block2, "edit", status);
};
View.prototype.setBtnCancelStatus = function(status) {
  this.setButtonStyle(this.block2, "cancel", status);
};
View.prototype.setBtnSaveStatus = function(status) {
  this.setButtonStyle(this.block2, "save", status);
};
View.prototype.setBtnPlayStatus = function(status) {
  this.setButtonStyle(this.block3, "play", status);
};
View.prototype.setButtonStyle = function(block, action, status) {
  if (this.buttons[action] !== status) {
    var btn = block.querySelector("input[data-action=" + action + "]");
    var added = status ? "btn-on" : "btn-off";
    var removed = status ? "btn-off" : "btn-on";
    this.changeClass(btn, added, removed);
    this.buttons[action] = status;
  }
};

///// Set style for selected field
View.prototype.setFieldChanges = function(info, errorInfo) {
  this.setLabelText(info.block, info.key, errorInfo.message);
  this.setInputStyle(info.block, info.key, errorInfo.isError);
};
View.prototype.setLabelText = function(block, key, message) {
  var label = block.querySelector("label[data-key=" + key + "]");
  label.textContent = message;
};
View.prototype.setInputStyle = function(block, key, isError) {
  var input = block.querySelector("input[data-key=" + key + "]");
  if (isError) {
    this.changeClass(input, "input-error", "input-ok");
  } else {
    this.changeClass(input, "input-ok", "input-error");
  }
};

View.prototype.changeClass = function(element, added, removed) {
  element.classList.add(added);
  element.classList.remove(removed);
};

///// Set/Get Person
View.prototype.setNewPerson = function(person) {
  this.setPerson(this.block2, person, false);
};
View.prototype.setWinner = function(person) {
  this.setPerson(this.block3, person, true);
};
View.prototype.setPerson = function(block, person, readOnly) {
  var inputs = block.querySelectorAll("input[type=text]");
  inputs.forEach(function(input) {
    input.value = person[input.dataset.key];
    input.readOnly = readOnly;
  });
};
View.prototype.getPerson = function(block) {
  var person = {};
  var inputs = block.querySelectorAll("input[type=text]");
  inputs.forEach(function(input) {
    person[input.dataset.key] = input.value;
  });
  return person;
};

function Controller(view, model) {
  var self = this;

  this.view = view || new View();
  this.model = model || new Model();

  this.errorsInfo = {
    name: {
      ok: "",
      empty: "Введите имя!",
      short: "Слишком короткое имя!",
      error: "Некорректный ввод",
      regExp: /^[а-яёА-ЯЁЇїІіЄєҐґa-zA-Z`'-]+$/
    },
    surname: {
      ok: "",
      empty: "Введите фамилию!",
      short: "Слишком короткая фамилия!",
      error: "Некорректный ввод!",
      regExp: /^[а-яёА-ЯЁЇїІіЄєҐґa-zA-Z`'-]+$/
    },
    mail: {
      ok: "",
      empty: "Введите электронный адрес!",
      short: "",
      error: "Некорректный ввод!",
      regExp: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    phone: {
      ok: "",
      empty: "Введите номер телефона!",
      short: "",
      error: "Некорректный ввод!",
      regExp: /^\(\d{3}\) \d{3}-\d{2}-\d{2}$/
    }
  };

  this.inputEvents = {
    verifyNewInputs: function(info) {
      var status = self.verifyAndGetStatus(info);
      self.view.setBtnAddStatus(status);
    },
    verifyEditInputs: function(info) {
      var status = self.verifyAndGetStatus(info);
      self.view.setBtnEditStatus(status);
      self.view.setBtnCancelStatus(false);
      self.view.setBtnSaveStatus(false);
    }
  };

  this.buttonEvents = {
    add: function(block) {
      var person = self.view.getPerson(block);
      self.view.eventAdd(self.errorsInfo);
      self.view.setNewPerson(person);
      self.model.addPerson(person);
    },
    edit: function(block) {
      var person = self.view.getPerson(block);
      self.view.eventEdit();
      self.model.setCurrent(person);
    },
    cancel: function(block) {
      var person = self.model.getLastPerson();
      self.view.eventCancel();
      self.view.setNewPerson(person);
    },
    save: function(block) {
      self.view.eventSave();
      self.model.saveCurrent();
    },
    play: function(block) {
      var person = self.model.getRandomPerson();
      if (person) {
        self.view.setWinner(person);
      }
    }
  };

  this.init();
}

Controller.prototype.init = function() {
  this.model.fillFromLocalStorage();
  if (this.model.getCount() > 0) {
    this.view.setBtnPlayStatus(true);
  }
  this.initEventListeners();
};
Controller.prototype.initEventListeners = function() {
  this.bindEventToShowCount();
  this.bindEventToClearPersons();
  this.bindEventToClearStorage();
  this.bindEvents();
};
Controller.prototype.bindEventToShowCount = function() {
  var self = this;
  document.getElementById("count").addEventListener("click", function() {
    alert("Всего участников: " + self.model.getCount());
  });
};
Controller.prototype.bindEventToClearPersons = function() {
  var self = this;
  document.getElementById("clear-persons").addEventListener("click", function() {
    self.view.setBtnPlayStatus(false);
    self.model.deleteAllPersons();
    alert("Всего участников: " + self.model.getCount());
  });
};
Controller.prototype.bindEventToClearStorage = function() {
  var self = this;
  document.getElementById("clear-storage").addEventListener("click", function() {
    self.model.clearLocalStorage();
    if (!localStorage[self.model.name]) {
      alert("Выполнено!");
    }
  });
};
Controller.prototype.bindEvents = function() {
  var block1 = this.view.block1;
  var block2 = this.view.block2;
  var block3 = this.view.block3;

  this.bindInputEvent(block1, this.inputEvents.verifyNewInputs);
  this.bindInputEvent(block2, this.inputEvents.verifyEditInputs);

  var events = this.buttonEvents;
  this.bindButtonEvent(block1, events);
  this.bindButtonEvent(block2, events);
  this.bindButtonEvent(block3, events);
};
Controller.prototype.bindInputEvent = function(block, callback) {
  var inputs = block.querySelectorAll("input[type=text]");
  inputs.forEach(function(input) {
    input.addEventListener('keyup', function() {
      var key = input.dataset.key;
      callback({
        block: block,
        key: key,
        value: input.value
      });
    });
  });
};
Controller.prototype.bindButtonEvent = function(block, events) {
  var btns = this.view.buttons;
  var buttons = block.querySelectorAll("input[type=button]");
  buttons.forEach(function(btn) {
    var action = btn.dataset.action;
    btns[action] = false;
    btn.addEventListener('click', function() {
      if (btns[action]) {
        events[action](block);
      }
    });
  });
};

Controller.prototype.check = function(value, info) {
  var errorInfo = {
    message: info.ok,
    isError: false
  };
  if (value === "") {
    errorInfo.message = info.empty;
    errorInfo.isError = true;
  } else if (!info.regExp.test(value)) {
    errorInfo.message = info.error;
    errorInfo.isError = true;
  } else if (value.length < 2) {
    errorInfo.message = info.short;
    errorInfo.isError = true;
  }
  return errorInfo;
};
Controller.prototype.checkAll = function(block) {
  var person = this.view.getPerson(block);
  var status = true;
  for (var key in person) {
    var currentInfo = this.check(person[key], this.errorsInfo[key]);
    if (currentInfo.isError) {
      status = false;
      break;
    }
  }
  return status;
};
Controller.prototype.verifyAndGetStatus = function(info) {
  var errorInfo = this.check(info.value, this.errorsInfo[info.key]);
  this.view.setFieldChanges(info, errorInfo);
  return this.checkAll(info.block);
};

function Model(name) {
  this.name = name || "app";
  this.persons = [];
  this.current = {};
}
Model.prototype.getCount = function() {
  return this.persons.length;
};
Model.prototype.addPerson = function(person) {
  this.persons.push(person);
  this.saveToLocalStorage();
};
Model.prototype.setCurrent = function(person) {
  this.current = person;
};
Model.prototype.getLastPerson = function() {
  var count = this.getCount();
  if (count > 0) {
    return this.persons[count - 1];
  }
};
Model.prototype.saveCurrent = function() {
  var count = this.getCount();
  if (count > 0) {
    this.persons[count - 1] = this.current;
    this.saveToLocalStorage();
  }
};
Model.prototype.getRandomPerson = function() {
  var count = this.getCount();
  if (count > 0) {
    // var index = Math.round(Math.random() * (count - 1));
    var index = Math.round(Math.random() * (count) - 0.5);
    // https://learn.javascript.ru/number#случайное-целое-от-min-до-max
    return this.persons[index];
  }
};

Model.prototype.deleteAllPersons = function() {
  this.persons = [];
};
Model.prototype.saveToLocalStorage = function() {
  var serializeObj = JSON.stringify(this.persons);
  localStorage.setItem(this.name, serializeObj);
};
Model.prototype.fillFromLocalStorage = function() {
  var self = this;
  var data = localStorage[this.name];

  if (!!data) {
    var persons = JSON.parse(data);
    persons.forEach(function(p) {
      var person = new Person(p.name, p.surname, p.mail, p.phone);
      self.persons.push(person);
    });
  }
};
Model.prototype.clearLocalStorage = function() {
  localStorage.removeItem(this.name);
};

function Person(name, surname, mail, phone) {
  this.name = name || "";
  this.surname = surname || "";
  this.mail = mail || "";
  this.phone = phone || "";
}

function App(name) {
  this.name = name || "app";
  var controller = new Controller();
}

var app = new App();

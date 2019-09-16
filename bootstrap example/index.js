import C_Gantt from "carmelo-gantt-core/index";

require("./node_modules/bootstrap/dist/css/bootstrap.min.css");
require("./node_modules/bootstrap/dist/js/bootstrap.bundle");

const tasks = [
  {
    id: 1,
    name: 'Hiring an event organizer',
    start_date: '2016-02-28',
    end_date: '2016-03-01',
    status: 2
  },
  {
    id: 2,
    name: 'The choice of design',
    start_date: '2016-03-01',
    end_date: '2016-03-03',
    status: 3
  },
  {
    id: 3,
    name: 'Hiring a publicist',
    start_date: '2016-03-04',
    end_date: '2016-03-04',
    status: 1
  },
  {
    id: 4,
    name: 'Hiring a designer',
    start_date: '2016-03-05',
    end_date: '2016-03-06',
    status: 0
  }
];

const statuses = {
  0: "active",
  1: "pending",
  2: "inactive",
  3: "done"
};

const container = document.querySelector("#svg");

let editTaskHandler = (e, self) => {
  let target = e.target;
  if (
    target.classList.contains("c-gantt__cell") ||
    target.classList.contains("c-gantt__task")
  ) 
  {
    target.setAttribute('data-toggle', 'modal');
    target.setAttribute('data-target', '#modalCenter');

    let task_no = target.row;
    let cur_task = self.tasks[task_no];
    let form = document.querySelector(".task-form");
    let submit_button = document.querySelector(".button__submit");
    let header = document.querySelector("#modalCenterTitle");
    let cancel_button = document.querySelector(".button__cancel");

    header.textContent = "Edit Task";
    submit_button.textContent = "Edit";

    form.elements[0].value = self.tasks[task_no].name;
    form.elements[1].value = cur_task.start_date;
    form.elements[2].value = cur_task.end_date;
    form.elements[3].value = self.tasks[task_no].status;

    let formSubmitHandler = () => {
      let new_task = {};

      new_task.id = cur_task.id;
      new_task.name = form.elements[0].value;
      new_task.start_date = form.elements[1].value;
      new_task.end_date = form.elements[2].value;
      new_task.status = form.elements[3].value;

      self.updateTask(new_task);
      
      self.main.remove();
      self.draw();

      submit_button.removeEventListener("click", formSubmitHandler);
    };

    let cancelHandler = () => {
      cancel_button.removeEventListener("click", cancelHandler);
      submit_button.removeEventListener("click", formSubmitHandler);
    };

    submit_button.addEventListener("click", formSubmitHandler);
    cancel_button.addEventListener("click", cancelHandler);  
  }
}

const ganttPresetup = {
  items: tasks,
  statuses: statuses,
  dayOffs: [0],
  headerWidth: 400,
  headerHeight: 50,
  cellHeight: 30,
  cellWidth: 90,
  container: container,
  selectTask: editTaskHandler,
  layout: 'svg',
  common_class: 'common_class',
  left_side_class: 'left_side',
  right_side_class: 'right_side',
  row_class: 'row',
  cell_class: 'cell'
}

let gantt = new C_Gantt(ganttPresetup);
gantt.draw();

let button = document.querySelector('.add-task');
button.addEventListener('click', () => {
  let form = document.querySelector(".task-form");
  let submit_button = document.querySelector(".button__submit");
  let header = document.querySelector("#modalCenterTitle");
  let cancel_button = document.querySelector(".button__cancel");
  
  header.textContent = "Add new Task";
  submit_button.textContent = "Add";

  form.elements[0].value = "";
  form.elements[1].value = "";
  form.elements[2].value = "";
  form.elements[3].value = 0;

  let formSubmitHandler = () => {
    let new_task = {};

    new_task.id = gantt.tasks.length + 1;
    new_task.name = form.elements[0].value;
    new_task.start_date = form.elements[1].value;
    new_task.end_date = form.elements[2].value;
    new_task.status = form.elements[3].value;

    gantt.updateTask(new_task);

    gantt.main.remove();
    gantt.draw();

    submit_button.removeEventListener("click", formSubmitHandler);
  };

  let cancelHandler = () => {
    submit_button.removeEventListener("click", formSubmitHandler);
  };

  submit_button.addEventListener("click", formSubmitHandler);
  cancel_button.addEventListener("click", cancelHandler);
});
import classList from "classlist-polyfill";
import remove from "element-remove";
import findIndex from "array-findindex-polyfill";

import style from "./main.scss";

export default class C_Gantt {
  constructor(preSetup) {
    this.tasks = preSetup.items;
    this.dayOffs = preSetup.dayOffs || [0];
    this.statuses = preSetup.statuses;
    this.CELL_HEIGHT = preSetup.cellHeight || 30;
    this.CELL_WIDTH = preSetup.cellWidth || 90;
    this.HEADER_COLUMN_WIDTH = preSetup.headerWidth || 400;
    this.HEADER_ROW_HEIGHT = preSetup.headerHeight || 50;
    this.container = preSetup.container || document.body;
    this.selectTask = preSetup.selectTask;
  }

  svg_spec = "http://www.w3.org/2000/svg";

  /**
   * Draw the Gantt chart
   */
  draw() {
    this.dates = this.getDates(this.tasks);
    this.n_days = this.dates.length;
    this.firstDayOffs = this.getFirstDayOffs();
    this.n_tasks = this.tasks.length;

    this.createSVGContainer();
    this.drawTopLeftCorner();
    this.drawHeaderRow();
    this.drawHeaderColumn();
    this.drawCells();
    this.addColumnLabels();
    this.addRowLabels();
    this.drawTasks();
    this.addSelectTaskHandler();

    this.container.appendChild(this.main);
  }

  /**
   * Create SVG container
   */
  createSVGContainer() {
    this.main = document.createElementNS(this.svg_spec, "svg");
    this.main.setAttribute(
      "viewBox",
      `0 0 ${this.CELL_WIDTH * this.n_days + this.HEADER_COLUMN_WIDTH} ${this
        .CELL_HEIGHT *
        this.n_tasks +
        this.HEADER_ROW_HEIGHT}`
    );
    this.main.setAttribute("preserveAsvg_spectRatio", "none");
    this.main.classList.add("c-gantt");
  }

  /**
   * Draw top-left empty cell 
   */
  drawTopLeftCorner() {
    let corner = document.createElementNS(this.svg_spec, "rect");
    corner.setAttribute("width", `${this.HEADER_COLUMN_WIDTH}`);
    corner.setAttribute("height", `${this.HEADER_ROW_HEIGHT}`);
    corner.classList.add("c-gantt__top-left");
    this.main.appendChild(corner);
  }

  /**
   * Draw header column
   */
  drawHeaderColumn() {
    for (let i = 0; i < this.n_tasks; i++) {
      let header_cell = document.createElementNS(this.svg_spec, "rect");
      header_cell.setAttribute("width", `${this.HEADER_COLUMN_WIDTH}`);
      header_cell.setAttribute("height", `${this.CELL_HEIGHT}`);
      header_cell.setAttribute("x", "0");
      header_cell.setAttribute(
        "y",
        `${this.HEADER_ROW_HEIGHT + this.CELL_HEIGHT * i}`
      );
      header_cell.classList.add("c-gantt__task-header");
      this.main.appendChild(header_cell);
    }
  }

  /**
   * Draw header row
   */
  drawHeaderRow() {
    for (let i = 0; i < this.n_days; i++) {
      let header_cell = document.createElementNS(this.svg_spec, "rect");
      header_cell.setAttribute("width", `${this.CELL_WIDTH}`);
      header_cell.setAttribute("height", `${this.HEADER_ROW_HEIGHT}`);
      header_cell.setAttribute(
        "x",
        `${this.HEADER_COLUMN_WIDTH + this.CELL_WIDTH * i}`
      );
      header_cell.setAttribute("y", "0");
      header_cell.classList.add("c-gantt__date-header");
      this.main.appendChild(header_cell);
    }
  }

  /**
   * Draw cells of the chart
   */
  drawCells() {
    for (let row = 0; row < this.n_tasks; row++) {
      for (let col = 0; col < this.n_days; col++) {
        let cell = document.createElementNS(this.svg_spec, "rect");
        cell.col = col;
        cell.row = row;
        cell.setAttribute("width", `${this.CELL_WIDTH}`);
        cell.setAttribute("height", `${this.CELL_HEIGHT}`);
        cell.setAttribute(
          "x",
          `${this.HEADER_COLUMN_WIDTH + this.CELL_WIDTH * col}`
        );
        cell.setAttribute(
          "y",
          `${this.HEADER_ROW_HEIGHT + this.CELL_HEIGHT * row}`
        );
        cell.classList.add("c-gantt__cell");

        // Check day-offs
        for (let i = 0; i < this.dayOffs.length; i++) {
          if (col % 7 == this.firstDayOffs[i]) {
            cell.classList.add("c-gantt__cell__day-off");
          }
        }

        this.main.appendChild(cell);
      }
    }
  }

  /**
   * Add labels to the columns
   */
  addColumnLabels() {
    let formatter = new Intl.DateTimeFormat("en-US");

    for (let i = 0; i < this.n_days; i++) {
      let label = document.createElementNS(this.svg_spec, "text");
      let cur_date = this.dates[i];
      let text = document.createTextNode(formatter.format(cur_date));
      label.appendChild(text);
      label.setAttribute(
        "x",
        `${this.HEADER_COLUMN_WIDTH +
          this.CELL_WIDTH * 0.5 +
          this.CELL_WIDTH * i}`
      );
      label.setAttribute("y", `${this.HEADER_ROW_HEIGHT * 0.6}`);
      label.setAttribute("text-anchor", "middle");
      label.classList.add("c-gantt__dates");
      this.main.appendChild(label);
    }
  }

  /**
   * Add labels to the rows
   */
  addRowLabels() {
    for (let i = 0; i < this.n_tasks; i++) {
      let label = document.createElementNS(this.svg_spec, "text");
      let text = document.createTextNode(this.tasks[i].name);
      label.appendChild(text);
      label.setAttribute("x", `${this.HEADER_COLUMN_WIDTH * 0.5}`);
      label.setAttribute(
        "y",
        `${this.HEADER_ROW_HEIGHT +
          this.CELL_HEIGHT * 0.6 +
          this.CELL_HEIGHT * i}`
      );
      label.setAttribute("text-anchor", "middle");
      label.classList.add("c-gantt__tasks");
      this.main.appendChild(label);
    }
  }

  /**
   * Draw tasks with different status
   */
  drawTasks() {
    let min_date = this.getMinimumDate(this.tasks);
    for (let i = 0; i < this.n_tasks; i++) {
      let task = this.tasks[i];
      let start_date = new Date(task.start_date);
      let end_date = new Date(task.end_date);
      let duration = (end_date - start_date) / 1000 / 60 / 60 / 24 + 1;
      let column = (start_date - min_date) / 1000 / 60 / 60 / 24;
      let row = i;
      this.newTask(column, row, duration, task.status);
    }
  }

  /**
   * Create new task
   * @param {number} column The number of a column where the task starts
   * @param {number} row The number of a row of the task
   * @param {number} duration The number of days the task lasts for
   * @param {number} status Status of the task
   */
  newTask(column, row, duration, status) {
    let y = row * this.CELL_HEIGHT + this.HEADER_ROW_HEIGHT;
    let x = column * this.CELL_WIDTH + this.HEADER_COLUMN_WIDTH;

    let i = 0;
    while (i < duration) {
      if (this.firstDayOffs.indexOf((column + i) % 7) == -1) {
        let new_task = document.createElementNS(this.svg_spec, "rect");
        new_task.col = column + i;
        new_task.row = row;
        new_task.setAttribute("x", `${x}`);
        new_task.setAttribute("y", `${y}`);
        new_task.setAttribute("width", `${this.CELL_WIDTH}`);
        new_task.setAttribute("height", `${this.CELL_HEIGHT}`);

        new_task.classList.add("c-gantt__task");
        new_task.classList.add(`c-gantt__task__${this.statuses[status]}`);

        this.main.appendChild(new_task);
      }

      x += this.CELL_WIDTH;
      i++;
    }
  }

  addSelectTaskHandler(func) {
    this.main.addEventListener('click', (event) => this.selectTask(event, this));
  }

  updateTask(task) {
    let cur_task_index = this.tasks.findIndex((elem, i) => {
      return elem.id === task.id;
    });
    if (cur_task_index === -1) {
      this.tasks.push(task);
    } else {
      this.tasks[cur_task_index] = task;
    }
  }

  /**
   * Get list of days of the tasks
   */
  getDates() {
    let dates = [];
    let cur_date = this.getMinimumDate();
    let max_date = this.getMaximumDate();
    while (cur_date <= max_date) {
      dates.push(cur_date);
      cur_date = this.getNextDay(cur_date);
    }
    return dates;
  }

  /**
   * Get the first day of the tasks
   */
  getMaximumDate() {
    let maximum_date = new Date(this.tasks[0].end_date);
    for (let i = 1; i < this.tasks.length; i++) {
      let cur_date = new Date(this.tasks[i].end_date);
      if (cur_date > maximum_date) {
        maximum_date = cur_date;
      }
    }
    return maximum_date;
  }

  /**
   * Get the last day of the tasks
   */
  getMinimumDate() {
    let minimum_date = new Date(this.tasks[0].start_date);
    for (let i = 1; i < this.tasks.length; i++) {
      let cur_date = new Date(this.tasks[i].start_date);
      if (cur_date < minimum_date) {
        minimum_date = cur_date;
      }
    }
    return minimum_date;
  }

  /**
   * Get the day-offs of the first week
   */
  getFirstDayOffs() {
    let firstDayOffs = [];
    for (let j = 0; j < this.dayOffs.length; j++) {
      if (!this.dates.length) break;
      let cur_date = this.dates[0];
      let i = 0;
      while (cur_date.getDay() != this.dayOffs[j]) {
        cur_date = this.getNextDay(cur_date);
        i++;
      }
      firstDayOffs.push(i);
    }
    return firstDayOffs;
  }

  /**
   * Get the next day of a given day
   * @param {date} day A day to get the next day 
   */
  getNextDay(day) {
    let next_day = new Date(
      day.getFullYear(),
      day.getMonth(),
      day.getDate() + 1
    );
    return next_day;
  }
};

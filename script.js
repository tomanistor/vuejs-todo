// Create a new Vue instance
new Vue({

  // Bind Vue instance to container div with an ID of todo
  el: "#todo",

  // Data values of list
  data: {
    newTask: "",
    taskList: []
  },

  // Methods for app
  methods: {
    addTask: function() {
      var task = this.newTask.trim();
      // If task is not an empty string
      if (task) {
        // Push an object containing the task into the taskList array
        this.taskList.push({
          text: task,
          checked: false
        });
        // Reset newTask to an empty string
        this.newTask = "";
      }
    }
  }

});

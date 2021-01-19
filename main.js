if (!localStorage.getItem("notes"))
  localStorage.setItem("notes", JSON.stringify([]));
const App = {
  data() {
    return {
      message: "Список дел:",
      inputPlaceholder: "Введите задачу",
      inputValue: "",
      btnAdd: "Добавить",
      btnRemove: "Удалить",
      notes: JSON.parse(localStorage.getItem("notes")),
    };
  },
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value;
    },
    addNewNote() {
      this.notes.push(this.inputValue);
      localStorage.setItem("notes", JSON.stringify(this.notes));
      this.inputValue = "";
    },
    removeNote(index) {
      this.notes.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(this.notes));
      // console.log(localStorage.getItem("notes"));
    },
  },
};

Vue.createApp(App).mount("#app");

const app = Vue.createApp({
  data() {
    return {
      //any key value pairs
      courseGoal: "Finish the course in 3 weeks",
      courseProgress: 0.5,
    };
  },
});

app.mount("#user-goal");

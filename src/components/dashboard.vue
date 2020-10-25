<template>
  <div class="dashboard">
    <header class="header">
      <span>Todos</span>
      <form action="">
        <div class="form-group">
          <div class="completed">
            <input
              type="checkbox"
              name="status"
              id="status"
              @change="completed($event)"
            />
            <label for="status"> completed </label>
          </div>
          <label for="search">
            <input
              type="search"
              name="search"
              placeholder="Type..."
              id="search"
              class="search-input"
              v-model="title"
            />
            <input
              type="button"
              value="search"
              class="submit-button"
              @click="searchFor"
            />
          </label>
        </div>
      </form>
    </header>
    <posts ref="posts" />
  </div>
</template>

<script>
import posts from "./posts";

export default {
  name: "",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    searchFor: function () {
      this.$refs.posts.filter(null, this.title);
    },
    completed: function ($event) {
      this.$refs.posts.filter($event.target.checked, null);
    },
  },
  components: {
    posts,
  },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Lato:300,400,700);

.header {
  width: 600px;
  height: 75px;
  background-color: #dcc6ae;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  font-family: "Lato", sans-serif;
  font-weight: 400;
}

.header span {
  color: #303030;
  font-size: 36px;
}

.form-group {
  display: flex;
}

.search-input {
  padding: 10px 15px;
  margin-right: 20px;
  font-family: inherit;
  outline: none;
  border: none;
  background-color: #f0edea;
  border-radius: 7px;
}

.submit-button {
  font-family: inherit;
  width: 100px;
  padding: 10px 15px;
  border: 0;
  outline: 0;
  background-color: #c1d2d8;
}

input:hover {
  cursor: pointer;
}

input[type="checkbox"] + label {
  display: block;
  margin: 0 .2em .2em 0;
  cursor: pointer;
  padding: 0.2em;
}

input[type="checkbox"] {
  display: none;
}

input[type="checkbox"] + label:before {
  content: "\2714";
  border: 0.1em solid #303030;
  border-radius: 0.2em;
  display: inline-block;
  width: 1em;
  height: 1em;
  padding-left: 0.2em;
  padding-bottom: 0.3em;
  margin-right: 0.2em;
  vertical-align: bottom;
  color: transparent;
  transition: 0.2s;
}

input[type="checkbox"]:checked + label:before {
  background-color: #d4edda;
  border-color: #d4edda;
  color: #fff;
}
</style>
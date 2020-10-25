<template>
  <div class="dashboard">
    <header class="header">
      <span>Todos</span>
      <form action="">
        <div class="form-group">
          <label for="search">
            <label for="status">
              completed
              <input type="checkbox" name="status" id="status" @change="completed($event)">
            </label>
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
    completed: function($event) {
      this.$refs.posts.filter($event.target.checked, null)
    }
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
</style>
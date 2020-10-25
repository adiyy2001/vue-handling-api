<template>
  <div class="posts">
    <div
      v-for="(post, idx) in filtered ? filtered : posts"
      :key="idx"
      class="post"
    >
      <div class="info">
        <span class="main-header" v-html="post.title"></span>
        <span class="sub-header"> {{ post.userId }} </span>
      </div>
      <div class="pull-right">
        <div
          class="status"
          v-bind:class="post.completed ? 'done' : 'in-progress'"
        ></div>
        <button class="remove" v-on:click="removePost($event, post.id)">
          remove
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "users",
  props: ["title"],
  data() {
    return {
      posts: null,
      users: null,
      filtered: null,
    };
  },
  methods: {
    filter(status = null, title = null) {
      let url = "http://localhost:3000/posts";

      if (status) url = url + `?status=${status}`;
      if (title) url = url + `?title=${title}`;

      axios
        .get(url)
        .then((res) => {
          this.filtered = [...res.data];
          this.assoc(this.filtered, title);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    removePost: function (_event, id) {
    //   this.posts.splice(id - 1, 1);
        return this.posts = this.posts.filter(post => post.id !== id) && 
               this.filtered ? this.filtered = this.filtered.filter(post => post.id !== id) : ''
    },
    assoc: function (posts, title = null) {
      this.users.forEach((user) => {
        posts.forEach((post) => {
          if (user.id === post.userId) {
            post.userId = `${user.name} ${user.username}`;
          }
        });
      });
      if (title) {
        const hightlight = `<span class="highlight">${title}</span>`;
        this.filtered.forEach((post) => {
          post.title = post.title.replace(title, hightlight);
        });
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/posts")
      .then((response) => {
        this.posts = response.data;

        axios
          .get("http://localhost:3000/users")
          .then((response) => {
            this.users = response.data;
            this.assoc(this.posts);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style>
.posts {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0 0 0;
}
.post {
  width: 600px;
  height: 75px;
  position: relative;
  margin-right: 0 !important;
  background: #f5f5f5;
  margin-bottom: 10px;
  display: flex;
}
.info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0 0 20px;
}
.main-header {
  font-size: 16px;
  color: #303030;
}
.info .sub-header {
  font-size: 14px;
  color: #a1a1a4;
}

.pull-right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  margin-left: auto;
  padding: 10px;
}

.status {
  width: 15px;
  height: 15px;
  clip-path: circle(40%);
}

.remove {
  font-family: inherit;
  width: 100px;
  padding: 5px 8px;
  border: 0;
  outline: 0;
  background-color: #c1d2d8;
}

.in-progress {
  background-color: #f8d7da;
}
.done {
  background-color: #d4edda;
}

input:hover {
  cursor: pointer;
}

.highlight {
    background: #FFFCBB;
    padding: 2px 4px;
}
</style>
<template>
  <div class="posts">
    <div v-for="(post, idx) in posts" :key="idx" class="post">
        <div class="info">
            <span class="main-header"> {{ post.title }} </span>
            <span class="sub-header"> {{ post.userId }} </span>
        </div>
    <div class="pull-right">
            <div class="status" v-bind:class="post.completed ? 'done' : 'in-progress'"></div>
            <button class="remove" v-on:click="removePost($event, 10)">remove</button>
    </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "users",
  props: ['title'],
  data() {
    return {
      posts: null,
      users: null
    };
  },
  method: {
      filter : (status = null, title = null) => {
          let url = "http://localhost:3000/posts";
          if(status) url = url + `?${status}`
          if(title) url = url + `?${title}`
          axios.get(url)
          .then(res => {
              this.posts = res.data
              console.log(res.data)
          })
          .catch(err => {
              console.error(err); 
          });
      },
      removePost: function (event, id) {
		  console.log(id);
          return this.posts.fitler(post => post.id !== id);
      }
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

        this.users.forEach(user => {
            this.posts.forEach(post => {
                if(user.id === post.userId) {
                    post.userId = `${user.name} ${user.surname}`
            }
            });
        });
      });
      console.log(this.users)
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
        background-color: #C1D2D8;
        margin-bottom: 10px;
        display: flex;
    }
    .info {
        background-color: #C1D2D8;
        display: flex;
        flex-direction: column;
        align-items:flex-start;
        margin: 20px 0 0 20px;
    }
    .mian-header {
        font-size: 20px;
        color: #303030;
    }
    .info .sub-header {
        font-size: 14px;
        color: #A1A1A4;
    }

    .status {
        position: absolute;
        top: 15px;
        right: 15px;
        width: 15px;
        height: 15px;
        clip-path: circle(40%);
    }

    .in-progress {
        background-color: red;
    }
    .done { 
        background-color: green;
    }
</style>
import React from "react";
import Navbar from "./components/Navbar";
import "./css/style.css";
import "./css/animate.css";
import "./css/flaticon.css";
import "./css/icomoon.css";
import "./css/ionicons.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SinglePost from "./pages/SinglePost";
import AddPost from "./pages/AddPost";
import {
  Stitch,
  AnonymousCredential,
  RemoteMongoClient,
} from "mongodb-stitch-browser-sdk";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: [],
      posts: [],
    };

    this.addComment = this.addComment.bind(this);
    this.displayPosts = this.displayPosts.bind(this);
    this.displayPost = this.displayPost.bind(this);
    this.addPost = this.addPost.bind(this);
  }

  componentDidMount() {
    this.client = Stitch.initializeDefaultAppClient("blog-jcusl");
    // Get a MongoDB Service Client
    // This is used for logging in and communicating with Stitch
    const mongodb = this.client.getServiceClient(
      RemoteMongoClient.factory,
      "mongodb-atlas"
    );
    // Get a reference to the todo database
    this.db = mongodb.db("Blog");
    this.displayPostsonLoad();
  }

  // displaying particular blog post
  displayPost(id) {
    // query the remote DB and update the component state
    this.db
      .collection("posts")
      .find({}, { _id: id })
      .asArray()
      .then((post) => {
        console.log(post);
        return post;
      });
  }

  // getting all blog posts and displaying snippets
  displayPosts() {
    // query the remote DB and update the component state
    this.db
      .collection("posts")
      .find({}, { limit: 1000 })
      .asArray()
      .then((posts) => {
        console.log(posts);
        this.setState({ posts });
      });
  }

  displayPostsonLoad() {
    // Anonymously log in and display comments on load
    this.client.auth
      .loginWithCredential(new AnonymousCredential())
      .then(this.displayPosts)
      .catch(console.error);
  }

  async addPost(event) {
    event.preventDefault();
    event.persist();
    let file = event.target.image.files[0];

    // converting to base64
    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });

    const data = {
      title: event.target.title.value,
      author: event.target.author.value,
      image: await toBase64(file),
      description: event.target.description.value,
      content: event.target.content.value,
      date: new Date(),
    };

    // then re-query the DB and display the new todos
    this.db
      .collection("posts")
      .insertOne({
        ...data,
        owner_id: this.client.auth.user.id,
      })
      .then(() => {
        this.displayPosts();
      })
      .catch(console.error);
  }

  addComment() {
    // Anonymously log in and display comments on load
    this.client.auth
      .loginWithCredential(new AnonymousCredential())
      .then(this.displayComments)
      .catch(console.error);
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/personal-blog/about">
            <About />
          </Route>
          <Route path="/personal-blog/contact">
            <Contact />
          </Route>
          <Route exact path="/personal-blog">
            <Home posts={this.state.posts} />
          </Route>
          <Route
            path="/personal-blog/singlepost/:id"
            render={(props) => (
              <SinglePost {...props} displayPost={this.displayPost} />
            )}
          ></Route>
          <Route path="/personal-blog/add-post">
            <AddPost addPost={this.addPost} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

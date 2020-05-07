import React from "react";

const AddPost = (props) => {
  return (
    <div id="colorlib-main">
      <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div class="container">
          <div class="row d-flex">
            <div class="col-xl-8 py-5 px-md-5">
              <div class="row pt-md-4">
                <div class="col-md-12">
                  <div class="comment-form-wrap pt-5">
                    <form
                      action="#"
                      class="p-3 p-md-5 bg-light"
                      onSubmit={props.addPost}
                    >
                      <h3 class="mb-5">Add A Post</h3>
                      <div class="form-group">
                        <label htmlFor="title">Title *</label>
                        <input
                          type="text"
                          class="form-control"
                          id="title"
                          name="title"
                        />
                      </div>
                      <div class="form-group">
                        <label htmlFor="author">Author *</label>
                        <input
                          type="text"
                          class="form-control"
                          id="author"
                          name="author"
                        />
                      </div>
                      <div class="form-group">
                        <label htmlFor="image">Image *</label>
                        <input
                          type="file"
                          class="form-control"
                          id="image"
                          name="image"
                        />
                      </div>
                      <div class="form-group">
                        <label htmlFor="description">Short Description *</label>
                        <input
                          type="text"
                          class="form-control"
                          name="description"
                          id="description"
                        />
                      </div>
                      <div class="form-group">
                        <label htmlFor="content">Post Content *</label>
                        <textarea
                          name="content"
                          id="content"
                          cols="30"
                          rows="10"
                          class="form-control"
                        ></textarea>
                      </div>
                      <div class="form-group">
                        <input
                          type="submit"
                          value="Add Post"
                          class="btn py-3 px-4 btn-primary"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddPost;

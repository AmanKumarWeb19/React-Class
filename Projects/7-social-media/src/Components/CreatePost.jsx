import { useContext } from "react";
import { useRef } from "react";
import { PostList } from "../store/post-list-stores";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTtile = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTtile, postBody, reactions, tags);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter Your User Id Here
        </label>
        <input
          ref={userIdElement}
          type="text"
          className="form-control"
          id="userId"
          placeholder="Your User Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          ref={postTitleElement}
          type="text"
          className="form-control"
          id="title"
          placeholder="how are you feeling today"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Body" className="form-label">
          Post Content
        </label>
        <textarea
          rows="4"
          ref={postBodyElement}
          type="text"
          className="form-control"
          id="body"
          placeholder="Tell Us more about it"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          No.of Reactions
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
          placeholder="how many people react"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Tags" className="form-label">
          please enter tags here using space
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="Enter your hashtag here"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;

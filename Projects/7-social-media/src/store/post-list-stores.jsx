// import { useReducer } from "react";
import { useReducer } from "react";
import { createContext } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = () => {};
  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends I am going to Mumbai",
    reactions: 12,
    userId: "user-9",
    tag: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Masai Pass hogye",
    body: "Hard to believe",
    reactions: 15,
    userId: "user-12",
    tag: ["Graduating", "Unbelievable"],
  },
];
export default PostListProvider;

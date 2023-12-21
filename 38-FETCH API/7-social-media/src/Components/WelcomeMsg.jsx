const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <center className="welcomemsg">
      <h1>There are No Post</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={onGetPostsClick}
      >
        Get Post From Server
      </button>
    </center>
  );
};
export default WelcomeMessage;

function Hello() {
  let myName = "Aman";
  let number = 56;

  function Greet() {
    return <h3>This is the future speaking</h3>;
  }

  return (
    <h3>
      Message n0:- {number} Hello {myName} today Quotes is {Greet()}
    </h3>
  );
}
export default Hello;

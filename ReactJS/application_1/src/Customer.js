function Customer(props) {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        borderRadius: "25px",
        border: "3px solid red",
      }}
    >
      <h1>Customer_Id is :{props.Cid}</h1>
      <hr></hr>
      <h2>Customer_Name is:{props.Cname}</h2>
      <hr></hr>
      <h3>Customer_Email is:{props.Email}</h3>
    </div>
  );
}
export default Customer;

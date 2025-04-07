export default Profile = ({ data, setData, error }) => {
  const { name, age, email } = data;
  const handleChange = (e, item) => {
    setData((prevState) => ({ ...prevState, [item]: e.target.value }));
  };

  return (
    <div className="profile-container">
      <div>
        <label>Name : </label>
        <input
          type="text"
          value={name}
          onChange={(e) => handleChange(e, "name")}
        />
        {error.name && <span className="error">{error.name}</span>}
      </div>
      <div>
        <label>Age : </label>
        <input
          type="number"
          value={age}
          onChange={(e) => handleChange(e, "age")}
        />
        {error.age && <span className="error">{error.age}</span>}
      </div>
      <div>
        <label>Email : </label>
        <input
          type="text"
          value={email}
          onChange={(e) => handleChange(e, "email")}
        />
        {error.email && <span className="error">{error.email}</span>}
      </div>
    </div>
  );
};

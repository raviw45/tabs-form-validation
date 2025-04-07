export default Interests = ({ data, setData, error }) => {
  const { interests } = data;
  const handleChangeInterests = (e) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked
        ? [...prevState.interests, e.target.name]
        : prevState.interests.filter((i) => i !== e.target.name),
    }));
  };
  return (
    <div>
      <div>
        <input
          type="checkbox"
          name="java"
          checked={interests.includes("java")}
          onChange={handleChangeInterests}
        />
        <label>Java</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="react"
          checked={interests.includes("react")}
          onChange={handleChangeInterests}
        />
        <label>React</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="javascript"
          checked={interests.includes("javascript")}
          onChange={handleChangeInterests}
        />
        <label>Javascript</label>
      </div>
      {error.interests && <span className="error">{error.interests}</span>}
    </div>
  );
};

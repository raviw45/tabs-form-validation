export default Settings = ({ data, setData, error }) => {
  const { theme } = data;
  const handleChangeTheme = (e) => {
    setData((prevState) => ({ ...prevState, theme: e.target.name }));
  };
  return (
    <div>
      <div>
        <input
          type="radio"
          name="dark"
          checked={theme === "dark"}
          onChange={handleChangeTheme}
        />
        <label>Dark</label>
      </div>
      <div>
        <input
          type="radio"
          name="light"
          checked={theme === "light"}
          onChange={handleChangeTheme}
        />
        <label>Light</label>
      </div>
    </div>
  );
};

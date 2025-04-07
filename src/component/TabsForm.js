import { useState } from "react";
import Interests from "./Interests";
import Profile from "./Profile";
import Settings from "./Settings";

export default TabsForm = () => {
  const [activeTab, SetActiveTab] = useState(0);
  const [error, setError] = useState({});
  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    interests: [],
    theme: "",
  });
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        let err = {};
        if (!data.name || !data.name.length > 2) {
          err.name = "Name required more than 2 characters";
        }
        if (!data.age || data.age < 18) {
          err.age = "Age is not valid";
        }
        if (
          !data.email ||
          !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.email)
        ) {
          err.email = "Invalid email";
        }

        setError(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        let err = {};
        if (data.interests.length < 1) {
          err.interests = "Select atleast one";
        }
        setError(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];
  const ActiveTabComponent = tabs[activeTab].component;
  const handlePrevClick = () => {
    SetActiveTab((prev) => prev - 1);
  };
  const handleNextClick = () => {
    if (tabs[activeTab].validate()) {
      SetActiveTab((prev) => prev + 1);
    }
  };
  const handleSubmit = () => {
    console.log(data);
  };
  return (
    <div>
      <div className="heading-container">
        {tabs.map((t, index) => (
          <div
            className="heading"
            onClick={() => tabs[activeTab].validate() && SetActiveTab(index)}
            key={index}
          >
            {t.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} error={error} />
      </div>
      <div>
        {activeTab > 0 && <button onClick={handlePrevClick}>prev</button>}
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNextClick}>next</button>
        )}
        {activeTab === tabs.length - 1 && (
          <button onClick={handleSubmit}>submit</button>
        )}
      </div>
    </div>
  );
};

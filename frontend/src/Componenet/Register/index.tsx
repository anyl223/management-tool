import React, { useState } from "react";
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  ButtonGroup,
  TextInput,
  Select,
} from "@mantine/core";
import scss from "./register.module.scss";

const ManagementTool = () => {
  const [totalProjects, setTotalProjects] = useState<number>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setTotalProjects(isNaN(value) ? 0 : value);
  };

  const renderProjectInputs = () => {
    const projectInputs = [];
    for (let b = 0; b < totalProjects; b++) {
      projectInputs.push(
        <div
          key={b}
          style={{
            marginRight: "20px",
            marginLeft: "20px",
            width: "30%",
          }}
          className={scss.custom_color}
        >
          <h5>Project-{b + 1}</h5>
          <label>Full Name:</label>
          <TextInput type="text" name={`name${b}`} id={`name${b}`} size="md" />
          <br />
          <label>Mobile :</label>
          <TextInput
            type="text"
            name={`mobile${b}`}
            id={`mobile${b}`}
            size="md"
          />
          <br />
          <label>Project Name:</label>
          <TextInput
            type="text"
            name={`projectname${b}`}
            id={`projectname${b}`}
            size="md"
          />
          <br />
          <label>Team Leader:</label>
          <TextInput
            type="text"
            name={`teamlead${b}`}
            id={`teamlead${b}`}
            size="md"
          />{" "}
          <br />
          <label>Project Manager :</label>
          <TextInput
            type="text"
            name={`projectmanager${b}`}
            id={`projectmanager${b}`}
            size="md"
          />
          <br />
          <TextInput
            label="Project Director"
            name={`projectdirector${b}`}
            id={`projectdirector${b}`}
            size="md"
          />
          <br />
          <Select
            label="Current status"
            placeholder="Pick value"
            data={["Working", "Pending", "Completed"]}
          />
          <br />
          <TextInput
            label="Work Assign"
            type="date"
            name={`work_Assign_date${b}`}
            id={`work_Assign_date${b}`}
          />
          <br />
          <label>Complete Project:</label>
          <TextInput
            type="date"
            name={`complete_date${b}`}
            id={`complete_date${b}`}
          />
          <br />
        </div>
      );
    }
    return projectInputs;
  };

  return (
    <div>
      <h1>Bisag Project Management Tools</h1>
      <form action="/saveRecord" method="post">
        <label>Enter the Total Project :</label>
        <input type="number" onChange={handleInputChange} id="id" name="id" />
        <Card>
          <Card.Section>
            <div id="data1" style={{ display: "flex", flexWrap: "wrap" }}>
              {renderProjectInputs()}
            </div>
          </Card.Section>
        </Card>
        <Button>SUBMIT</Button>
        <Button
          className={scss.btn}
          onClick={() => {
            window.location.href = "/report";
          }}
        >
          <i className="fa fa-user">REPORT</i>
        </Button>
      </form>
    </div>
  );
};

export default ManagementTool;

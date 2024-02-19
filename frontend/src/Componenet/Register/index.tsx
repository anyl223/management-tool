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
import * as Yup from "yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

type FormTool = {
  fullName: string;
  projectname: string;
  mobile: string;
  Teamleader: string;
  project_manager: string;
  projectdirector: string;
  current_status: string;
  workassign: string;
  complete_project: string;
};

type FieldsType = {
  fields: FormTool[];
};

// const validationSchema = Yup.array({
//   fields: Yup.object({
//     fullName: Yup.string().required("fullName is required"),
//     projectname: Yup.string().required("name is required"),
//     mobile: Yup.string().required("required"),
//     Teamleader: Yup.string().required("name is required"),
//     project_manager: Yup.string().required("name is required"),
//     projectdirector: Yup.string().required("name is Required"),
//     current_status: Yup.string().required("select any one"),
//     workassign: Yup.date().required("required"),
//     complete_project: Yup.date().required("required"),
//   }),
// });
const ManagementTool = () => {
  const [totalProjects, setTotalProjects] = useState<number>(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setTotalProjects(isNaN(value) ? 0 : value);
  };
  const router = useRouter();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldsType>({
    // resolver: yupResolver(validationSchema),
  });

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
          <TextInput
            type="text"
            id={`fullNa${b}`}
            size="md"
            {...register(`fields.${b}.fullName`)}
          />
          <br />
          <label>Mobile :</label>
          <TextInput
            type="text"
            id={`mobile${b}`}
            size="md"
            {...register(`fields.${b}.mobile`)}
          />
          <br />
          <label>Project Name:</label>
          <TextInput
            type="text"
            id={`projectname${b}`}
            size="md"
            {...register(`fields.${b}.projectname`)}
          />
          <br />
          <label>Team Leader:</label>
          <TextInput
            type="text"
            id={`teamlead${b}`}
            size="md"
            {...register(`fields.${b}.Teamleader`)}
          />
          <br />
          <label>Project Manager :</label>
          <TextInput
            type="text"
            id={`projectmanager${b}`}
            size="md"
            {...register(`fields.${b}.project_manager`)}
          />
          <br />
          <TextInput
            label="Project Director"
            id={`projectdirector${b}`}
            size="md"
            {...register(`fields.${b}.projectdirector`)}
          />
          <br />
          <Select
            label="Current status"
            id={`current_status${b}`}
            placeholder="Pick value"
            data={["Working", "Pending", "Completed"]}
            onChange={(Value: any) => {
              setValue(`fields.${b}.current_status`, Value);
            }}
          />
          <br />
          <TextInput
            label="Work Assign"
            type="date"
            id={`work_Assign_date${b}`}
            // {...register(`fields.${b}.workassign`)}
            onChange={(e) => {
              console.log("e", e.target.value);
              setValue(
                `fields.${b}.workassign`,
                new Date(e.target.value).toLocaleDateString("en-CA", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })
              );
            }}
          />
          <br />
          <label>Complete Project:</label>
          <TextInput
            type="date"
            id={`complete_date${b}`}
            // {...register(`fields.${b}.complete_project`)}
            onChange={(e) => {
              console.log("e", e.target.value);
              setValue(
                `fields.${b}.complete_project`,
                new Date(e.target.value).toLocaleDateString("en-CA", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                })
              );
            }}
          />
          <br />
        </div>
      );
    }
    return projectInputs;
  };
  const submitHandler = async (data: any) => {
    console.log(data.fields);

    const response = await fetch(
      "http://localhost:4088/api/register/formtool",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data.fields),
      }
    );
    console.log("response", response);
  };
  return (
    <>
      {console.log(errors)}
      <div>
        <h1>Bisag Project Management Tools</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <label>Enter the Total Project :</label>
          <input type="number" onChange={handleInputChange} id="id" name="id" />
          <Card>
            <Card.Section>
              <div id="data" style={{ display: "flex", flexWrap: "wrap" }}>
                {renderProjectInputs()}
              </div>
            </Card.Section>
          </Card>
          <Button type="submit">SUBMIT</Button>
          <Button
            className={scss.btn}
            onClick={() => {
              window.location.href = "/report";
            }}
          >
            REPORT
          </Button>
        </form>
      </div>
    </>
  );
};

export default ManagementTool;

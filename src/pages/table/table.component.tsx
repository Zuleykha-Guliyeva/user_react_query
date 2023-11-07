import { Button, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { generateGuid } from "../../core/helpers/generate-guid";
import { useUsers, usehandleDelete } from "./actions/table.query";
import { Link } from "react-router-dom";
import { IFormValues } from "../form/form";
import { useState } from "react";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

function TableComponent() {
  const [formData, setFormData] = useState<IFormValues>({ name: "", age: 0, email: "" });
  const { data, isLoading } = useUsers();
  const { mutate } = usehandleDelete();
  console.log(data);

  const handleDelete = (userId: number) => {
    mutate(userId);
  };

 

  const addUser = () => {};

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Link
            to={`/form?name=${record.name}&age=${record.age}&email=${record.email}`}
          >
            <button>Update</button>
          </Link>
          <button onClick={() => handleDelete(record.id)}>Delete</button>
        </Space>
      ),
    },
  ];
  //() => {handleDelete(1)}
  return (
    <div>
      {isLoading ? (
        <h1 style={{ color: "#000" }}>loading...</h1>
      ) : (
        <>
          <Link to="/form">
            <Button onClick={addUser} type="primary">
              Add User
            </Button>
          </Link>
          <Table
            columns={columns}
            dataSource={data?.map((item) => ({ ...item, key: generateGuid() }))}
          />
        </>
      )}
    </div>
  );
}

export default TableComponent;

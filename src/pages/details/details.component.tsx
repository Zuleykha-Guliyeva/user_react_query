import { Card, Space } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const DetailsComponents = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name") || "";
  const age = parseInt(searchParams.get("age")) || 0;
  const email = searchParams.get("email") || "";
  return (
    <>
      <Space direction="vertical" size={16}>
        <Card
          title="User detail"
          extra={<a href="#">close</a>}
          style={{ width: 300 }}
        >
          <p>adi: {name}</p>
          <p>email: {email}</p>
          <p>yasi: {age}</p>
        </Card>
      </Space>
    </>
  );
};
export default DetailsComponents;

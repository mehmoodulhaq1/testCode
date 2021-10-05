import "./App.css";
import { Form, Select, Radio } from "antd";
import styled from "styled-components";
const { Option } = Select;

export default function App() {
  return (
    <Wrapper>
      <Heading>Register</Heading>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        style={{ width: "100%" }}
      >
        <FormContainer>
          <Leftdiv>
            <Form.Item>
              <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item>
              <Input placeholder="Last Name" />
            </Form.Item>
            <Form.Item style={{ width: "80%" }}>
              <Input2 placeholder="Phone" />
            </Form.Item>
            <Select
              defaultValue="Select Country"
              style={{ backgroundColor: " #171717", width: "36%" }}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
            <Form.Item>
              <Input placeholder="City" />
            </Form.Item>
            <Form.Item>
              <Input placeholder="Post Code" />
            </Form.Item>
            <Form.Item style={{ width: "34%" }}>
              <label>Are you a customer?</label>

              <Radio.Group name="title">
                <Radio>Yes</Radio>
                <Radio>No</Radio>
              </Radio.Group>
            </Form.Item>
            <Select
              defaultValue="Select Country"
              style={{ backgroundColor: " #171717", width: "36%" }}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>{" "}
            <Select
              defaultValue="Select Country"
              style={{ backgroundColor: " #171717", width: "36%" }}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </Leftdiv>

          <RightDiv>
            <Form.Item>
              <Input placeholder="Email" />
            </Form.Item>{" "}
            <Form.Item>
              <Input placeholder="Password" />
            </Form.Item>{" "}
            <Form.Item style={{ width: "80%" }}>
              <Input2 placeholder="Business Name" />
            </Form.Item>{" "}
            <Form.Item style={{ width: "80%" }}>
              <Input2 placeholder="Business Address" />
            </Form.Item>
            <Select
              defaultValue="Select Vendor Type"
              style={{ backgroundColor: " #171717", width: "36%" }}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
            <Form.Item>
              <Input placeholder="How did you know" />
            </Form.Item>
            <Select
              defaultValue="Select Facility"
              style={{ backgroundColor: " #171717", width: "36%" }}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
            <Select
              defaultValue="Select Category"
              style={{ backgroundColor: " #171717", width: "36%" }}
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </RightDiv>
        </FormContainer>
      </Form>
      <Button>Register</Button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Heading = styled.h1``;
const Input = styled.input`
  background-color: #171717;
  padding: 7%;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  margin-right: 103px;
`;
const Input2 = styled(Input)`
  padding: 3%;
  width: 83%;
`;
const FormContainer = styled.div`
  display: flex;
`;

const Leftdiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
const RightDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
const Button = styled.button`
  padding: 1% 3% 1% 3%;
  border-radius: 5px;
  border: none;
  font-weight: 600;
  font-size: 20px;
  background-color: #39b239;
`;

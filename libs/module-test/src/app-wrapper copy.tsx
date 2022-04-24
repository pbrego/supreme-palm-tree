import * as React from 'react';
import * as C from '@supreme-palm-tree/lib-ant-components';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter as Router, Routes, Route, Outlet, useNavigate } from 'react-router-dom';
import { queryClient } from './utils/react-query';


const AppLayout =( ) => (
  <div style={{padding: '40px 200px'}}><Outlet /></div>
)

const FormRoute = () => {
  const [value, setValue] = React.useState({userName: ''})
  const MyContext = React.createContext({});
  MyContext.displayName = 'MyDisplayName';

  return (
    <MyContext.Provider value={{value, setValue}}><Outlet/></MyContext.Provider>
  )
}


export const AppWrapper = () => {
  const [value, setValue] = React.useState({userName: ''})

  return (
  <Router>
    <QueryClientProvider client={ queryClient }>
      <Routes>
        <Route element={<AppLayout />} path="/">
          <Route element={<FormRoute />}>
            <Route
              element={<Form
                setValue={setValue} value={value}
              />}
              path="/form"
            />
            <Route
              element={<Description value={value} />}
              path="/description"
            />
            <Route
              element={<Result value={value} />}
              path="/result"
            />
          </Route>
        </Route>
      </Routes>
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools />}
    </QueryClientProvider>
  </Router>
)}

const UserFlow = ( ) => {
  const [userName, setUserName] = React.useState('')
  const [
    // formStep,
    setFormStep
  ] = React.useState(0)

  return(
  <>
    <C.Typography.Title>User Flow</C.Typography.Title>

    <Routes>
      <Route
        index
        element={
          <Form
            setFormStep={setFormStep}
            setUserName={setUserName}
          />
        }
      />
      <Route
        element={
          <Description
            setFormStep={setFormStep}
            userName={userName}
          />
        }
        path="/form/description"
      />
      <Route
        element={
          <Result
            setFormStep={setFormStep}
            userName={userName}
          />
        }
        path="result"
      />
    </Routes>
  </>
)}



const Form = (
  {value, setValue}
) => {
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log('Success:', values);
    setValue(values)
    navigate('/description');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return(
    <>
      <C.Form
        autoComplete="off"
        initialValues={value}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <C.Form.Item
          required
          label="Name"
          name="userName"
          rules={[{
            required: true,
            message: "Please input your password!"
          }]}
        >
          <C.Input placeholder='Input your name'/>
        </C.Form.Item>
        <C.Row gutter={[16, 16]}>
          <C.Col>
            <C.Button block htmlType="submit" type="primary">Submit</C.Button>
          </C.Col>
          <C.Col>
            <C.Button block onClick={() => navigate('/form')}>Cancel</C.Button>
          </C.Col>
        </C.Row>
      </C.Form>
    </>
  )
}

const Description = ({value}) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (value.userName === '') { navigate("/form") }
  }, [value.userName, navigate])

  return (
    <>
      <C.Descriptions>
        <C.Descriptions.Item label="Name">{value.userName}</C.Descriptions.Item>
      </C.Descriptions>
      <C.Row gutter={[16, 16]}>
        <C.Col>
          <C.Button block type="primary" onClick={() => navigate("/result")}>Continue</C.Button>
        </C.Col>
        <C.Col>
          <C.Button block onClick={() => navigate('/form')}>Cancel</C.Button>
        </C.Col>
      </C.Row>
    </>
  )
}

const Result = ({value}) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (value.userName === '') { navigate("/form") }
  }, [value.userName, navigate])

  return (
    <>
      <C.Result
        extra={[
          <C.Button key={1} onClick={() => navigate("/form")}>Continue</C.Button>
        ]}
        status="success"
        title={`Successfully input name: ${value.userName}`}
      />
    </>
  )
}

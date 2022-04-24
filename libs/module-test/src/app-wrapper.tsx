import * as React from 'react';
import * as C from '@supreme-palm-tree/lib-ant-components';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

export const AppWrapper = () => {
  return(
    <Router>
      <Link to={`${SendMoney.routes.index}`}>{t("sendMoney.navigations.mainMenu")}</Link>

      <Routes>
        <Route element={<SendMoney.Feature />} path={`${SendMoney.routes.index}/*`}/>
      </Routes>
    </Router>
  )
}

const Feature = () => {
  const [values, setValues] = React.useState({})

  return(
    <C.Form.Provider
      onFormFinish={(_, { forms }) => {
        setValues(forms.sendMoney.getFieldsValue())
      }}
    >
      <div style={{padding: "40px 250px"}}>
        <C.Typography.Title>{t("sendMoney.title")}</C.Typography.Title>
        <C.Typography.Paragraph>{t("sendMoney.description")}</C.Typography.Paragraph>
        <Routes>
          <Route
            element={<Form values={values}/>}
            path='/'
          />
          <Route
            element={<Review values={values} />}
            path="/review"
          />
          <Route
            element={<Result />}
            path="/result"
          />
        </Routes>
      </div>
    </C.Form.Provider>
  )
}

const Result = () => {
  const {t} = useTranslation()
  const navigate = useNavigate();

  return (
    <>
      <C.Result
        extra={[
          <C.Button key={1} onClick={() => navigate('/')}>{t("sendMoney.result.success.actions.finish")}</C.Button>
        ]}
        status="success"
        title={t("sendMoney.result.success.message")}
      />
    </>
  )
}

const Review = ({values}: any) => {
  const {t} = useTranslation()
  const navigate = useNavigate();

  return (
    <>
      <C.Typography.Title level={2}>{t("sendMoney.review.name")}</C.Typography.Title>

      <C.Row gutter={[16, 16]}>
        {Object.entries(values).map(value => { if( value.length > 1 )  {
          return (
            <C.Col key={value[0]} span={24}>
              <C.Typography>
                <C.Typography.Text type='secondary'>{t(`sendMoney.form.fields.${value[0]}.label`)}:</C.Typography.Text>{" "}
                <C.Typography.Text>{value[1]}</C.Typography.Text>
              </C.Typography>
            </C.Col>
          )
        }})}
        <C.Col>
          <C.Button htmlType="button" type="primary" onClick={() => navigate('/send-money/result')}>
            {t("sendMoney.review.actions.continue")}
          </C.Button>
        </C.Col>
        <C.Col>
          <C.Button htmlType="button" onClick={() => navigate('/')}>
            {t("sendMoney.review.actions.cancel")}
          </C.Button>
        </C.Col>
      </C.Row>
    </>
  )
}

const Field = ({field}: any) => (
  <C.Form.Item
    label={field.label}
    name={field.name}
    rules={field.rules}
  >
    <C.Input type="text" />
  </C.Form.Item>
)

const Form = ({values = {}}: any) => {
  const navigate = useNavigate();
  const [form] = C.Form.useForm();

  const onFinish = (values: any) => {
    console.log('Submit:', values);
    navigate('/send-money/review');
  };

  return (
    <>
      <C.Typography.Title level={2}>{t("sendMoney.form.name")}</C.Typography.Title>
      <C.Form
        form={form}
        initialValues={values}
        layout='vertical'
        name="sendMoney"
        onFinish={onFinish}
      >
        <C.Row gutter={[16, 16]}>
          <C.Col span={24}>
            <Field
              field={{
                type: "text",
                label: t("sendMoney.form.fields.name.label"),
                name: "name",
                rules: [{
                  required: true,
                  message: t("sendMoney.form.fields.name.errorMessages.required")
                }]
              }}
            />
          </C.Col>
          <C.Col span={24}>
            <Field
              field={{
                type: "text",
                label: t("sendMoney.form.fields.amount.label"),
                name: "amount",
                rules: [{
                  required: true,
                  message: t("sendMoney.form.fields.amount.errorMessages.required")
                }]
              }}
            />
          </C.Col>
          <C.Col>
            <C.Button htmlType="submit" type="primary">
              {t("sendMoney.form.actions.submit")}
            </C.Button>
          </C.Col>
          <C.Col>
            <C.Button htmlType="button" onClick={() => navigate('/')}>
              {t("sendMoney.form.actions.cancel")}
            </C.Button>
          </C.Col>
        </C.Row>
      </C.Form>
    </>
  )
}

export const SendMoney = {
  Feature: Feature,
  locales: {
    en: {
      title: "Enviar dinero",
      description: "Puedes enviar dinero a cualquier persona",
      navigations: {
        mainMenu: "Enviar dinero"
      },
      form: {
        name: "Datos de la transferencia",
        fields: {
          name: {
            label: "Nombre del destinatario",
            name: "name",
            errorMessages: {
              required: "Necesitas decirnos a quien enviar el dinero"
            }
          },
          amount: {
            label: "Monto a transferir",
            name: "amount",
            errorMessages: {
              required: "Necesitas decirnos el monto a transferir"
            }
          }
        },
        actions: {
          submit: "Continuar",
          cancel: "Cancelar",
        }
      },
      review: {
        name: "Verifica los datos ingresados",
        actions: {
          continue: "Enviar dinero",
          cancel: "Cancelar",
        }
      },
      result: {
        success: {
          message: "Hemos enviado tu dinero con exito",
          actions: {
            finish: "Volver al menu"
          }
        },
        error: {
          message: "Algo malo sucedio",
          actions: {
            tryAgain: "Volver a intentar",
            finish: "Volver al menu"
          }
        }
      }
    }
  },
  routes: {
    index: "/send-money",
    inner: [
      {
        element: (values) => <Form values={values}/>,
        path: '/'
      },
      {
        element: (values) => <Review values={values} />,
        path: "/review"
      },
      {
        elemen: <Result />,
        path: "/result"
      }
    ]
  }
}

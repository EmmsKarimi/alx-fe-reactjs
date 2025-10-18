import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        alert("Form submitted!");
      }}
    >
      <Form>
        <div>
          <label>Username:</label>
          <Field name="username" />
          <ErrorMessage name="username" component="div" />
        </div>

        <div>
          <label>Email:</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label>Password:</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="div" />
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;

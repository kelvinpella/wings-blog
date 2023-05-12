
import { Formik, Form } from "formik";
import { ComponentProps, ReactNode } from "react";

// get the default prop types for Formik & Form components

type Props = ComponentProps<typeof Formik> & { children: ReactNode };
// Custom HOC  will render all form fields as children
export default function FormikWrapper({ children, ...props }: Props) {
  return (
    <Formik {...props}>
      <Form>{children}</Form>
    </Formik>
  );
}

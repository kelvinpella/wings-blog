import { AiOutlineSearch } from "react-icons/ai";
import { SearchPostSchema } from "@/zod/validationSchema";
import FormikWrapper from "../Formik/FormikWrapper";
import CustomInput from "../Formik/CustomInput";
import * as z from "zod";
import { FormikValues } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
const initialValues = {
  word: "",
};

const validationSchema = toFormikValidationSchema(SearchPostSchema);

type SubmitFunction = (values: FormikValues) => void;

const onSubmit: SubmitFunction = ({ word }) => {
  console.log(word);
};

const formikWrapperProps = { initialValues, validationSchema, onSubmit };

// Component to search for various posts
export default function SearchBar() {
  return (
    <FormikWrapper {...formikWrapperProps}>
      <div className="flex items-center space-x-2 lg:space-x-3">
        <CustomInput name="word" type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch className="text-2xl" />
        </button>
      </div>
    </FormikWrapper>
  );
}

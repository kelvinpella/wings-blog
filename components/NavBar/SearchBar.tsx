import { AiOutlineSearch } from "react-icons/ai";
import { SearchPostSchema } from "@/zod/validationSchema";
import FormikWrapper from "../Formik/FormikWrapper";
import CustomInput from "../Formik/CustomInput";
import { FormikValues } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useRouter } from "next/navigation";
const initialValues = {
  word: "",
};

const validationSchema = toFormikValidationSchema(SearchPostSchema);

type SubmitFunction = (values: FormikValues) => void;

// Component to search for various posts
export default function SearchBar() {
  const router = useRouter();
  const onSubmit: SubmitFunction = ({ word }) => {
    const encodedWord = encodeURIComponent(word);
    router.push(`/search/${encodedWord}`);
  };

  return (
    <FormikWrapper
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className="flex items-center space-x-2 lg:space-x-3">
        <CustomInput name="word" type="text" placeholder="Search by title" />
        <button type="submit">
          <AiOutlineSearch className="text-2xl" />
        </button>
      </div>
    </FormikWrapper>
  );
}

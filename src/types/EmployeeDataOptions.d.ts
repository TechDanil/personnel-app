import { TextFieldVariants } from "@mui/material";

type EmployeeDataOptions = {
    id: string;
    label: string;
    variant: TextFieldVariants | undefined;
    type?: string;
}

export { EmployeeDataOptions }
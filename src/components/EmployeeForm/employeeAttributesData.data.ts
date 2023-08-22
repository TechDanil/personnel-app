import { EmployeeDataOptions } from "../../types/EmployeeDataOptions";

const employeeAttributesData: EmployeeDataOptions[] = [
    {
        id: "name",
        label: "Имя",
        variant: "outlined",
    }, 

    {
        id: "surname",
        label: "Фамиля",
        variant: "outlined",
    }, 

    {
        id: "patronymic",
        label: "Отчество",
        variant: "outlined",
    }, 


    {
        id: "birthday",
        label: "Дата рождения",
        variant: "outlined",
        type: "date"
    }, 

    {
        id: "position",
        label: "Должность",
        variant: "outlined",
    }, 

    {
        id: "salary",
        label: "Сумма ЗП",
        variant: "outlined",
    }, 

    {
        id: "hired_date",
        label: "Дата найма",
        variant: "outlined",
        type: "date"
    }, 
];


export { employeeAttributesData };
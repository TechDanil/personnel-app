const signUpFormAttributes = [
    {   
        id: 1,
        name: 'name',
        rules: { required: 'Имя обязательно!' },
        label:"Имя",
    },

    {
        id: 2,
        name: 'surname',
        rules: { required: 'Фамилия обязательна!' },
        label:"Фамилия"
    },

    {
        id: 3,
        name: 'patronymic',
        rules: { required: 'Отчество обязательно!' },
        label:"Отчество"
    },


    {
        id: 4,
        name: 'birthdate',
        rules: { required: 'День рождения обязателен!' },
        label:"Отчество",
        type: "date"
    },

    {
        id: 5,
        name: 'companyName',
        rules: { required: 'Название компании обязательно!' },
        label:"Отчество"
    },
];


export { signUpFormAttributes };
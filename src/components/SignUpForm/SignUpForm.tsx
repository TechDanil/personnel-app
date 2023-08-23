import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Paper, Container, Typography, FormControl } from '@mui/material';
import { signUpFormAttributes } from './signUpFormAttributes.data';

const SignUpForm = () => {
    const { control, handleSubmit, formState: { errors }} = useForm();

    return (
        <Container 
            maxWidth="md"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh'
            }}
        >
            <Paper 
                elevation={3} 
                style={{ 
                    padding: '20px',
                }}
                    >
                <Typography 
                    variant="h5"
                >
                    HR Manager регистрация
                </Typography>
                <form>
                   
                    {
                        signUpFormAttributes.map(element => (
                            <FormControl fullWidth margin="normal" key={element.id}>
                                <Controller
                                    name={element.name}
                                    control={control}
                                    rules={element.rules}
                                    render={({ field }) => (
                                        <TextField
                                            label={element.name}
                                            variant="outlined"
                                            fullWidth
                                            type={element.type}
                                            {...field}
                                        />
                                    )}
                                />
                            </FormControl>
                        ))
                    }
                    <Button variant="contained" color="primary" type="submit">
                        Register as HR Manager
                    </Button>
                </form>
            </Paper>
        </Container>
    );
}

export default SignUpForm;



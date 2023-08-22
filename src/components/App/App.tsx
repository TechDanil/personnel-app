import { Container, CssBaseline, Grid } from '@mui/material';
import EmployeeForm from "../EmployeeForm/EmployeeForm";

const App = () => {
    return (
        <Container 
            component="main" 
            maxWidth="md"
        >
            <CssBaseline />
            <Grid 
                container 
                justifyContent="center" 
                alignItems="center" 
                style={{ minHeight: '100vh' }}
            >
                <Grid item>
                    <EmployeeForm />
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;
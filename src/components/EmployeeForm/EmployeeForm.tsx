import { TextField, Button, Grid, Paper } from '@mui/material';
import { employeeAttributesData } from './employeeAttributesData.data';

const EmployeeForm = () => {
    return (
        <Paper elevation={3} style={{ padding: '20px' }}>
            <form>
                <Grid container spacing={3}>
                    {employeeAttributesData.map(employeeEl => (
                        <Grid item xs={6}>
                            <TextField
                                {...employeeEl}
                                fullWidth
                                required
                            />
                        </Grid>
                    ))}

                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            fullWidth
                        >
                            Add Employee
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    );
}

export default EmployeeForm;
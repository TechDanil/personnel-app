import { TextField, Button, Grid, Paper } from '@mui/material';

const EmployeeForm = () => {
    return (
        <Paper elevation={3} style={{ padding: '20px' }}>
            <form>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <TextField
                            label="Имя"
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            label="Фамиля"
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            label="Отчество"
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            label="Дата рождения"
                            variant="outlined"
                            fullWidth
                            type="date"
                            required
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            label="Должность"
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField
                            label="Сумма ЗП"
                            variant="outlined"
                            fullWidth
                            type="number"
                            required
                        />
                    </Grid>
                    
                    <Grid item xs={6}>
                        <TextField
                            label="Дата найма"
                            variant="outlined"
                            fullWidth
                            type="date"
                            required
                        />
                    </Grid>

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
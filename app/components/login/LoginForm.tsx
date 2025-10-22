import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import RegisterIcon from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useMutation, useQuery } from '@tanstack/react-query';
import { loginServerAction } from '~/serverActions/loginActions/loginSeverAction';
import { LoginSchema } from '~/schemas/loginSchema';

const LoginForm = () => {

    // const { data } = useQuery({
    //     queryKey: ['login'],
    //     queryFn: (data) => loginServerAction(data)
    // })
    const mutation = useMutation({
        mutationFn: loginServerAction,
        // TODO add dialogue or toast to show the success message
        onSuccess: () => {
            console.log("login successful")
        }
    });

    return (
        <>
            <TextField fullWidth id="outlined-required" required label='username' type='text' placeholder='username' name='username' className='' variant='standard' />
            <TextField fullWidth id="outlined-required" required label='password' type='password' placeholder='password' className='' name='password' variant='standard' />
            <Stack sx={{
                flexDirection: {
                    lg: 'row'
                }
            }} width={'100%'} flex={'flex'} gap={1}>
                <Button onClick={() => {
                    mutation.mutate({})
                }} fullWidth loadingIndicator="loading" variant='contained' className='' type='button' size='medium' startIcon={<LoginIcon />}>
                    Login
                </Button>
                <Button fullWidth variant="outlined" startIcon={<RegisterIcon />}>
                    Register
                </Button>
                {/* {mutation.data} */}
            </Stack>
        </>
    )
}

export default LoginForm;
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import RegisterIcon from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { useMutation, useQuery } from '@tanstack/react-query';
import { loginServerAction } from '~/serverActions/loginActions/loginSeverAction';
import { LoginSchema } from '~/schemas/loginSchema';
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'

const LoginForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(LoginSchema)
    })

    const mutation = useMutation({
        mutationFn: loginServerAction,
        // TODO add dialogue or toast to show the success message
        onSuccess: () => {
            console.log("login successful")
        }
    });

    return (
        <form onSubmit={handleSubmit((data) => mutation.mutate(data))} className='flex flex-col items-center w-full gap-5'>
            <div className='w-full'>
                <TextField {...register("username")} fullWidth required label='username' type='text' placeholder='username' error={errors.username ? true : false} name='username' id="" className='' variant='standard' />
                <span className='w-full text-xs text-left text-red-400'>{errors.username ? errors.username.message : ""}</span>
            </div>
            <div className='w-full'>
                <TextField {...register("password")} error={errors.password ? true : false} fullWidth required label='password' type='password' placeholder='password' className='' name='password' id="" variant='standard' />
                <span className='w-full text-xs text-left text-red-400'>{errors.password ? errors.password.message : ""}</span>
            </div>
            <Stack sx={{
                flexDirection: {
                    lg: 'row'
                }
            }} width={'100%'} flex={'flex'} gap={1}>
                <Button fullWidth loadingIndicator="loading" variant='contained' className='' type='submit' size='medium' startIcon={<LoginIcon />}>
                    Login
                </Button>
                <Button fullWidth variant="outlined" startIcon={<RegisterIcon />}>
                    Register
                </Button>
            </Stack>
        </form>
    )
}

export default LoginForm;
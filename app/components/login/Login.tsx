import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import RegisterIcon from '@mui/icons-material/Person';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box'
// import { styled } from '@mui/material/styles';
// import Badge, { badgeClasses } from '@mui/material/Badge';


// const CartBadge = styled(Badge)`
//   & .${badgeClasses.badge} {
//     top: -12px;
//     right: -6px;
//   }
// `;


const Login = () => {
    return (
        <Stack sx={{
            padding: {
                xs: 5,
                sm: 6,
                md: 7,
                lg: 20
            },
            paddingX: {
                lg: 50,
                md: 30,
                sm: 15,
                xs: 2
            },
        }}
            className='w-screen h-screen'
        >
            <Stack
                padding={5}
                borderRadius={2}
                border={'1px solid #555'}
                sx={{
                    paddingX: {
                        lg: 10
                    },
                    spacing: {
                        xl: 0,
                    }
                }}
                className='xl:h-full duration-300 justify-between hover:border! hover:border-[#999]! bg-linear-to-bl from-[#1f1f1f] to-[#171717]'
                flexDirection={'column'} spacing={3} justifyItems={'flex-end'}  alignItems={'center'}>
                <h3 className='text-3xl'>
                    Login
                </h3>
                <TextField fullWidth id="outlined-required" required label='username' type='text' placeholder='username' className='' variant='standard' />
                <TextField fullWidth id="outlined-required" required label='password' type='password' placeholder='username' className='' variant='standard' />
                <Stack sx={{
                    flexDirection: {
                        lg: 'row'
                    }
                }} width={'100%'} flex={'flex'} gap={1}>
                    <Button fullWidth loadingIndicator="loading" variant='contained' className='' type='button' color='info' size='medium' startIcon={<LoginIcon />}>
                        Login
                    </Button>
                    <Button fullWidth variant="outlined" startIcon={<RegisterIcon />}>
                        Register
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Login;
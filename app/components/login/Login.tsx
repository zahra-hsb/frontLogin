import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box'
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
        // <div className='p-10 w-screen flex items-center justify-center h-screen'>
        <Stack paddingX={1}>
            <Stack sx={{
                padding: {
                    xs: 2,
                    sm: 3,
                    md: 4,
                    lg: 5
                },
                paddingX: {
                    lg: 50
                },
            }} 
            
            spacing={2} flexDirection={'column'} justifyItems={'center'} gap={'2'} alignItems={'center'}>
                <TextField sx={{
                    // borderBottom: '1px '
                }} fullWidth id="outlined-required" required label='username' type='text' placeholder='username' className='dark:border-gray-300!' variant='standard' />
                <TextField sx={{
                    // borderBottom: '1px '
                }} fullWidth id="outlined-required" required label='password' type='password' placeholder='username' className='dark:border-gray-300!' variant='standard' />
                {/* <Stack flex={'flex'} flexDirection={'row'} gap={1}> */}
                <Button fullWidth loadingIndicator="loading" variant='contained' className='' type='button' color='info' size='medium' startIcon={<LoginIcon />}>
                    Login
                    {/* <CartBadge badgeContent={2} color="primary" overlap="circular" /> */}
                </Button>
                {/* <Button fullWidth variant="outlined" startIcon={}>
                    
                </Button> */}
                {/* </Stack> */}
            </Stack>
        </Stack>
        // </div>
    )
}

export default Login;
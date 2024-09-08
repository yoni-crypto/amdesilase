import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import axios from 'axios';
import StudentDataGrid from './studentDataGrid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NAVIGATION = [
    {
        kind: 'header',
        title: 'Main items',
    },
    {
        segment: 'dashboard',
        title: 'Dashboard',
        icon: <DashboardIcon />,
    },
    {
        kind: 'divider',
    },
    {
        kind: 'header',
        title: 'Classes',
    },
    ...[...Array(10)].map((_, i) => ({
        segment: `class-${i + 1}`,
        title: `Class ${i + 1}`,
        icon: <LayersIcon />,
    })),
];

const demoTheme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});
const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 220,
    height: 120,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
}));


function DemoPageContent({ pathname }) {
    const [totalStudents, setTotalStudents] = React.useState(0);

    React.useEffect(() => {
        const fetchTotalStudents = async () => {
            try {
                const response = await axios.get('https://amdesilase-api.vercel.app/api/admin/students/totalCount');
                setTotalStudents(response.data.totalCount);
            } catch (error) {
                console.error("Failed to fetch total student count", error);
                toast.error("Failed to fetch total student count ")
            }
        };

        if (pathname === '/dashboard') {
            fetchTotalStudents();
        }
    }, [pathname]);

    const isDashboard = pathname === '/dashboard';
    const className = pathname.startsWith('/class-') ? pathname.split('-')[1] : null;

    return (
        <Box
            sx={{
                py: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
            }}
        >
            {isDashboard ? (
                <Stack direction="row" spacing={2}>
                    <DemoPaper variant="elevation">Total Students: <br/><br/>{totalStudents}</DemoPaper>
                </Stack>
            ) : className ? (
                <StudentDataGrid className={className} />
            ) : (
                <Typography variant="h4">Select a Class</Typography>
            )}
        </Box>
    );
}

DemoPageContent.propTypes = {
    pathname: PropTypes.string.isRequired,
};

function DashboardLayoutBasic(props) {
    const { window } = props;

    const [pathname, setPathname] = React.useState('/dashboard');

    const router = React.useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path) => setPathname(String(path)),
        };
    }, [pathname]);

    const demoWindow = window !== undefined ? window() : undefined;

    return (
        <AppProvider
            navigation={NAVIGATION}
            router={router}
            theme={demoTheme}
            window={demoWindow}
        >
            <DashboardLayout>
                <DemoPageContent pathname={pathname} />
            </DashboardLayout>
        </AppProvider>
    );
}

DashboardLayoutBasic.propTypes = {
    window: PropTypes.func,
};

export default DashboardLayoutBasic;

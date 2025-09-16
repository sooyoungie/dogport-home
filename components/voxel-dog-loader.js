import { lazy, Suspense } from 'react';
import { Box, Spinner } from '@chakra-ui/react';

const LazyVoxelDog = lazy(() => import('./voxel-dog'));

const VoxelDogLoader = () => {
    return (
        <Suspense fallback={
            <Box 
                m="auto" 
                mt={['-20px', '-60px', '-120px']}
                mb={['-40px', '-140px', '-200px']} 
                w={[280, 480, 640]}
                h={[280, 480, 640]}
                position="relative"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Spinner size='xl' />
            </Box>
        }>
            <LazyVoxelDog />
        </Suspense>
    );
};

export default VoxelDogLoader;
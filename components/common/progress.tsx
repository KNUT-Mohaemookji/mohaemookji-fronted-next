import React from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

const Progress = () => {
    return (
        <>
            <div className="progress-bar">
                <Stack
                    sx={{ width: '100%', color: 'grey.500', position: 'relative' }} spacing={2}>
                    <LinearProgress color="inherit" />
                </Stack>
            </div>
            <style jsx>{`
                .progress-bar {
                    position: relative;
                    z-index: 100;
                    margin-top: -6px;
                }
            `}</style>
        </>
    );
};

export default Progress;
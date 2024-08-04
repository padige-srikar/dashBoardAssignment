import React from 'react';
import { Box} from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#22272e',
    // textAlign: 'center',
    height: '155px',
    overflowY: 'scroll',
    // overflowX: 'scroll',
}));

// Register the components with Chart.js
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

// Define a custom plugin to handle the border radius
const roundedBarPlugin = {
    id: 'roundedBar',
    beforeDraw: chart => {
        const {
            ctx,
            chartArea: { left, top, right, bottom, width, height },
            scales: { x, y },
        } = chart;
        ctx.save();

        chart.data.datasets.forEach((dataset, i) => {
            chart.getDatasetMeta(i).data.forEach((bar, index) => {
                const { x: barX, y: barY, base: barBase } = bar;

                // Define the border radius
                const borderRadius = 20;

                // Draw the rounded bar
                ctx.beginPath();
                ctx.fillStyle = dataset.backgroundColor[index];

                // Top rounded corners
                ctx.moveTo(barX - width / 2, barY);
                ctx.lineTo(barX + width / 2, barY);
                ctx.quadraticCurveTo(barX + width / 2, barY - borderRadius, barX + width / 2 - borderRadius, barY - borderRadius);
                ctx.lineTo(barX - width / 2 + borderRadius, barY - borderRadius);
                ctx.quadraticCurveTo(barX - width / 2, barY - borderRadius, barX - width / 2, barY);

                // Bottom corners
                ctx.lineTo(barX - width / 2, barBase);
                ctx.lineTo(barX + width / 2, barBase);

                ctx.closePath();
                ctx.fill();
            });
        });

        ctx.restore();
    },
};

const BarChart = () => {
    const data = {
        labels: ['January', 'February', 'March'],
        datasets: [
            {
                label: 'Sales',
                // data: [65, 59, 80, 81, 56, 55, 40],
                data: [6, 5, 3],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            tooltip: {
                enabled: true,
            },
        },
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <Item>
            <Box sx={{ width: '915px' }}>
                <Bar data={data} options={options} plugins={[roundedBarPlugin]} />
            </Box>
        </Item>
    );
};

export default BarChart;

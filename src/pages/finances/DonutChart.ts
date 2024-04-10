import { Chart } from "chart.js";
import {Doughnut} from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Title,
    Legend
} from 'chart.js';
import React from 'react';
ChartJS.register(ArcElement, Tooltip, Title, Legend);
Chart.defaults.color = '#ffffff';
Chart.defaults.font.size = 16;


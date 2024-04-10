import React from 'react'
import {BarChart, Tooltip, Legend, CartesianGrid, XAxis, YAxis, Bar } from 'recharts'
import { ResponsiveContainer } from 'recharts'

const data = [
    {
        name: 'Cuentas activas',
        cantidad: 10,
    },
    {
        name: 'Cuentas Inactivas',
        cantidad: 15,
    }

]

const DonutsChart = () => {
    return (
        <ResponsiveContainer width="100%" aspect={2}>
             {/* Wrap the child elements with a single parent element */}
            <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="name" fill="#8884d8" />
                <Bar dataKey="cantidad" fill="#82ca9d" />
                </BarChart>
        
        </ResponsiveContainer>
    )
}

export default DonutsChart

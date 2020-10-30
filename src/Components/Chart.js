import React from 'react';

// Material UI
import { useTheme } from '@material-ui/core/styles';

// Componentes de Recharts -> Gráficos
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';

// Componentes propios
import Title from './Title';

// Mocked Data
import { MockedData } from '../Mocks/Data';

export default function Chart() {
    
    const theme = useTheme();

    return(
        <React.Fragment>
            <Title>Datos de Hoy</Title>
            <ResponsiveContainer>
                <LineChart
                    data = { MockedData }
                    margin = {{top: 16, bottom: 0, right: 16, left: 0}}
                >
                    <XAxis
                        dataKey='time'
                        stroke={theme.palette.text.secondary}
                    >
                    </XAxis>
                    <YAxis
                        stroke={theme.palette.text.secondary}
                    >
                        <Label
                            angle={270}
                            position='left'
                            style={{
                                textAnchor: 'middle',
                                fill: theme.palette.text.primary
                            }}
                        >
                            Ventas
                        </Label>
                    </YAxis>
                    <Line
                        type='monotone'
                        dataKey='amount'
                        stroke={theme.palette.primary.main}
                    >
                    </Line>
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    );


}

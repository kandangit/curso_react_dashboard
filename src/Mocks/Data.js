// Función para crear Datos Mock
function createData(time, amount){
    return {time, amount}
}

export const MockedData = [
    createData('00:00', 0),
    createData('03:00', 300),
    createData('06:00', 600),
    createData('09:00', 900),
    createData('12:00', 1200),
    createData('15:00', 1500),
    createData('18:00', 1800),
    createData('21:00', 2100),
    createData('24:00', undefined),
];

function createOrdersData(id, date, name, address, paymentMethod, amount){
    return {id, date, name, address, paymentMethod, amount};
}

export const MockedOrdersData = [
    createOrdersData(0, '24 Marzo 2020', 'Martin', 'Valencia', 'VISA ***9824', 29.99),
    createOrdersData(1, '24 Marzo 2020', 'Andrés', 'Valencia', 'VISA ***8704', 30.99),
    createOrdersData(2, '24 Marzo 2020', 'Alba', 'Madrid', 'VISA ***9674', 100.75),
    createOrdersData(3, '24 Marzo 2020', 'Sergio', 'Valencia', 'VISA ***9820', 1000.00),
    createOrdersData(4, '24 Marzo 2020', 'Adrián', 'Barcelona', 'VISA ***9844', 9.99),
    createOrdersData(5, '24 Marzo 2020', 'Anabel', 'Sevilla', 'VISA ***3429', 37.20),
]

export const MockSummary = 
    {
        date: new Date(),
        total: 10000
    }
let barChart, pieChart, lineChart;

document.getElementById('financeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const income = parseFloat(document.getElementById('income').value);
    const expenses = parseFloat(document.getElementById('expenses').value);
    const savings = parseFloat(document.getElementById('savings').value);
    const bills = parseFloat(document.getElementById('bills').value);
    const invest = parseFloat(document.getElementById('invest').value);
    const budget = parseFloat(document.getElementById('budget').value);

    const tbody = document.getElementById('financialTable').getElementsByTagName('tbody')[0];
    const newRow = tbody.insertRow();
    
    newRow.insertCell(0).textContent = income;
    newRow.insertCell(1).textContent = expenses;
    newRow.insertCell(2).textContent = savings;
    newRow.insertCell(3).textContent = bills;
    newRow.insertCell(4).textContent = invest;
    newRow.insertCell(5).textContent = budget;

    document.getElementById('financeForm').reset();

    const chartData = {
        labels: ['Income', 'Expenses', 'Savings', 'Bills', 'Invest', 'Budget'],
        datasets: [{
            label: 'Amount in USD',
            data: [income, expenses, savings, bills, invest, budget],
            backgroundColor: ['#4CAF50', '#FF5722', '#2196F3', '#FF9800', '#00BCD4', '#8E24AA'],
        }]
    };

    if (barChart) barChart();
    const barCtx = document.getElementById('barChart');
    barChart = new Chart(barCtx, {
        type: 'bar',
        data: chartData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    if (pieChart) pieChart();
    const pieCtx = document.getElementById('pieChart');
    pieChart = new Chart(pieCtx, {
        type: 'pie',
        data: chartData
    });

    if (lineChart) lineChart();
    const lineCtx = document.getElementById('lineChart');
    lineChart = new Chart(lineCtx, {
        type: 'line',
        data: chartData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

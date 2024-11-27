const form = document.getElementById('financeform');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const income = parseFloat(document.getElementById('income').value);
    const expenses = parseFloat(document.getElementById('expenses').value);
    const savings = parseFloat(document.getElementById('savings').value);
    const bills = parseFloat(document.getElementById('bills').value);
    const invest = parseFloat(document.getElementById('invest').value);
    const budget = parseFloat(document.getElementById('budget').value);

    const data = {
        labels: ['Income vs Expenses', 'Savings', 'Bills Payment', 'Investments', 'Budget'],
        datasets: [{
            label: 'Amount in USD',
            data: [income - expenses, savings, bills, invest, budget],
            backgroundColor: ['#4CAF50', '#2196F3', '#FF5722', '#FF9800', '#00BCD4'],
        }]
    };

    const ctx = document.getElementById('combined-chart').getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

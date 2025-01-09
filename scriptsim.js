// Simulated Backend Data
const data = {
    week: {
        financial: [12000, 15000, 17000],
        compliance: [98, 95, 97],
        operations: [85, 80, 90]
    },
    month: {
        financial: [50000, 60000, 70000],
        compliance: [92, 89, 94],
        operations: [88, 85, 91]
    },
    year: {
        financial: [600000, 700000, 800000],
        compliance: [90, 87, 88],
        operations: [80, 75, 85]
    }
};

const filterDropdown = document.getElementById('filter');
const applyFilterBtn = document.getElementById('applyFilter');
const financialChart = document.getElementById('financial-chart');
const complianceChart = document.getElementById('compliance-chart');
const operationsChart = document.getElementById('operations-chart');
const notifications = document.getElementById('notifications');

// Function to render a simple bar chart
function renderChart(container, values, labels) {
    container.innerHTML = ''; // Clear existing content
    values.forEach((value, index) => {
        const bar = document.createElement('div');
        bar.style.width = '30%';
        bar.style.height = `${value / 1000 * 100}px`; // Adjust height calculation as needed
        bar.style.background = '#36013F';
        bar.style.margin = '5px';
        bar.style.display = 'inline-block';
        bar.title = `${labels[index]}: ${value}`; // Add tooltip for clarity
        container.appendChild(bar);
    });
}

// Function to display notifications
function displayNotification(message) {
    const notification = document.createElement('p');
    notification.innerText = message;
    notifications.appendChild(notification);
}

// Apply Filter
function applyFilter() {
    const selectedRange = filterDropdown.value;
    const selectedData = data[selectedRange];

    renderChart(financialChart, selectedData.financial, ['Q1', 'Q2', 'Q3']);
    renderChart(complianceChart, selectedData.compliance, ['Dept A', 'Dept B', 'Dept C']);
    renderChart(operationsChart, selectedData.operations, ['Region 1', 'Region 2', 'Region 3']);

    if (selectedData.compliance.some(value => value < 90)) {
        displayNotification('⚠️ Compliance risk detected in one or more departments!');
    }
}

// Event Listener
applyFilterBtn.addEventListener('click', applyFilter);

// Initialize Dashboard
applyFilter();

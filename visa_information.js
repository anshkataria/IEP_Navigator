// Sample visa requirements data
let visaRequirements = [
    { country: 'United States', requirement: 'Valid Passport, Proof of Funds, Admission Letter from a University' },
    { country: 'Canada', requirement: 'Valid Passport, Proof of Funds, Medical Checkup, Police Certificate' },
    { country: 'United Kingdom', requirement: 'Valid Passport, Financial Proof, English Language Proficiency Test Results' },
];

// Function to render the visa requirements list
function renderVisaRequirements() {
    const visaTableBody = document.querySelector("#visa-table tbody");
    visaTableBody.innerHTML = ''; // Clear existing rows

    visaRequirements.forEach(visa => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${visa.country}</td>
            <td>${visa.requirement}</td>
            <td>
                <button onclick="openEditVisaModal('${visa.country}')">Edit</button>
                <button onclick="deleteVisaRequirement('${visa.country}')">Delete</button>
            </td>
        `;
        visaTableBody.appendChild(row);
    });
}

// Function to open Add Visa Requirement modal
function openAddVisaModal() {
    document.getElementById("visa-modal").style.display = 'block';
    document.getElementById("modal-title").textContent = "Add Visa Requirement";
    document.getElementById("visa-form").reset();
}

// Function to open Edit Visa Requirement modal
function openEditVisaModal(country) {
    const visa = visaRequirements.find(v => v.country === country);
    if (visa) {
        document.getElementById("visa-country").value = visa.country;
        document.getElementById("visa-requirement").value = visa.requirement;
        document.getElementById("visa-modal").style.display = 'block';
        document.getElementById("modal-title").textContent = "Edit Visa Requirement";
    }
}

// Function to close the modal
function closeModal() {
    document.getElementById("visa-modal").style.display = 'none';
}

// Function to handle form submission (Add/Edit)
document.getElementById("visa-form").addEventListener('submit', function (event) {
    event.preventDefault();
    
    const country = document.getElementById("visa-country").value;
    const requirement = document.getElementById("visa-requirement").value;

    const existingVisa = visaRequirements.find(v => v.country === country);

    if (existingVisa) {
        // Update visa requirement
        existingVisa.requirement = requirement;
    } else {
        // Add new visa requirement
        visaRequirements.push({ country, requirement });
    }

    closeModal();
    renderVisaRequirements();
});

// Function to delete a visa requirement
function deleteVisaRequirement(country) {
    visaRequirements = visaRequirements.filter(v => v.country !== country);
    renderVisaRequirements();
}

// Initialize visa requirements list
renderVisaRequirements();

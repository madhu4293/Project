const modelsData = {
    "Realme": [
        { name: "Realme 10 Pro", processor: "Snapdragon 888", camera: "108MP", storage: "128GB", battery: "4500 mAh", version: "Realme UI 3.0", legalInfo: "Copyright 2023", ram: "8GB" },
        { name: "Realme 9", processor: "Snapdragon 695", camera: "108MP", storage: "128GB", battery: "5000 mAh", version: "Realme UI 3.0", legalInfo: "Copyright 2023", ram: "8GB" },
        { name: "Realme GT", processor: "Snapdragon 888", camera: "64MP", storage: "256GB", battery: "4500 mAh", version: "Realme UI 2.0", legalInfo: "Copyright 2023", ram: "12GB" },
        { name: "Realme 8", processor: "MediaTek Helio G95", camera: "64MP", storage: "128GB", battery: "5000 mAh", version: "Realme UI 2.0", legalInfo: "Copyright 2023", ram: "8GB" },
        { name: "Realme Narzo 30", processor: "MediaTek Helio G95", camera: "48MP", storage: "128GB", battery: "5000 mAh", version: "Realme UI 2.0", legalInfo: "Copyright 2023", ram: "6GB" },
        { name: "Realme C25", processor: "MediaTek Helio G70", camera: "48MP", storage: "128GB", battery: "5000 mAh", version: "Realme UI 2.0", legalInfo: "Copyright 2023", ram: "4GB" },
        { name: "Realme X7", processor: "Dimensity 800U", camera: "64MP", storage: "128GB", battery: "4500 mAh", version: "Realme UI 2.0", legalInfo: "Copyright 2023", ram: "8GB" },
        { name: "Realme GT Master", processor: "Snapdragon 778G", camera: "64MP", storage: "256GB", battery: "4300 mAh", version: "Realme UI 2.0", legalInfo: "Copyright 2023", ram: "8GB" },
        { name: "Realme 5", processor: "Snapdragon 665", camera: "12MP", storage: "64GB", battery: "5000 mAh", version: "Realme UI 2.0", legalInfo: "Copyright 2023", ram: "3GB" },
        { name: "Realme 6i", processor: "MediaTek Helio G90T", camera: "48MP", storage: "128GB", battery: "5000 mAh", version: "Realme UI 2.0", legalInfo: "Copyright 2023", ram: "4GB" }
    ],
    "Redmi": [
        { name: "Redmi Note 11", processor: "Snapdragon 680", camera: "50MP", storage: "64GB", battery: "5000 mAh", version: "MIUI 13", legalInfo: "Copyright 2023", ram: "4GB" },
        { name: "Redmi Note 11 Pro", processor: "MediaTek Helio G96", camera: "108MP", storage: "128GB", battery: "5000 mAh", version: "MIUI 13", legalInfo: "Copyright 2023", ram: "6GB" },
        { name: "Redmi K40", processor: "Snapdragon 870", camera: "48MP", storage: "128GB", battery: "4500 mAh", version: "MIUI 12", legalInfo: "Copyright 2023", ram: "8GB" },
        { name: "Redmi Note 10", processor: "Snapdragon 678", camera: "48MP", storage: "128GB", battery: "5000 mAh", version: "MIUI 12", legalInfo: "Copyright 2023", ram: "6GB" },
        { name: "Redmi K40 Gaming", processor: "Dimensity 1200", camera: "64MP", storage: "128GB", battery: "5065 mAh", version: "MIUI 12", legalInfo: "Copyright 2023", ram: "8GB" },
        { name: "Redmi 10", processor: "MediaTek Helio G88", camera: "50MP", storage: "128GB", battery: "5000 mAh", version: "MIUI 12.5", legalInfo: "Copyright 2023", ram: "4GB" },
        { name: "Redmi Note 9", processor: "MediaTek Helio G85", camera: "48MP", storage: "128GB", battery: "5020 mAh", version: "MIUI 12", legalInfo: "Copyright 2023", ram: "4GB" },
        { name: "Redmi K30", processor: "Snapdragon 765G", camera: "64MP", storage: "128GB", battery: "4500 mAh", version: "MIUI 12", legalInfo: "Copyright 2023", ram: "6GB" },
        { name: "Redmi Note 8", processor: "Snapdragon 665", camera: "48MP", storage: "128GB", battery: "4000 mAh", version: "MIUI 12", legalInfo: "Copyright 2023", ram: "4GB" },
        { name: "Redmi 9", processor: "MediaTek Helio G35", camera: "13MP", storage: "64GB", battery: "5020 mAh", version: "MIUI 12", legalInfo: "Copyright 2023", ram: "4GB" }
    ],
    "Oppo": [
        { name: "Oppo Find X3", processor: "Snapdragon 888", camera: "50MP", storage: "256GB", battery: "4500 mAh", version: "ColorOS 11.2", legalInfo: "Copyright 2023", ram: "12GB" },
        { name: "Oppo Reno 6", processor: "Dimensity 900", camera: "64MP", storage: "128GB", battery: "4300 mAh", version: "ColorOS 11.3", legalInfo: "Copyright 2023", ram: "8GB" },
        { name: "Oppo A54", processor: "MediaTek Helio P35", camera: "13MP", storage: "128GB", battery: "5000 mAh", version: "ColorOS 11", legalInfo: "Copyright 2023", ram: "4GB" },
        { name: "Oppo Reno 5", processor: "Snapdragon 720G", camera: "64MP", storage: "128GB", battery: "4310 mAh", version: "ColorOS 11.1", legalInfo: "Copyright 2023", ram: "8GB" },
        { name: "Oppo F19", processor: "Snapdragon 662", camera: "48MP", storage: "128GB", battery: "5000 mAh", version: "ColorOS 11.1", legalInfo: "Copyright 2023", ram: "6GB" },
        { name: "Oppo A74", processor: "Snapdragon 480", camera: "48MP", storage: "128GB", battery: "5000 mAh", version: "ColorOS 11.1", legalInfo: "Copyright 2023", ram: "6GB" },
        { name: "Oppo F17 Pro", processor: "MediaTek Helio P95", camera: "48MP", storage: "128GB", battery: "4015 mAh", version: "ColorOS 7.2", legalInfo: "Copyright 2023", ram: "8GB" },
        { name: "Oppo Reno 4", processor: "Snapdragon 720G", camera: "48MP", storage: "128GB", battery: "4015 mAh", version: "ColorOS 7.2", legalInfo: "Copyright 2023", ram: "8GB" },
        { name: "Oppo A93", processor: "MediaTek Helio P95", camera: "48MP", storage: "128GB", battery: "5000 mAh", version: "ColorOS 7.2", legalInfo: "Copyright 2023", ram: "8GB" },
        { name: "Oppo A12", processor: "MediaTek Helio P35", camera: "13MP", storage: "64GB", battery: "4230 mAh", version: "ColorOS 7.1", legalInfo: "Copyright 2023", ram: "3GB" }
    ],
    "Vivo": [
        { name: "Vivo V21", processor: "Dimensity 800U", camera: "64MP", storage: "128GB", battery: "4000 mAh", version: "Funtouch OS 11.1", legalInfo: "Copyright 2023", ram: "8GB" },
        { name: "Vivo Y20", processor: "Snapdragon 460", camera: "13MP", storage: "64GB", battery: "5000 mAh", version: "Funtouch OS 11", legalInfo: "Copyright 2023", ram: "4GB" },
        { name: "Vivo X70", processor: "Dimensity 1200", camera: "50MP", storage: "256GB", battery: "4400 mAh", version: "Funtouch OS 12", legalInfo: "Copyright 2023", ram: "12GB" },
        { name: "Vivo V19", processor: "Snapdragon 712", camera: "48MP", storage: "128GB", battery: "4500 mAh", version: "Funtouch OS 10.0", legalInfo: "Copyright 2023", ram: "8GB" },
        { name: "Vivo Y31", processor: "Snapdragon 662", camera: "48MP", storage: "128GB", battery: "5000 mAh", version: "Funtouch OS 11", legalInfo: "Copyright 2023", ram: "6GB" },
        { name: "Vivo X60", processor: "Exynos 1080", camera: "48MP", storage: "128GB", battery: "4300 mAh", version: "Funtouch OS 11.1", legalInfo: "Copyright 2023", ram: "12GB" },
        { name: "Vivo V15 Pro", processor: "Snapdragon 675", camera: "48MP", storage: "128GB", battery: "3700 mAh", version: "Funtouch OS 9.0", legalInfo: "Copyright 2023", ram: "6GB" },
        { name: "Vivo S1", processor: "MediaTek Helio P60", camera: "16MP", storage: "128GB", battery: "4500 mAh", version: "Funtouch OS 9.0", legalInfo: "Copyright 2023", ram: "4GB" },
        { name: "Vivo Y12", processor: "MediaTek Helio P22", camera: "13MP", storage: "32GB", battery: "5000 mAh", version: "Funtouch OS 9.0", legalInfo: "Copyright 2023", ram: "3GB" },
        { name: "Vivo V20", processor: "Snapdragon 720G", camera: "64MP", storage: "128GB", battery: "4000 mAh", version: "Funtouch OS 11", legalInfo: "Copyright 2023", ram: "8GB" }
    ],
    "iQOO": [
        { name: "iQOO 7", processor: "Snapdragon 888", camera: "48MP", storage: "128GB", battery: "4400 mAh", version: "Funtouch OS 11", legalInfo: "Copyright 2023", ram: "8GB" },
        { name: "iQOO 8", processor: "Snapdragon 888+", camera: "50MP", storage: "256GB", battery: "4350 mAh", version: "Funtouch OS 12", legalInfo: "Copyright 2023", ram: "12GB" },
        { name: "iQOO Z3", processor: "Snapdragon 768G", camera: "64MP", storage: "128GB", battery: "4400 mAh", version: "Funtouch OS 11", legalInfo: "Copyright 2023", ram: "8GB" },
        { name: "iQOO 3", processor: "Snapdragon 865", camera: "48MP", storage: "256GB", battery: "4400 mAh", version: "Funtouch OS 10.0", legalInfo: "Copyright 2023", ram: "8GB" },
        { name: "iQOO Neo 5", processor: "Snapdragon 870", camera: "48MP", storage: "128GB", battery: "4400 mAh", version: "Funtouch OS 11", legalInfo: "Copyright 2023", ram: "8GB" },
        { name: "iQOO Z5", processor: "Snapdragon 778G", camera: "64MP", storage: "128GB", battery: "4400 mAh", version: "Funtouch OS 11", legalInfo: "Copyright 2023", ram: "8GB" },
        { name: "iQOO 5", processor: "Snapdragon 865", camera: "48MP", storage: "256GB", battery: "4350 mAh", version: "Funtouch OS 10.5", legalInfo: "Copyright 2023", ram: "12GB" },
        { name: "iQOO 9", processor: "Snapdragon 888", camera: "50MP", storage: "256GB", battery: "4350 mAh", version: "Funtouch OS 12", legalInfo: "Copyright 2023", ram: "12GB" },
        { name: "iQOO 9 Pro", processor: "Snapdragon 888+", camera: "50MP", storage: "256GB", battery: "4500 mAh", version: "Funtouch OS 12", legalInfo: "Copyright 2023", ram: "12GB" },
        { name: "iQOO Neo 6", processor: "Snapdragon 870", camera: "64MP", storage: "128GB", battery: "4700 mAh", version: "Funtouch OS 12", legalInfo: "Copyright 2023", ram: "8GB" }
    ],
    "OnePlus": [
        { name: "OnePlus 9", processor: "Snapdragon 888", camera: "48MP", storage: "128GB", battery: "4500 mAh", version: "OxygenOS 11", legalInfo: "Copyright 2023", ram: "8GB" },
        { name: "OnePlus 9 Pro", processor: "Snapdragon 888", camera: "48MP", storage: "256GB", battery: "4500 mAh", version: "OxygenOS 11", legalInfo: "Copyright 2023", ram: "12GB" },
        { name: "OnePlus Nord 2", processor: "Dimensity 1200", camera: "50MP", storage: "128GB", battery: "4500 mAh", version: "OxygenOS 11", legalInfo: "Copyright 2023", ram: "8GB" },
        { name: "OnePlus 8T", processor: "Snapdragon 865", camera: "48MP", storage: "256GB", battery: "4500 mAh", version: "OxygenOS 11", legalInfo: "Copyright 2023", ram: "12GB" },
        { name: "OnePlus 8", processor: "Snapdragon 865", camera: "48MP", storage: "128GB", battery: "4300 mAh", version: "OxygenOS 10", legalInfo: "Copyright 2023", ram: "8GB" },
        { name: "OnePlus Nord", processor: "Snapdragon 765G", camera: "48MP", storage: "128GB", battery: "4115 mAh", version: "OxygenOS 10", legalInfo: "Copyright 2023", ram: "8GB" },
        { name: "OnePlus 7T", processor: "Snapdragon 855+", camera: "48MP", storage: "256GB", battery: "3800 mAh", version: "OxygenOS 10", legalInfo: "Copyright 2023", ram: "8GB" },
        { name: "OnePlus 7", processor: "Snapdragon 855", camera: "48MP", storage: "256GB", battery: "3700 mAh", version: "OxygenOS 9", legalInfo: "Copyright 2023", ram: "8GB" },
        { name: "OnePlus 6T", processor: "Snapdragon 845", camera: "16MP", storage: "256GB", battery: "3700 mAh", version: "OxygenOS 9", legalInfo: "Copyright 2023", ram: "8GB" },
        { name: "OnePlus Nord CE", processor: "Snapdragon 750G", camera: "64MP", storage: "128GB", battery: "4500 mAh", version: "OxygenOS 11", legalInfo: "Copyright 2023", ram: "6GB" }
    ],
    "iPhone": [
        { name: "iPhone 13", processor: "A15 Bionic", camera: "Dual 12MP", storage: "128GB", battery: "3240 mAh", version: "iOS 15", legalInfo: "Copyright 2023", ram: "4GB" },
        { name: "iPhone 13 Pro", processor: "A15 Bionic", camera: "Triple 12MP", storage: "128GB", battery: "3095 mAh", version: "iOS 15", legalInfo: "Copyright 2023", ram: "6GB" },
        { name: "iPhone 12", processor: "A14 Bionic", camera: "Dual 12MP", storage: "64GB", battery: "2815 mAh", version: "iOS 14", legalInfo: "Copyright 2023", ram: "4GB" },
        { name: "iPhone 12 Pro", processor: "A14 Bionic", camera: "Triple 12MP", storage: "128GB", battery: "2815 mAh", version: "iOS 14", legalInfo: "Copyright 2023", ram: "6GB" },
        { name: "iPhone 11", processor: "A13 Bionic", camera: "Dual 12MP", storage: "64GB", battery: "3110 mAh", version: "iOS 13", legalInfo: "Copyright 2023", ram: "4GB" },
        { name: "iPhone SE (2020)", processor: "A13 Bionic", camera: "12MP", storage: "64GB", battery: "1821 mAh", version: "iOS 13", legalInfo: "Copyright 2023", ram: "3GB" },
        { name: "iPhone XR", processor: "A12 Bionic", camera: "12MP", storage: "64GB", battery: "2942 mAh", version: "iOS 12", legalInfo: "Copyright 2023", ram: "3GB" },
        { name: "iPhone XS", processor: "A12 Bionic", camera: "Dual 12MP", storage: "64GB", battery: "2658 mAh", version: "iOS 12", legalInfo: "Copyright 2023", ram: "4GB" },
        { name: "iPhone 8", processor: "A11 Bionic", camera: "12MP", storage: "64GB", battery: "1821 mAh", version: "iOS 11", legalInfo: "Copyright 2023", ram: "2GB" },
        { name: "iPhone 7", processor: "A10 Fusion", camera: "12MP", storage: "32GB", battery: "1960 mAh", version: "iOS 10", legalInfo: "Copyright 2023", ram: "2GB" }
    ]
};

function populateCompanies() {
    const companySelect = document.getElementById('company');
    for (let company in modelsData) {
        const option = document.createElement('option');
        option.value = company;
        option.textContent = company;
        companySelect.appendChild(option);
    }
}

function showModels() {
    const selectedCompany = document.getElementById('company').value;
    const modelsDiv = document.getElementById('models');
    modelsDiv.innerHTML = '';

    const models = modelsData[selectedCompany];
    models.forEach(model => {
        const button = document.createElement('button');
        button.textContent = model.name;
        button.onclick = () => showModelDetails(model);
        modelsDiv.appendChild(button);
    });
}

function showModelDetails(model) {
    const detailsDiv = document.getElementById('model-details');
    detailsDiv.innerHTML = `
        <h3>${model.name}</h3>
        <p><strong>Processor:</strong> ${model.processor}</p>
        <p><strong>Camera:</strong> ${model.camera}</p>
        <p><strong>Storage:</strong> ${model.storage}</p>
        <p><strong>Battery:</strong> ${model.battery}</p>
        <p><strong>Version:</strong> ${model.version}</p>
        <p><strong>Legal Information:</strong> ${model.legalInfo}</p>
        <p><strong>RAM:</strong> ${model.ram}</p>
    `;
}

document.addEventListener('DOMContentLoaded', populateCompanies);

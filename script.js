// Dynamic Date Script
const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
document.getElementById('current-datetime').textContent = `${year}-${month}-${day} ${hours}:${minutes}`;

// Fetch contact info from config.json
fetch('config.json')
  .then(response => {
    if (!response.ok) {
      throw new Error("Could not load config.json");
    }
    return response.json();
  })
  .then(config => {
    // Inject Address
    document.getElementById('conf-address').textContent = 
      `${config.street_name}, ${config.postal_code} ${config.city}, ${config.country}`;
    
    // Inject Phone
    document.getElementById('conf-phone').textContent = config.phone_number;
    
    // Inject Email
    const emailElem = document.getElementById('conf-email');
    emailElem.textContent = config.email;
    emailElem.href = `mailto:${config.email}`;
  })
  .catch(error => {
    console.error("Error loading config:", error);
    document.getElementById('conf-address').textContent = "Address hidden";
    document.getElementById('conf-phone').textContent = "Phone hidden";
    document.getElementById('conf-email').textContent = "Email hidden";
  });
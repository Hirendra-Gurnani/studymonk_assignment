// Dummy candidates data (with Indian names and locations)
const candidatesData = [
    {
      name: "Aarav Sharma",
      location: "Mumbai",
      jobRole: "Software Developer",
      experience: 5
    },
    {
      name: "Aanya Patel",
      location: "Delhi",
      jobRole: "Data Analyst",
      experience: 3
    },
    {
      name: "Ishaan Gupta",
      location: "Kolkata",
      jobRole: "Marketing Specialist",
      experience: 7
    },
    {
      name: "Mahi Singh",
      location: "Chennai",
      jobRole: "Software Developer",
      experience: 2
    },
    {
      name: "Neha Kumar",
      location: "Bengaluru",
      jobRole: "Data Analyst",
      experience: 4
    },
    {
      name: "Riya Patel",
      location: "Ahmedabad",
      jobRole: "Marketing Specialist",
      experience: 6
    },
    {
      name: "Samir Verma",
      location: "Hyderabad",
      jobRole: "Software Developer",
      experience: 8
    },
    {
      name: "Vivaan Gupta",
      location: "Pune",
      jobRole: "Data Analyst",
      experience: 2
    },
    {
      name: "Zara Singh",
      location: "Jaipur",
      jobRole: "Marketing Specialist",
      experience: 5
    },
    {
      name: "Sarah Chopra",
      location: "Chandigarh",
      jobRole: "Software Developer",
      experience: 3
    }
  ];
  
  const candidatesRow = document.getElementById("candidates-row");
  const jobRoleSelect = document.getElementById("job-role");
  const locationSelect = document.getElementById("location");
  
  function populateJobRoles() {
    const jobRoles = candidatesData.reduce((roles, candidate) => {
      if (!roles.includes(candidate.jobRole)) {
        roles.push(candidate.jobRole);
      }
      return roles;
    }, []);
  
    jobRoles.forEach(role => {
      const option = document.createElement("option");
      option.value = role;
      option.textContent = role;
      jobRoleSelect.appendChild(option);
    });
  }
  
  function populateLocations() {
    const locations = candidatesData.reduce((locs, candidate) => {
      if (!locs.includes(candidate.location)) {
        locs.push(candidate.location);
      }
      return locs;
    }, []);
  
    locations.forEach(location => {
      const option = document.createElement("option");
      option.value = location;
      option.textContent = location;
      locationSelect.appendChild(option);
    });
  }
  
  function searchCandidates() {
    const locationInput = locationSelect.value.trim().toLowerCase();
    const jobRoleInput = jobRoleSelect.value.trim();
  
    // Clear previous search results
    candidatesRow.innerHTML = "";
  
    // Filter candidates based on location and job role
    const matchedCandidates = candidatesData.filter(candidate =>
      (locationInput === "" || candidate.location.toLowerCase() === locationInput) &&
      (jobRoleInput === "" || candidate.jobRole === jobRoleInput)
    );
  
    if (matchedCandidates.length > 0) {
      matchedCandidates.forEach(candidate => {
        const col = document.createElement("div");
        col.className = "col-md-3";
  
        const card = document.createElement("div");
        card.className = "card candidate-card";
        card.innerHTML = `
          <div class="card-body">
            <h5 class="card-title">${candidate.name}</h5>
            <p class="card-text">Location: ${candidate.location}</p>
            <p class="card-text">Job Role: ${candidate.jobRole}</p>
            <span class="badge p-2 bg-primary">Rank: ${candidate.experience}</span>
          </div>
        `;
  
        col.appendChild(card);
        candidatesRow.appendChild(col);
      });
    } else {
      const col = document.createElement("div");
      col.className = "col";
      
      const noCandidates = document.createElement("p");
      noCandidates.textContent = "No candidates found.";
      col.appendChild(noCandidates);
  
      candidatesRow.appendChild(col);
    }
  }
  
  // Populate job roles and locations when the page loads
  populateJobRoles();
  populateLocations();
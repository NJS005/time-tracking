const timeframeSelector = document.querySelectorAll('.timeframe-selector li');
const timeData = {
  daily: {
    work: "5hrs",
    play: "2hrs",
    study: "1hr",
    exercise: "1hr",
    social: "1hr",
    "self-care": "0.5hr",
  },
  weekly: {
    work: "32hrs",
    play: "10hrs",
    study: "4hrs",
    exercise: "4hrs",
    social: "5hrs",
    "self-care": "2hrs",
  },
  monthly: {
    work: "128hrs",
    play: "40hrs",
    study: "16hrs",
    exercise: "16hrs",
    social: "20hrs",
    "self-care": "8hrs",
  },
};

timeframeSelector.forEach((selector) => {
  selector.addEventListener("click", (e) => {
    document.querySelector(".timeframe-selector .active").classList.remove("active");
    e.target.classList.add("active");
    const timeframe = e.target.textContent.toLowerCase();
    updateDashboard(timeData[timeframe]);
  });
});

function updateDashboard(data) {
  document.querySelectorAll(".card").forEach((card) => {
    const category = card.classList[1];
    card.querySelector(".time").textContent = data[category];
  });
}

document.querySelectorAll('.timeframe-selector li').forEach((timeframe) => {
    timeframe.addEventListener('click', () => {
    
      document.querySelectorAll('.timeframe-selector li').forEach((btn) => {
        btn.classList.remove('active');
      });
  
      
      timeframe.classList.add('active');
  
     
      const selectedTimeframe = timeframe.dataset.timeframe;
      document.querySelector('.cards').className = `cards ${selectedTimeframe}`;
    });
  });
  
  
 
  

  document.addEventListener('DOMContentLoaded', () => {
    const modeToggle = document.querySelector('#mode-toggle');
    const body = document.body;
  
    modeToggle.addEventListener('click', () => {
      body.classList.toggle('light-mode');
    });
  });
  

let countries = ["China", "India", "United States", "Indonesia", "Pakistan", "Nigeria", "Brazil", "Bangladesh", "Russia", "Mexico"];
let populations = [1416043270, 1409128296, 336673595, 281562465, 252363571, 236747130, 220051512, 168697184, 140820810, 130739927];

function setup() {
  createCanvas(800, 600);
  background(220);
  
  let barWidth = width / populations.length;
  let maxPopulation = Math.max(...populations);
  
  // Sorting populations and rearranging countries accordingly
  let sortedData = populations.map((value, index) => ({ value, index })).sort((a, b) => b.value - a.value);
  countries = sortedData.map(data => countries[data.index]);
  populations = sortedData.map(data => data.value);
  
  // Drawing title
  fill(50);
  textAlign(CENTER, CENTER);
  textSize(20);
  text("Top 10 Most Populous Countries", width / 2, 40);
  
  // Drawing bars and labels with gradient color
  for (let i = 0; i < populations.length; i++) {
    let x = i * barWidth;
    let h = map(populations[i], 0, maxPopulation, 0, height - 100);
    let y = height - h - 70;
    
    // Creating vertical gradient for each bar
    for (let j = 0; j < h; j++) {
      let interColor = lerpColor(color(255, 140, 0), color(0, 128, 0), map(j, 0, h, 0, 1));
      stroke(interColor);
      line(x, y + j, x + barWidth, y + j);
    }
    
    fill(50);
    textSize(14);
    text(countries[i], x + barWidth / 2, height - 50);
    textSize(12);
    text(populations[i].toLocaleString(), x + barWidth / 2, y - 5);
  }
}

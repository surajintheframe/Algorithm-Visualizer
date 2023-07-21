let array = [];
var audio = new Audio('soundeffect/soundeffect.mp3');

// Merge Sort algorithm implementation
async function mergeSort(arr, start, end) {
  if (start < end) {
    const mid = Math.floor((start + end) / 2);

    await mergeSort(arr, start, mid);
    await mergeSort(arr, mid + 1, end);
    await merge(arr, start, mid, end);
  }
}

// Merge helper function
async function merge(arr, start, mid, end) {
  const leftArr = arr.slice(start, mid + 1);
  const rightArr = arr.slice(mid + 1, end + 1);
  let i = 0,
    j = 0,
    k = start;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      audio.play();
      arr[k++] = leftArr[i++];
    } else {
      audio.play();
      arr[k++] = rightArr[j++];
    }
    await sleep(300); // Delay to visualize the sorting process
    updateVisualization(arr, start + i, mid + j); // Update the visualization after each comparison
  }

  while (i < leftArr.length) {
    arr[k++] = leftArr[i++];
    audio.play();

    await sleep(300);
    updateVisualization(arr);
  }

  while (j < rightArr.length) {
    audio.play();
    arr[k++] = rightArr[j++];
    await sleep(300);
    updateVisualization(arr);
  }
}

// Function to update the visualization
function updateVisualization(arr, compareIndex1, compareIndex2) {
  const barsContainer = document.getElementById("bars");
  barsContainer.innerHTML = "";
  
  const maxHeight = Math.max(...arr); // Get the maximum value from the array

  arr.forEach((num, index) => {
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.height = `${(num * 200) / maxHeight}px`; // Set fixed height relative to the maximum height

    if (index === compareIndex1 || index === compareIndex2) {
      bar.style.backgroundColor = "red";
    }

    barsContainer.appendChild(bar);
  });
}

// Utility function for delaying execution
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Generate New random Array
function generateArray() {
  const arraySizeInput = document.getElementById("array-size-input");
  const size = parseInt(arraySizeInput.value);
  array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 40) + 1);
  }
  updateVisualization(array);
}

// Start the sorting
function startSort() {
    const arrayInput = document.getElementById("array-input");
    const inputValues = arrayInput.value.trim();
  
    if (inputValues === "") {
      mergeSort(array, 0, array.length - 1);
      return;
    }
  
    array = inputValues.split(",").map((val) => parseInt(val));
  
    if (array.some(isNaN)) {
      alert("Invalid input! Please enter comma-separated numbers.");
      return;
    }
  
    updateVisualization(array);
  
    const start = 0;
    const end = array.length - 1;
    mergeSort(array, start, end);
  }
  

// Initial array generation and visualization
generateArray();

// Event listener for input range change
const arraySizeInput = document.getElementById("array-size-input");
arraySizeInput.addEventListener("input", generateArray);


// JavaScript to handle smooth scrolling when clicking on a link
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
});

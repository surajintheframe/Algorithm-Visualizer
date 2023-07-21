let array = [];
let initialized = false;
let sorted = false;

// var audio = new audio("soundeffect/soundeffect.mp3")

function initializeGraph() {
  const length = 15; // Length of the array
  const min = 10; // Minimum value of the random numbers
  const max = 100; // Maximum value of the random numbers

  array = generateRandomArray(length, min, max);
  updateVisualization(array);
  initialized = true;
  sorted = false;
}

function startSort() {
  if (initialized && !sorted) {
    quickSort(array, 0, array.length - 1);
    sorted = true;
  }
  
}

// Quick Sort algorithm implementation
async function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }

  const pivotIndex = await partition(arr, start, end);
  await Promise.all([
    quickSort(arr, start, pivotIndex - 1),
    quickSort(arr, pivotIndex + 1, end)
  ]);
}

// Partition helper function
async function partition(arr, start, end) {
  const pivot = arr[end];
  let pivotIndex = start;

  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) {
      await swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }

  await swap(arr, pivotIndex, end);

  return pivotIndex;
}

// Swap helper function
async function swap(arr, a, b) {
  await sleep(100); // Delay to visualize the sorting process
  [arr[a], arr[b]] = [arr[b], arr[a]];
  updateVisualization(arr);
}

// Function to update the visualization
function updateVisualization(arr) {
  const barsContainer = document.getElementById('barsContainer');
  barsContainer.innerHTML = '';

  arr.forEach((num) => {
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.height = num * 2 + 'px'; // Adjusting the height of the bars
    barsContainer.appendChild(bar);
  });
}

// Utility function for delaying execution
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Function to generate an array of random numbers
function generateRandomArray(length, min, max) {
  const array = [];

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    array.push(randomNumber);
  }

  return array;
}

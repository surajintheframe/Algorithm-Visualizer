function start(){

  var audio = new Audio('soundeffect/soundeffect.mp3');
  // Delay in milliseconds between each step for visualization
      const delay = 300;
  
      // Swap two elements in the array
      function swap(arr, i, j) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        audio.play();
      }
  
      // Perform heapify operation on a subtree rooted at index i
async function heapify(arr, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    swap(arr, i, largest);
    await visualize(arr, [i, largest]); // Call visualize with the indices being compared
    await heapify(arr, n, largest);
  }
}

  
      // Heap Sort algorithm
      async function heapSort(arr) {
        const n = arr.length;
  
        // Build max heap
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
          await heapify(arr, n, i);
        }
  
        // Extract elements from the heap in sorted order
        for (let i = n - 1; i > 0; i--) {
          swap(arr, 0, i);
          await visualize(arr);
          await heapify(arr, i, 0);
        }
  
        // Sort completed
        await visualize(arr);
      }
  
      // Modify visualize function to add/remove the 'comparing' class
async function visualize(arr, comparingIndices = []) {
  const arrayContainer = document.getElementById('arrayContainer');
  arrayContainer.innerHTML = '';

  for (let i = 0; i < arr.length; i++) {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${arr[i] * 10}px`;

    // Add 'comparing' class to bars being compared
    if (comparingIndices.includes(i)) {
      bar.classList.add('comparing');
    }

    arrayContainer.appendChild(bar);
  }

  // Delay to visualize the changes
  await new Promise(resolve => setTimeout(resolve, delay));

  // Remove 'comparing' class from all bars
  const bars = arrayContainer.querySelectorAll('.bar');
  bars.forEach(bar => bar.classList.remove('comparing'));
}

  
      // Example usage
      // let arr = generateArray();
      const arraySizeInput = 10;
      const size = arraySizeInput;
      // parseInt(arraySizeInput.value);
      arr = [];
      for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * 30) + 1);
      }
      // const arr = [4, 10, 3, 5, 1,10,17,18,3,2];
      heapSort(arr);
  }
  // function generateArray() {
      
  //   }

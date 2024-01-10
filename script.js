fetch('https://s3.amazonaws.com/open-to-cors/assignment.json')
.then(response => response.json())
.then(data => {
  const products = data.products;
  const popularityArray = [];

  // Create an array of objects with ID and popularity
  Object.keys(products).forEach(key => {
    popularityArray.push({ id: key, popularity: parseInt(products[key].popularity) });
  });

  // Sort the array by popularity in descending order
  popularityArray.sort((a, b) => b.popularity - a.popularity);

  const table = document.getElementById('productTable');

  // Iterate over the sorted popularityArray to create table rows
  popularityArray.forEach(item => {
    const product = products[item.id]; // Get the product details using ID
    const row = table.insertRow(-1);

    // Insert cells with respective values
    row.insertCell(0).innerHTML = item.id; // Display the 'id'
    row.insertCell(1).innerHTML = product.subcategory;
    row.insertCell(2).innerHTML = product.title;
    row.insertCell(3).innerHTML = `$${product.price}`;
    row.insertCell(4).innerHTML = product.popularity;
  });
})
.catch(error => console.error('Error:', error));
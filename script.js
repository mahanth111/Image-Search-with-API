const API_KEY = "VPscWelSNlVWI4XBtU3uusNOIRogcCBxUqjcrKtxsxG6akL6NvjzzRUs";

async function searchImages() {
  const query = document.getElementById("searchInput").value.trim();
  const resultsContainer = document.getElementById("imageResults");

  if (!query) {
    resultsContainer.innerHTML = "<p>Please enter a search term.</p>";
    return;
  }

  const response = await fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=10`, {
    headers: {
      Authorization: API_KEY
    }
  });

  const data = await response.json();
  resultsContainer.innerHTML = '';

  if (data.photos.length === 0) {
    resultsContainer.innerHTML = "<p>No images found.</p>";
    return;
  }

  data.photos.forEach(photo => {
    const img = document.createElement("img");
    img.src = photo.src.medium;
    img.alt = photo.alt || "Pexels Image";
    resultsContainer.appendChild(img);
  });
}

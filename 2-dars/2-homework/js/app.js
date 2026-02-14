const list = document.getElementById("countryList");
const modal = document.getElementById("modal");
const likesBtn = document.getElementById("likesBtn");
const savedBtn = document.getElementById("savedBtn");

render();

function render() {
  list.innerHTML = "";

  countries.forEach((c, i) => {
    list.innerHTML += `
      <li
        class="bg-white/10 backdrop-blur rounded-2xl overflow-hidden shadow-xl
        hover:scale-[1.03] transition duration-300">

        <img src="${c.flag}" class="h-[170px] w-full object-cover"/>

        <div class="p-4 space-y-1">
          <h2 class="text-xl font-bold">${c.name}</h2>
          <p class="text-sm text-gray-300">Capital: ${c.capital}</p>
          <p class="text-sm text-gray-300">
            Population: ${c.population.toLocaleString()}
          </p>
        </div>

        <div class="flex justify-between items-center px-4 py-3 border-t border-white/10">

          <!-- LIKE (TOGGLE) -->
          <button onclick="toggleLike(${i})"
            class="font-semibold ${
              c.liked ? "text-pink-500" : "text-gray-400"
            }">
            ❤️ ${c.liked ? "Liked" : "Like"}
          </button>

          <!-- SAVE -->
          <button onclick="saveCountry(${i})"
            class="${c.saved ? "text-green-400" : "text-gray-400"} font-semibold">
            💾
          </button>

          <button onclick="updateCountry(${i})" class="text-blue-400">✏️</button>
          <button onclick="deleteCountry(${i})" class="text-red-400">🗑</button>
        </div>
      </li>
    `;
  });

  updateHeaderCounters();
}

function updateHeaderCounters() {
  const totalLikes = countries.filter(c => c.liked).length;
  const totalSaved = countries.filter(c => c.saved).length;

  likesBtn.textContent = `❤️ Likes (${totalLikes})`;
  savedBtn.textContent = `💾 Saved (${totalSaved})`;
}

function toggleLike(index) {
  countries[index].liked = !countries[index].liked;
  render();
}

function saveCountry(index) {
  countries[index].saved = !countries[index].saved;
  render();
}

function deleteCountry(index) {
  if (confirm("Delete this country?")) {
    countries.splice(index, 1);
    render();
  }
}

function updateCountry(index) {
  const newName = prompt("New country name:", countries[index].name);
  if (newName) {
    countries[index].name = newName;
    render();
  }
}

function openCreateModal() {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeCreateModal() {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

function createCountry() {
  if (!name.value || !capital.value || !population.value || !flag.value) {
    alert("All fields required");
    return;
  }

  countries.push({
    id: Date.now(),
    name: name.value,
    capital: capital.value,
    population: Number(population.value),
    flag: flag.value,
    liked: false,  
    saved: false,
  });

  name.value = capital.value = population.value = flag.value = "";
  closeCreateModal();
  render();
}

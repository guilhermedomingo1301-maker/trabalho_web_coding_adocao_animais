/**
 * ========================================================
 * PATINHAS FELIZES - LÓGICA PRINCIPAL (JAVASCRIPT ES6)
 * ========================================================
 * Projeto para a disciplina de Web Coding.
 */

// 1. BANCO DE DADOS DE ANIMAIS (MOCK)
const PETS_DATA = [
  {
    id: 1,
    nome: "Pipoca",
    especie: "cachorro",
    porte: "Pequeno",
    idadeCategoria: "filhote",
    idadeTexto: "8 meses",
    sexo: "Fêmea",
    raca: "Vira-lata (SRD)",
    cidade: "São Paulo - SP",
    imagem: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=700&q=80",
    tags: ["Brincalhona", "Dócil", "Vacinada", "Castrada"],
    historia: "Pipoca foi resgatada junto com seus irmãos em um terreno baldio. É cheia de energia, adora brincar com bolinhas e se dá muito bem com outros animais e crianças."
  },
  {
    id: 2,
    nome: "Thor",
    especie: "cachorro",
    porte: "Grande",
    idadeCategoria: "adulto",
    idadeTexto: "3 anos",
    sexo: "Macho",
    raca: "Golden Retriever Mestiço",
    cidade: "Campinas - SP",
    imagem: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=700&q=80",
    tags: ["Companheiro", "Calmo", "Vacinado", "Castrado"],
    historia: "Thor é um gigante gentil! Super carinhoso, adora passear no parque e deitar no pé do tutor enquanto assiste TV. Já é adestrado para fazer as necessidades na rua."
  },
  {
    id: 3,
    nome: "Luna",
    especie: "gato",
    porte: "Pequeno",
    idadeCategoria: "filhote",
    idadeTexto: "5 meses",
    sexo: "Fêmea",
    raca: "Siamês Mestiça",
    cidade: "São Paulo - SP",
    imagem: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=700&q=80",
    tags: ["Curiosa", "Ronronenta", "Vacinada"],
    historia: "Luna é super meiga e adora colo. Muito curiosa, ama caçar penas de brinquedo e dormir no solzinho da tarde. Ideal para apartamentos com rede de proteção."
  },
  {
    id: 4,
    nome: "Simba",
    especie: "gato",
    porte: "Médio",
    idadeCategoria: "adulto",
    idadeTexto: "2 anos",
    sexo: "Macho",
    raca: "Frajola (SRD)",
    cidade: "Santos - SP",
    imagem: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=700&q=80",
    tags: ["Independente", "Carinhoso", "Castrado"],
    historia: "Simba é um lorde! Muito tranquilo e asseado, adora receber carinho atrás da orelha. Prefere ambientes sossegados onde possa relaxar."
  },
  {
    id: 5,
    nome: "Mel",
    especie: "cachorro",
    porte: "Médio",
    idadeCategoria: "adulto",
    idadeTexto: "4 anos",
    sexo: "Fêmea",
    raca: "Vira-lata Caramelo",
    cidade: "São Bernardo - SP",
    imagem: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=700&q=80",
    tags: ["Amorosa", "Protetora", "Vacinada", "Castrada"],
    historia: "A legítima vira-lata caramelo brasileira! Mel é leal, atenta e apaixonada por carinho na barriga. Está pronta para trazer muita alegria para seu novo lar."
  },
  {
    id: 6,
    nome: "Bob",
    especie: "cachorro",
    porte: "Pequeno",
    idadeCategoria: "idoso",
    idadeTexto: "9 anos",
    sexo: "Macho",
    raca: "Poodle Mestiço",
    cidade: "São Paulo - SP",
    imagem: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=700&q=80",
    tags: ["Calmo", "Amoroso", "Excelente para Idosos"],
    historia: "Bob perdeu seu antigo tutor e procura uma segunda chance. Muito bonzinho e quieto, tudo que ele quer é um cantinho confortável e uma família amorosa."
  },
  {
    id: 7,
    nome: "Mimi",
    especie: "gato",
    porte: "Pequeno",
    idadeCategoria: "idoso",
    idadeTexto: "8 anos",
    sexo: "Fêmea",
    raca: "Tricolor (SRD)",
    cidade: "Guarulhos - SP",
    imagem: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=700&q=80",
    tags: ["Tranquila", "Dócil", "Castrada"],
    historia: "Mimi é uma gatinha doce e graciosa. Convive muito bem com outros gatos e ama passar as tardes tirando uma soneca no sofá."
  },
  {
    id: 8,
    nome: "Tobby",
    especie: "cachorro",
    porte: "Médio",
    idadeCategoria: "filhote",
    idadeTexto: "10 meses",
    sexo: "Macho",
    raca: "Beagle Mestiço",
    cidade: "Osasco - SP",
    imagem: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&w=700&q=80",
    tags: ["Brincalhão", "Sociável", "Vacinado"],
    historia: "Tobby tem energia de sobra e está sempre pronto para uma aventura. Perfeito para tutores ativos ou lares com quintal para gastar energia!"
  }
];

// 2. ESTADO DA APLICAÇÃO (STATE)
let state = {
  searchTerm: "",
  selectedSpecies: "todos",
  selectedSize: "todos",
  selectedAge: "todos",
  activeTab: "todos", // "todos" ou "favoritos"
  favorites: JSON.parse(localStorage.getItem("patinhas_favoritos")) || []
};

// 3. SELETORES DO DOM
const petsGrid = document.getElementById("pets-grid");
const resultsCount = document.getElementById("results-count");
const noResults = document.getElementById("no-results");
const searchInput = document.getElementById("search-input");
const filterSpecies = document.getElementById("filter-species");
const filterSize = document.getElementById("filter-size");
const filterAge = document.getElementById("filter-age");
const btnResetFilters = document.getElementById("btn-reset-filters");
const btnClearEmpty = document.getElementById("btn-clear-empty");
const favCountBadge = document.getElementById("fav-count");
const tabButtons = document.querySelectorAll(".tab-btn");
const petModal = document.getElementById("pet-modal");
const modalContent = document.getElementById("modal-content");
const modalCloseBtn = document.getElementById("modal-close");
const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toast-message");

// 4. FUNÇÕES DE RENDERIZAÇÃO
function updateFavBadge() {
  if (favCountBadge) {
    favCountBadge.textContent = state.favorites.length;
  }
}

function renderPets() {
  const filteredPets = PETS_DATA.filter((pet) => {
    // Filtro por Texto (Nome ou Raça)
    const matchesSearch = 
      pet.nome.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      pet.raca.toLowerCase().includes(state.searchTerm.toLowerCase());

    // Filtro por Espécie
    const matchesSpecies = state.selectedSpecies === "todos" || pet.especie === state.selectedSpecies;

    // Filtro por Porte
    const matchesSize = state.selectedSize === "todos" || pet.porte === state.selectedSize;

    // Filtro por Idade
    const matchesAge = state.selectedAge === "todos" || pet.idadeCategoria === state.selectedAge;

    // Filtro por Aba Favoritos
    const matchesTab = state.activeTab === "todos" || state.favorites.includes(pet.id);

    return matchesSearch && matchesSpecies && matchesSize && matchesAge && matchesTab;
  });

  // Atualizar contador
  resultsCount.textContent = `${filteredPets.length} ${filteredPets.length === 1 ? "animal encontrado" : "animais encontrados"}`;

  // Se vazio, mostrar mensagem amigável
  if (filteredPets.length === 0) {
    petsGrid.innerHTML = "";
    noResults.classList.remove("hidden");
    return;
  }

  noResults.classList.add("hidden");

  // Renderizar cards
  petsGrid.innerHTML = filteredPets.map((pet) => {
    const isFav = state.favorites.includes(pet.id);
    const badgeClass = pet.especie === "cachorro" ? "badge-dog" : "badge-cat";
    const emojiEspecie = pet.especie === "cachorro" ? "🐶 Cão" : "🐱 Gato";
    const generoIcon = pet.sexo === "Macho" ? "♂" : "♀";

    return `
      <article class="pet-card" data-id="${pet.id}">
        <div class="pet-card-image">
          <img src="${pet.imagem}" alt="${pet.nome}" loading="lazy">
          <span class="badge ${badgeClass} pet-badge-species">${emojiEspecie}</span>
          <button 
            class="pet-fav-btn ${isFav ? 'favorited' : ''}" 
            data-id="${pet.id}" 
            aria-label="${isFav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}"
            title="${isFav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}"
          >
            ${isFav ? "❤️" : "🤍"}
          </button>
        </div>

        <div class="pet-card-body">
          <div class="pet-card-header">
            <h3 class="pet-name">${pet.nome}</h3>
            <span class="pet-gender" title="${pet.sexo}">${generoIcon}</span>
          </div>

          <p class="pet-breed">${pet.raca} • ${pet.idadeTexto}</p>

          <div class="pet-tags">
            <span class="pet-tag">Porte ${pet.porte}</span>
            ${pet.tags.slice(0, 2).map(tag => `<span class="pet-tag">${tag}</span>`).join("")}
          </div>

          <div class="pet-card-footer">
            <span class="pet-city">📍 ${pet.cidade}</span>
            <button class="btn btn-primary btn-sm btn-open-modal" data-id="${pet.id}">
              Quero Adotar
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// 5. GERENCIAMENTO DE FAVORITOS
function toggleFavorite(id) {
  const numId = Number(id);
  const index = state.favorites.indexOf(numId);

  if (index > -1) {
    state.favorites.splice(index, 1);
    showToast("Removido dos favoritos.");
  } else {
    state.favorites.push(numId);
    showToast("Adicionado aos favoritos com sucesso! ❤️");
  }

  localStorage.setItem("patinhas_favoritos", JSON.stringify(state.favorites));
  updateFavBadge();
  renderPets();
}

// 6. MODAL DE ADOÇÃO E DETALHES
function openPetModal(petId) {
  const pet = PETS_DATA.find(p => p.id === Number(petId));
  if (!pet) return;

  const isFav = state.favorites.includes(pet.id);

  modalContent.innerHTML = `
    <div class="modal-pet-header">
      <img src="${pet.imagem}" alt="${pet.nome}" class="modal-pet-img">
      <div class="modal-pet-info">
        <span class="badge badge-primary">${pet.especie === 'cachorro' ? '🐶 Cão' : '🐱 Gato'} • Porte ${pet.porte}</span>
        <h2>${pet.nome}</h2>
        <p><strong>Idade:</strong> ${pet.idadeTexto} | <strong>Sexo:</strong> ${pet.sexo} | <strong>Local:</strong> ${pet.cidade}</p>
        <p>${pet.historia}</p>
        <div class="pet-tags">
          ${pet.tags.map(tag => `<span class="pet-tag">✓ ${tag}</span>`).join("")}
        </div>
      </div>
    </div>

    <!-- FORMULÁRIO DE INTERESSE -->
    <form id="adoption-form" class="modal-form">
      <h3>Manifestação de Interesse para Adotar ${pet.nome}</h3>
      <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: -8px;">
        Preencha os campos abaixo. Nossa equipe entrará em contato para agendar uma entrevista!
      </p>

      <input type="hidden" name="pet_id" value="${pet.id}">
      <input type="hidden" name="pet_nome" value="${pet.nome}">

      <div class="form-group">
        <label for="form-nome">Seu Nome Completo *</label>
        <input type="text" id="form-nome" name="nome" required placeholder="Ex.: Maria da Silva">
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
        <div class="form-group">
          <label for="form-email">E-mail *</label>
          <input type="email" id="form-email" name="email" required placeholder="seu@email.com">
        </div>
        <div class="form-group">
          <label for="form-telefone">WhatsApp / Telefone *</label>
          <input type="tel" id="form-telefone" name="telefone" required placeholder="(11) 99999-9999">
        </div>
      </div>

      <div class="form-group">
        <label for="form-moradia">Tipo de Moradia *</label>
        <select id="form-moradia" name="moradia" required class="select-control">
          <option value="">Selecione...</option>
          <option value="casa_com_quintal">Casa com quintal telado/murado</option>
          <option value="casa_sem_quintal">Casa sem quintal</option>
          <option value="apartamento_com_redes">Apartamento com redes de proteção</option>
          <option value="apartamento_sem_redes">Apartamento sem redes de proteção</option>
          <option value="sitio">Chácara / Sítio</option>
        </select>
      </div>

      <div class="form-group">
        <label for="form-mensagem">Por que você gostaria de adotar ${pet.nome}?</label>
        <textarea id="form-mensagem" name="mensagem" placeholder="Conte um pouco sobre sua rotina e experiência com animais..."></textarea>
      </div>

      <button type="submit" class="btn btn-primary btn-lg" style="width: 100%;">
        🐾 Enviar Solicitação de Adoção
      </button>
    </form>
  `;

  // Listener para submissão do formulário
  const form = document.getElementById("adoption-form");
  form.addEventListener("submit", handleFormSubmit);

  // Exibir modal
  petModal.classList.remove("hidden");
  petModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden"; // Travar rolagem do body
}

function closePetModal() {
  petModal.classList.add("hidden");
  petModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "auto";
}

function handleFormSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const nomeCandidato = formData.get("nome");
  const petNome = formData.get("pet_nome");

  // Simular envio bem-sucedido
  closePetModal();
  showToast(`🎉 Parabéns, ${nomeCandidato}! Sua solicitação para adotar o(a) ${petNome} foi enviada com sucesso.`);
}

// 7. TOAST NOTIFICAÇÃO
let toastTimeout;
function showToast(message) {
  if (!toast) return;
  toastMessage.textContent = message;
  toast.classList.remove("hidden");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.add("hidden");
  }, 4000);
}

// 8. EVENT LISTENERS
function initEventListeners() {
  // Busca por texto
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchTerm = e.target.value;
      renderPets();
    });
  }

  // Filtros de Select
  if (filterSpecies) {
    filterSpecies.addEventListener("change", (e) => {
      state.selectedSpecies = e.target.value;
      renderPets();
    });
  }

  if (filterSize) {
    filterSize.addEventListener("change", (e) => {
      state.selectedSize = e.target.value;
      renderPets();
    });
  }

  if (filterAge) {
    filterAge.addEventListener("change", (e) => {
      state.selectedAge = e.target.value;
      renderPets();
    });
  }

  // Limpar Filtros
  const resetAll = () => {
    state.searchTerm = "";
    state.selectedSpecies = "todos";
    state.selectedSize = "todos";
    state.selectedAge = "todos";
    state.activeTab = "todos";

    if (searchInput) searchInput.value = "";
    if (filterSpecies) filterSpecies.value = "todos";
    if (filterSize) filterSize.value = "todos";
    if (filterAge) filterAge.value = "todos";

    tabButtons.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.tab === "todos");
    });

    renderPets();
  };

  if (btnResetFilters) btnResetFilters.addEventListener("click", resetAll);
  if (btnClearEmpty) btnClearEmpty.addEventListener("click", resetAll);

  // Abas (Todos vs Favoritos)
  tabButtons.forEach(button => {
    button.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      button.classList.add("active");
      state.activeTab = button.dataset.tab;
      renderPets();
    });
  });

  // Botão topo de favoritos
  const btnFavHeader = document.getElementById("btn-favoritos");
  if (btnFavHeader) {
    btnFavHeader.addEventListener("click", () => {
      const favTabBtn = document.querySelector('.tab-btn[data-tab="favoritos"]');
      if (favTabBtn) {
        favTabBtn.click();
        const catalogEl = document.getElementById("catalogo");
        if (catalogEl) catalogEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Delegação de Eventos na Grid de Pets (Favoritar e Abrir Modal)
  if (petsGrid) {
    petsGrid.addEventListener("click", (e) => {
      // Clique no botão favoritar
      const favBtn = e.target.closest(".pet-fav-btn");
      if (favBtn) {
        const id = favBtn.dataset.id;
        toggleFavorite(id);
        return;
      }

      // Clique no botão Quero Adotar
      const modalBtn = e.target.closest(".btn-open-modal");
      if (modalBtn) {
        const id = modalBtn.dataset.id;
        openPetModal(id);
        return;
      }
    });
  }

  // Fechar modal no X
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closePetModal);
  }

  // Fechar modal ao clicar fora
  if (petModal) {
    petModal.addEventListener("click", (e) => {
      if (e.target === petModal) {
        closePetModal();
      }
    });
  }

  // Fechar modal com tecla Esc
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !petModal.classList.contains("hidden")) {
      closePetModal();
    }
  });
}

// 9. INICIALIZAÇÃO
document.addEventListener("DOMContentLoaded", () => {
  updateFavBadge();
  initEventListeners();
  renderPets();
});

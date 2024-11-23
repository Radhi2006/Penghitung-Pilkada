let totalVotes = 0;
let invalidVotes = 0;

function updateTotalVotes() {
  document.getElementById('totalVotes').textContent = totalVotes;
}

function adjustInvalidVotes(value) {
  invalidVotes += value;
  invalidVotes = Math.max(0, invalidVotes); // Prevent negative values
  document.getElementById('invalidVotes').textContent = invalidVotes;

  totalVotes += value;
  totalVotes = Math.max(0, totalVotes); // Prevent negative total votes
  updateTotalVotes();
}

function adjustCandidateVotes(candidateId, value) {
  const voteCountElem = document.getElementById(`votes-${candidateId}`);
  let votes = parseInt(voteCountElem.textContent) + value;
  votes = Math.max(0, votes); // Prevent negative values
  voteCountElem.textContent = votes;

  totalVotes += value;
  totalVotes = Math.max(0, totalVotes);
  updateTotalVotes();
}

function addCandidate() {
  const candidatesDiv = document.getElementById('candidates');
  const candidateId = `candidate-${candidatesDiv.children.length + 1}`;

  const candidateDiv = document.createElement('div');
  candidateDiv.className = 'candidate';

  candidateDiv.innerHTML = `
    <input type="text" placeholder="Nama Calon" class="candidate-name" />
    <button class="minus" onclick="adjustCandidateVotes('${candidateId}', -1)">-</button>
    <span id="votes-${candidateId}">0</span>
    <button class="plus" onclick="adjustCandidateVotes('${candidateId}', 1)">+</button>
  `;

  candidatesDiv.appendChild(candidateDiv);
}

document.getElementById('addCandidate').addEventListener('click', addCandidate);

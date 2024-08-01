function addHighlight() {
  const highlightText = document.getElementById('highlightText').value;
  const highlightColor = document.getElementById('highlightColor').value;
  const content = document.getElementById('content').value;

  if (!highlightText || !highlightColor || !content) {
      alert("Please fill in all fields");
      return;
  }

  const highlightedContent = content.replace(new RegExp(highlightText, 'g'), <span style="color: ${highlightColor};">${highlightText}</span>);

  const highlightContainer = document.getElementById('highlightContainer');
  const highlightBox = document.createElement('div');
  highlightBox.className = 'highlight-box';
  
  const highlightHeader = document.createElement('p');
  highlightHeader.innerHTML = <strong>Highlight:</strong> ${highlightText};
  highlightBox.appendChild(highlightHeader);
  
  const highlightContent = document.createElement('p');
  highlightContent.innerHTML = highlightedContent;
  highlightBox.appendChild(highlightContent);

  const updateButton = document.createElement('button');
  updateButton.className = 'update-btn';
  updateButton.textContent = 'Update';
  highlightBox.appendChild(updateButton);

  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-btn';
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = () => {
      highlightContainer.removeChild(highlightBox);
  };
  highlightBox.appendChild(deleteButton);

  highlightContainer.appendChild(highlightBox);

  // Clear the form fields
  document.getElementById('highlightText').value = '';
  document.getElementById('highlightColor').value = '';
  document.getElementById('content').value = '';
}
// script.js

chrome.management.getAll(extensions => {
  const table = document.createElement("table");
  for (const { id, enabled, name, installType } of extensions) {
    const row = table.appendChild(document.createElement("tr"));
    const label = row
      .appendChild(document.createElement("td"))
      .appendChild(document.createElement("label"));

    const input = label.appendChild(document.createElement("input"));
    input.type = "checkbox";
    input.checked = enabled;
    input.addEventListener("change", () => {
      chrome.management.setEnabled(id, input.checked);
    });

    label.appendChild(document.createElement("span"));
    row.appendChild(document.createElement("td")).innerText = name;
    row.appendChild(document.createElement("td")).innerText = id;
    row.appendChild(document.createElement("td")).innerText = installType;
  }
  document.body.replaceChildren(table);
});

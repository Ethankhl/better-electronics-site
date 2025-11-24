
const SKU_LIST = ["RJ40G","F3YGT","AP18C8K","SS03XL","A1713","A1820","33YDH"];

function searchSKU() {
  const input = document.getElementById('skuInput').value.trim().toUpperCase();
  const result = document.getElementById('skuResult');
  if (!input) { result.innerHTML = "Please enter SKU."; result.style.color="red"; return; }
  if (SKU_LIST.includes(input)) { result.innerHTML = "✔ Supported: " + input; result.style.color="green"; }
  else { result.innerHTML = "✖ Not found: " + input; result.style.color="red"; }
}

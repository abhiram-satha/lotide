const without = function (source, itemsToRemove) {
  let uniqueItems = [];
  for (const sourceElement of source) { 
    if (!itemsToRemove.includes(sourceElement)) {
      uniqueItems.push(sourceElement);
    }
  }
  return uniqueItems;
}

module.exports = without;


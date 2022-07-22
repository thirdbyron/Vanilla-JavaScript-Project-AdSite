export const deleteUnusableElements = (parent) => {
  console.log(parent.firstChild)
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
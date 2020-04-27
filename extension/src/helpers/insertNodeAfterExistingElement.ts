export default function (node: HTMLElement, existingElement: Element) {
  if (existingElement.nextSibling) {
    if (existingElement.parentNode) {
      existingElement.parentNode.insertBefore(node, existingElement);
    }
  } else {
    if (existingElement.parentNode) {
      existingElement.parentNode.appendChild(node);
    }
  }
}

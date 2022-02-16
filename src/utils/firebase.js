export function formatDoc(doc) {
  return { id: doc.id, ...doc.data() };
}

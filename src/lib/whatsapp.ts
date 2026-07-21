// TODO: reemplaza con tu número real de WhatsApp
// (código de país + número, solo dígitos, sin +, espacios ni guiones).
// Ejemplo Colombia: "573001234567"
export const WHATSAPP_NUMBER = "573000000000";

export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

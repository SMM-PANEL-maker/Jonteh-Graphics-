/**
 * Direct WhatsApp Order Redirect
 * Constructs a custom WhatsApp message based on the selected service
 */
function orderService(serviceName) {
  const phone = "254753419392";
  const message = encodeURIComponent(`Hello Jonte Graphics! I am interested in ordering/inquiring about: *${serviceName}*. Please share more details.`);
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
  
  window.open(whatsappUrl, '_blank');
}

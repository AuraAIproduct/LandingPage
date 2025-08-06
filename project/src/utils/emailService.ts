// Email service utility
export const sendDemoRequestEmail = async (formData: {
  name: string;
  email: string;
  company: string;
  role: string;
  message: string;
}) => {
  try {
    // For development, we'll use Formspree to avoid CORS issues
    // This is a simple solution that works immediately
    const response = await fetch('https://formspree.io/f/mvgqwjjp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        role: formData.role,
        message: formData.message,
        subject: `New Demo Request: ${formData.name} from ${formData.company}`
      })
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    return { success: true, message: 'Demo request submitted successfully' };
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
}; 
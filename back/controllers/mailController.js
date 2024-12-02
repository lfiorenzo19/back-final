const transporter = require('../config/nodemailerConfig');

exports.sendMail = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'destinatario@ejemplo.com',
      subject: 'Mensaje desde el formulario',
      text: message,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Correo enviado con éxito' });
  } catch (error) {
    res.status(500).json({ error: 'Error al enviar el correo' });
  }
};

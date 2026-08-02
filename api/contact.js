import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method Not Allowed",
    });
  }

  const {
    name,
    company,
    email,
    phone,
    product,
    message,
  } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // ======================================
    // EMAIL TO BYN SALES
    // ======================================

    await transporter.sendMail({
      from: `"BYN Trading & Contracting" <${process.env.SMTP_USER}>`,
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject: `New Contact Enquiry | ${name}`,
      html: `
      <div style="font-family:Arial,sans-serif;background:#f4f6f9;padding:40px;color:#222;">

        <div style="max-width:700px;margin:auto;background:#fff;border-radius:12px;overflow:hidden;">

          <div style="background:#081F3F;padding:30px;text-align:center;">
            <h1 style="margin:0;color:#fff;">BYN Trading & Contracting</h1>
            <p style="margin-top:12px;color:#C9A227;">
              New Contact Form Enquiry
            </p>
          </div>

          <div style="padding:35px;">

            <table style="width:100%;border-collapse:collapse;">

              <tr>
                <td style="padding:12px;font-weight:bold;color:#081F3F;">Name</td>
                <td style="padding:12px;color:#222;">${name}</td>
              </tr>

              <tr style="background:#F7F8FA;">
                <td style="padding:12px;font-weight:bold;color:#081F3F;">Company</td>
                <td style="padding:12px;color:#222;">${company || "-"}</td>
              </tr>

              <tr>
                <td style="padding:12px;font-weight:bold;color:#081F3F;">Email</td>
                <td style="padding:12px;color:#222;">${email}</td>
              </tr>

              <tr style="background:#F7F8FA;">
                <td style="padding:12px;font-weight:bold;color:#081F3F;">Phone</td>
                <td style="padding:12px;color:#222;">${phone || "-"}</td>
              </tr>

              <tr>
                <td style="padding:12px;font-weight:bold;color:#081F3F;">Product / Service</td>
                <td style="padding:12px;color:#222;">${product || "-"}</td>
              </tr>

            </table>

            <div style="margin-top:30px;padding:20px;background:#F7F8FA;border-left:5px solid #C9A227;">

              <h3 style="margin-top:0;color:#081F3F;">
                Customer Message
              </h3>

              <p style="color:#222;line-height:1.8;">
                ${message}
              </p>

            </div>

          </div>

        </div>

      </div>
      `,
    });

    // ======================================
    // THANK YOU EMAIL
    // ======================================

    await transporter.sendMail({
      from: `"BYN Trading & Contracting" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank you for contacting BYN Trading & Contracting",
      html: `
      <div style="font-family:Arial,sans-serif;background:#f4f6f9;padding:40px;color:#222;">

        <div style="max-width:700px;margin:auto;background:#fff;border-radius:12px;overflow:hidden;">

          <div style="background:#081F3F;padding:35px;text-align:center;">
            <h1 style="margin:0;color:#fff;">BYN Trading & Contracting</h1>

            <p style="margin-top:12px;color:#C9A227;">
              Trading • Contracting • Commercial Supply
            </p>
          </div>

          <div style="padding:40px;">

            <h2 style="color:#081F3F;">
              Dear ${name},
            </h2>

            <p style="line-height:1.8;color:#222;">
              Thank you for contacting BYN Trading & Contracting.
            </p>

            <p style="line-height:1.8;color:#222;">
              We have successfully received your enquiry. One of our team members will get back to you as soon as possible.
            </p>

            <div style="margin:35px 0;padding:20px;background:#F7F8FA;border-left:5px solid #C9A227;">

              <strong style="color:#081F3F;">
                Your enquiry
              </strong>

              <br><br>

              Product / Service: ${product || "-"}<br>
              Company: ${company || "-"}

            </div>

            <a href="https://byntrading.com"
              style="
                display:inline-block;
                padding:14px 28px;
                background:#C9A227;
                color:#fff;
                text-decoration:none;
                border-radius:6px;
                font-weight:bold;
              ">
              Visit Our Website
            </a>

          </div>

          <div style="background:#081F3F;color:#fff;padding:25px;text-align:center;">

            <strong>BYN Trading & Contracting</strong><br>

            Riyadh, Saudi Arabia<br><br>

            sales@byntrading.com

          </div>

        </div>

      </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Enquiry sent successfully.",
    });

  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: "Unable to send enquiry.",
    });
  }
}
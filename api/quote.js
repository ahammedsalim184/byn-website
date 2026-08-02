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
    quantity,
    brand,
    city,
    notes,
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
      subject: `New Quote Request | ${name}`,

      html: `
      <div style="font-family:Arial,sans-serif;background:#f4f6f9;padding:40px;">

        <div style="
            max-width:700px;
            margin:auto;
            background:#ffffff;
            border-radius:12px;
            overflow:hidden;
            box-shadow:0 8px 25px rgba(0,0,0,.08);
        ">

            <div style="
                background:#081F3F;
                padding:30px;
                text-align:center;
            ">

                <h1 style="color:#fff;margin:0;">
                    BYN Trading & Contracting
                </h1>

                <p style="
                    color:#C9A227;
                    margin-top:12px;
                    font-size:15px;
                ">
                    New Website Quote Request
                </p>

            </div>

            <div style="padding:35px;">

                <table style="width:100%;border-collapse:collapse;">

                    <tr>
                        <td style="padding:12px;font-weight:bold;">Name</td>
                        <td>${name}</td>
                    </tr>

                    <tr style="background:#F7F8FA;">
                        <td style="padding:12px;font-weight:bold;">Company</td>
                        <td>${company || "-"}</td>
                    </tr>

                    <tr>
                        <td style="padding:12px;font-weight:bold;">Email</td>
                        <td>${email}</td>
                    </tr>

                    <tr style="background:#F7F8FA;">
                        <td style="padding:12px;font-weight:bold;">Phone</td>
                        <td>${phone || "-"}</td>
                    </tr>

                    <tr>
                        <td style="padding:12px;font-weight:bold;">Product</td>
                        <td>${product || "-"}</td>
                    </tr>

                    <tr style="background:#F7F8FA;">
                        <td style="padding:12px;font-weight:bold;">Quantity</td>
                        <td>${quantity || "-"}</td>
                    </tr>

                    <tr>
                        <td style="padding:12px;font-weight:bold;">Preferred Brand</td>
                        <td>${brand || "-"}</td>
                    </tr>

                    <tr style="background:#F7F8FA;">
                        <td style="padding:12px;font-weight:bold;">Delivery City</td>
                        <td>${city || "-"}</td>
                    </tr>

                </table>

                <div style="
                    margin-top:35px;
                    padding:20px;
                    background:#F7F8FA;
                    border-left:5px solid #C9A227;
                ">

                    <h3 style="margin-top:0;color:#081F3F;">
                        Specifications / Additional Notes
                    </h3>

                    <p style="line-height:1.8;color:#555;">
                        ${notes || "No additional notes provided."}
                    </p>

                </div>

            </div>

        </div>

      </div>
      `,
    });

    // ======================================
    // THANK YOU EMAIL TO CUSTOMER
    // ======================================

    await transporter.sendMail({
      from: `"BYN Trading & Contracting" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Thank you for contacting BYN Trading & Contracting",

      html: `
      <div style="
          max-width:700px;
          margin:auto;
          font-family:Arial,sans-serif;
          background:#ffffff;
          border-radius:12px;
          overflow:hidden;
          border:1px solid #e5e7eb;
      ">

          <div style="
              background:#081F3F;
              padding:35px;
              text-align:center;
          ">

              <h1 style="margin:0;color:#ffffff;">
                  BYN Trading & Contracting
              </h1>

              <p style="
                  color:#C9A227;
                  margin-top:12px;
              ">
                  Trading • Contracting • Commercial Supply
              </p>

          </div>

          <div style="padding:40px;">

              <h2 style="color:#081F3F;">
                  Dear ${name},
              </h2>

              <p style="line-height:1.8;color:#555;">
                  Thank you for contacting
                  <strong>BYN Trading & Contracting</strong>.
              </p>

              <p style="line-height:1.8;color:#555;">
                  We have successfully received your quotation request.
                  Our sales team is reviewing your enquiry and will contact
                  you as soon as possible.
              </p>

              <div style="
                  margin:35px 0;
                  padding:25px;
                  background:#F7F8FA;
                  border-left:5px solid #C9A227;
              ">

                  <strong>Request Summary</strong>

                  <br><br>

                  Product: ${product || "-"}<br>
                  Quantity: ${quantity || "-"}<br>
                  Delivery City: ${city || "-"}<br>
                  Company: ${company || "-"}

              </div>

              <a
                  href="https://byntrading.com"
                  style="
                      display:inline-block;
                      background:#C9A227;
                      color:#fff;
                      text-decoration:none;
                      padding:14px 28px;
                      border-radius:6px;
                      font-weight:bold;
                  "
              >
                  Visit Our Website
              </a>

              <p style="
                  margin-top:35px;
                  color:#555;
                  line-height:1.8;
              ">
                  If you have any additional information,
                  simply reply to this email.
              </p>

          </div>

          <div style="
              background:#081F3F;
              color:white;
              padding:25px;
              text-align:center;
              font-size:14px;
          ">

              <strong>BYN Trading & Contracting</strong><br>

              Riyadh, Saudi Arabia<br><br>

              📧 sales@byntrading.com

          </div>

      </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Quote request sent successfully.",
    });

  } catch (err) {
    console.error(err);

    return res.status(500).json({
      success: false,
      message: "Unable to send email.",
    });
  }
}
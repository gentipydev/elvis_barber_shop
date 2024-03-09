import React from 'react';

const HomePage = () => {

  const createMarkup = () => {
    const publicUrl = process.env.PUBLIC_URL; 

    return {
      __html: `
      <!DOCTYPE html>
            <html lang="de">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css">
                <style>
                    body {
                        color: black;
                        background-color: white;
                    }
                    img {
                        filter: grayscale(100%); /* Makes images black and white */
                    }
                </style>
                <title>Elvis Friseursalon</title>
            </head>
            <body>
            <nav class="container-fluid">
                <ul>
                    <li><strong>Elvis Friseursalon</strong></li>
                </ul>
                <ul>
                    <li><a href="#services">Dienstleistungen</a></li>
                    <li><a href="#about">Über Uns</a></li>
                    <li><a href="#contact" role="button">Kontakt</a></li>
                </ul>
            </nav>
            <main class="container">
                <div class="grid">
                    <section>
                        <hgroup>
                            <h2>Willkommen bei Elvis Friseursalon</h2>
                            <h3>Stil und Präzision bei jedem Schnitt</h3>
                        </hgroup>
                        <p>Im Elvis Friseursalon legen wir Wert auf erstklassige Haarschnitte und Pflegedienstleistungen für Männer. Mitten im Herzen der Stadt bieten wir Ihnen mit unseren erfahrenen Friseuren das beste Erlebnis.</p>
                        <figure>
                            <img src="${publicUrl}/elvis_logo.jpg" alt="Description" />
                            <figcaption>Unser Logo</figcaption>
                        </figure>
                        <h3>Unsere Dienstleistungen</h3>
                        <p>Von klassischen Haarschnitten bis zu modernem Styling bieten wir ein breites Spektrum an Dienstleistungen, um Ihren Pflegebedürfnissen gerecht zu werden. Sehen Sie sich unsere <a href="#services">Dienstleistungen und Preise</a> für weitere Details an.</p>
                        <figure>
                        <img src="${publicUrl}/elvis_2.jpg" alt="Haarschnitt" />
                            <figcaption>Qualitätsschnitte für jeden Stil</figcaption>
                        </figure>
                        <h3>Über Uns</h3>
                        <p>Erfahren Sie mehr über unsere Geschichte, unsere Friseure und unser Engagement für exzellente Männerpflege. Besuchen Sie unsere <a href="#about">Über uns Seite</a>.</p>
                    </section>
                </div>
            </main>
            <section aria-label="Services and Pricing">
                <div class="container">
                    <article>
                        <hgroup>
                            <h2>Dienstleistungen und Preise</h2>
                        </hgroup>
                        <p>Hier finden Sie unsere Dienstleistungen und die entsprechenden Preise:</p>
                        <ul>
                            <li>Haarschnitt - 17,00 €</li>
                            <li>Waschen - 2,00 €</li>
                            <li>Rasur - 12,00 €</li>
                            <li>Barttrimmen mit Maschine - 7,00 €</li>
                            <li>Augenbrauen zupfen - 7,00 €</li>
                            <li>Gesichtshaarentfernung - ab 6,00 €</li>
                            <li>Kinderhaarschnitt (bis 14 Jahre) - 12,00 €</li>
                        </ul>
                        <p>Öffnungszeiten:<br>
                        Mo - Fr: 09:00 - 19:00<br>
                        Samstag: 08:00 - 18:00</p>
                        <figure>
                        <img src="${publicUrl}elvis_prices.jpg" alt="PreisListe" />
                            <figcaption>Unsere Preisliste</figcaption>
                        </figure>
                    </article>
                </div>
            </section>
            <section aria-label="Location">
                <div class="container">
                    <article>
                        <h2>Finden Sie uns</h2>
                        <p>Elvisbarbershop<br>
                        Ooser Bahnhofstraße 29A<br>
                        Besuchen Sie uns während unserer Öffnungszeiten:<br>
                        Mo - Fr: 09:00 - 19:00<br>
                        Samstag: 08:00 - 18:00</p>
                        <figure>
                        <img src="${publicUrl}/elvis_1.jpg" alt="KerzenBehandlung" />
                            <figcaption>Exklusive Kerzenbehandlung</figcaption>
                        </figure>
                    </article>
                </div>
            </section>
            <footer class="container">
                <small>Kontaktinformation: <a href="tel:01762997443">0176 29 97 44 43</a> • <a href="mailto:elvisbarbershop31@gmail.com">elvisbarbershop31@gmail.com</a></small>
            </footer>
            </body>
            </html>
      `
    };
  };

  return <div dangerouslySetInnerHTML={createMarkup()} />;
}

export default HomePage;

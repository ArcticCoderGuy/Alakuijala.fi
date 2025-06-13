# VHKD – Verkkosivujen Henkilökohtainen Kotiutusdokumentti

**Projektin nimi:** Alakuijala.fi verkkosivujen siirto ja uudelleenrakennus  
**Toteutus:** Avaimet käteen -periaatteella  
**Tavoite:** Uusi sivusto, uusi koti, täysi tekninen vastuu

---

## I. Kartoitus & suunnittelu ✅

- [x] Domainin nykyinen hallinta selvitetty
- [x] Vanhan sivuston status: poistettavissa
- [x] Hosting-ympäristön valinta ja tekninen alusta lukittu
- [x] Projektin aikataulu ja tiimi määritelty

---

## II. Tekninen määrittely ✅

- [x] DNS ja domain-siirron strategia
- [x] SSL-sertifikaatti ja HTTPS-suunnitelma
- [] Palomuuriratkaisu (Cloudflare tai vastaava edge-suoja)
- [] Sivustorakenne: Etusivu, Palvelut, Yritys, Yhteystiedot
- [] SEO, OpenGraph-tiedot ja suorituskykymittarit mukana

---

## III. Tietoturva ja luotettavuus ✅

- [] Vanhan sisällön tietoturvapoisto
- [] Lomakkeet: validointi + GDPR
- [] Ei aiempaa virusturvaa → lisätty palomuuri + suojakerros
- [] Staging-testaus ennen tuotantoversiota

---

## IV. Työvaiheittainen toteutus ⚙️ (käynnissä)

- [ ] Layout-suunnittelu aloitettu MPP:nä
- [ ] Picadodyt per komponentti
- [ ] Sivuston build vaiheistettuna
- [ ] Mini-DoD jokaiselle osalle
- [ ] Domainin liitos vaiheistettu viimeiseen sprinttiin

---

## V. Julkaisu ja ylläpito ✅ (valmis kun julkaistaan)

- [ ] Domain osoittaa uuteen palveluun
- [ ] Sivusto julkaistaan
- [ ] Tuki: GTM, GA4, analytiikka ja mittaus
- [ ] Asiakas saa ylläpito- ja hallintaoikeudet

---

**Status:** Määrittely valmis – toteutus etenee vaiheittain määritetyn rungon mukaan.

-------------------------------------------------------------------------- ******

Tässä uusittu Master README.md

# 🧱 FoxBox Framework – Modernien yrityssivustojen tuotantopohja

**FoxBox Framework** on kehys, jonka avulla voidaan tuottaa moderneja, mobiilioptimoituja ja laajennettavia asiakassivustoja reaaliaikaisesti. Sivustot perustuvat Next.js + React + Tailwind -teknologiaan ja käyttävät Supabasea sisältö- ja lomakedatan taustapalveluna.

---

## 🎯 Tavoite

Tuottaa sarjassa asiakaskohtaisia verkkosivustoja, jotka ovat:
- Tyylikkäitä ja responsiivisia
- Nopeita ja skaalautuvia
- Helposti hallittavissa Supabasen kautta
- Valmiita laajennettavaksi AI/ML-ominaisuuksiin

---

## 🔧 Käytetyt teknologiat

| Teknologia        | Käyttötarkoitus                                |
|-------------------|-------------------------------------------------|
| **Next.js**        | Sivuston runko ja reititys                     |
| **React**          | UI-komponenttien rakentaminen                  |
| **Tailwind CSS**   | Nopeaan ja näyttävään ulkoasuun                |
| **Supabase**       | Reaaliaikainen tietokanta ja lomakkeet         |
| **Vercel**         | Julkaisu & hosting                             |
| **OpenAI (GPT)**   | Sisällön, rakenteen ja analyysin generointi (tuleva) |

---

## 📌 Projektin rakenne

- `/src/app/page.tsx` – Päänäkymä, joka yhdistää kaikki komponentit
- `/components/HeroSection.jsx` – Hero-osio
- `/components/Services.jsx` – Palvelut-komponentti
- `/components/ContactForm.jsx` – Supabaseen tallentava lomake
- `/lib/supabaseClient.js` – Yhteys Supabase-projektiin
- `.env.local` – Yksityiset yhteystiedot Supabaseen (ei GitHubissa)

---

## 🛠 Kehitysvaiheet (DoD 1.0–1.10)

| Versio | Kuvaus |
|--------|--------|
| ✅ 1.0  | Perusprojekti luotu (Next.js + Tailwind + Supabase-kytkentä) |
| ✅ 1.1  | Hero, Services ja Contact-komponentit luotu |
| ✅ 1.2  | Supabase-taulut `pages` ja `contacts` luotu |
| 🔄 1.3  | Admin-dashboard näkymä sisällön muokkaukseen |
| 🔄 1.4  | AI-pohjainen ulkoasugenerointi (OpenAI-promptit) |
| 🔄 1.5  | Tuki kieliversioille |
| 🔄 1.6  | Vercel deployment pipeline (1-click publish) |
| 🔄 1.7  | GDPR-yhteensopivat lomakkeet + rekisteriseloste |
| 🔄 1.8  | Asiakaskohtaiset subdomainit (esim. asiakas.foxbox.dev) |
| 🔄 1.9  | Visuaalinen analytiikka (KPI, Pareto, liikenne) |
| 🔄 1.10 | Sisäänrakennettu Supabase-sisältöeditori (beta)

---

## 📬 Supabase-taulut

| Taulu      | Tarkoitus                            |
|------------|--------------------------------------|
| `pages`    | Sivukohtainen sisältö (otsikot, tekstit, kuvat) |
| `contacts` | Yhteydenottolomakkeiden talletus     |
| `leads`    | (tuleva) markkinointilista tai tarjouspyynnöt |
| `features` | (tuleva) räätälöidyt komponenttisisällöt |

---

## 🔐 Ympäristömuuttujat (`.env.local`)

```env
NEXT_PUBLIC_SUPABASE_URL=https://project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...


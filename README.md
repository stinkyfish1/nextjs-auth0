# 📌 Next.js-applikasjon med Auth0, Supabase og Memory-spill

Dette prosjektet er en Next.js-applikasjon skrevet i TypeScript som kombinerer autentisering med **Auth0** og bildeopplasting/-lagring med **Supabase**. I tillegg inneholder applikasjonen et **memory-spill** med logoer fra programmeringsspråk.

## 🚀 Funksjonalitet

✅ **Autentisering med Auth0** – Brukere kan logge inn og få tilgang til en beskyttet side.  
✅ **Profilside** – Viser brukerens navn og profilbilde hentet fra Auth0.  
✅ **Bildeopplasting med Supabase** – Brukere kan laste opp bilder og se dem på sin profil.  
✅ **Memory-spill** – En morsom huskelek med logoer fra forskjellige programmeringsspråk.  

## 🛠️ Teknologier brukt

- **Next.js** – Frontend-rammeverk for React
- **TypeScript** – Statiske typer for bedre kodekvalitet
- **Auth0** – Sikker brukerautentisering
- **Supabase** – Lagring av brukerbilder
- **Tailwind CSS** – Stil og layout

## 🔧 Installasjon

1. **Klon repoet**
   ```bash
   git clone https://github.com/stinkyfish1/nextjs-auth0.git
   cd ditt-repo
   ```
2. **Installer avhengigheter**
   ```bash
   npm install ci
   ```
3. **Konfigurer miljøvariabler**
   Opprett en `.env.local`-fil og legg inn følgende verdier:
   ```env
   AUTH0_SECRET=din-secret-key
   AUTH0_ISSUER_BASE_URL=din-url
   AUTH0_CLIENT_ID=din-client-id
   AUTH0_CLIENT_SECRET=din-secret
   NEXT_PUBLIC_SUPABASE_URL=din-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=din-supabase-anon-key

   ```
4. **Start utviklingsserveren**
   ```bash
   npm run dev
   ```

## 🎮 Hvordan spille memory-spillet?
1. Start applikasjonen og naviger til spillsiden.
2. Trykk på to kort for å finne matchende logoer.
3. Fortsett til alle parene er funnet!

## 📷 Bildeopplasting
- På profilsiden kan du laste opp et bilde som lagres i Supabase.
- Du kan også se tidligere opplastede bilder.


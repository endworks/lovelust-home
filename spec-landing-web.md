# Spec — Web LoveLust

> Estado: **Pendiente de desarrollo**
> URL: **https://lovelust.end.works**
> Web corporativa: **https://end.works**

---

## Objetivo

Desarrollar la web pública de LoveLust que sirva como:

1. **Presencia web oficial** de la app — punto de referencia para usuarios, prensa y asociaciones
2. **Canal de descarga** — enlaces directos a App Store (iOS) y Play Store (Android)
3. **Cumplimiento legal** — albergar la política de privacidad y los términos y condiciones requeridos por las tiendas de apps y el RGPD
4. **Marketing y SEO** — posicionamiento orgánico con énfasis en privacidad y salud sexual

### Pilares de comunicación

El tono y los contenidos deben girar alrededor de dos ejes principales:

- **Privacidad y seguridad** — diferenciador clave frente a la competencia; cifrado AES-256 local, sin acceso de servidor, sin rastreadores publicitarios, RGPD compliant
- **Mejora de la vida sexual** — la app como herramienta de autoconocimiento, salud sexual y bienestar; sin tabúes, inclusiva, empoderador

---

## Diseño Visual

- **Color principal:** `#f61e6d` (Love — rosa/fucsia)
- **Color secundario:** `#9933ff` (Lust — morado)
- **Fondo:** oscuro (dark-first, coherente con la app)
- **Tipografía:** Syne (display) + Nunito (cuerpo) — igual que la app
- **Tono visual:** lujo moderno, adulto, elegante; nada clínico ni explícito

---

## Páginas y Contenido

### `/` — Landing principal

Página de entrada al producto. Debe transmitir la propuesta de valor de forma clara y directa, con llamada a la acción hacia la descarga.

**Secciones:**

| Sección               | Descripción                                                                                                                 |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Hero                  | Tagline "Ama con seguridad. Desea con libertad." + descripción breve + botones App Store / Play Store + badge de privacidad |
| CTA Encuesta          | Enlace/botón destacado a la encuesta anónima (`surveys.lovelust.end.works`) con incentivo de 7 días premium gratis          |
| Propuesta de valor    | 6 puntos clave: privacidad local, registro detallado, salud sexual (ITS/PrEP), estadísticas, inclusividad, backup cifrado   |
| Privacidad en detalle | Sección dedicada: arquitectura local-first, AES-256, sin rastreadores, derecho al olvido                                    |
| Cómo funciona         | 3 pasos: descarga → personaliza → registra y descubre                                                                       |
| Screenshots / preview | Capturas o mockups de la app (pendiente de assets)                                                                          |
| Precios               | Los 3 planes: mensual €2,99 · anual €17,99 (destacado) · lifetime €49,99                                                    |
| Footer                | Links a todas las páginas, email, redes sociales, ©                                                                         |

### `/support` — Soporte

- Email de contacto
- Redes sociales (Instagram, TikTok, X/Twitter)
- Enlace a encuesta con incentivo
- FAQ con las preguntas más comunes (privacidad, suscripciones, pérdida de datos, derechos RGPD)

### `/privacy` — Política de Privacidad

Obligatoria para App Store y Play Store. Debe cubrir:

- **Qué datos se recogen** — solo los necesarios; datos de actividad sexual almacenados localmente en el dispositivo, sin acceso del servidor
- **Dónde se almacenan** — local (cifrado en el dispositivo); backup en la nube solo si el usuario activa la función premium de sincronización
- **Con quién se comparten** — RevenueCat (gestión de suscripciones), Aptabase (analíticas agregadas y anónimas); sin venta de datos a terceros
- **Derechos del usuario** — acceso, rectificación, eliminación (RGPD Art. 15–17), portabilidad
- **Datos especialmente sensibles** — los datos de salud e historial sexual están en la categoría especial del RGPD (Art. 9); se requiere consentimiento explícito
- **Retención de datos** — los datos se conservan mientras el usuario use la app; el usuario puede eliminar toda su información desde la propia app
- **Contacto** — email de contacto para ejercer derechos RGPD
- **Fecha de última actualización**

### `/terms` — Términos y Condiciones

Obligatorios para App Store. Deben cubrir:

- **Uso permitido** — app para mayores de 18 años únicamente
- **Cuentas y suscripciones** — gestión mediante RevenueCat; política de renovación automática; cómo cancelar
- **Contenido del usuario** — el usuario es responsable de lo que registra; LoveLust no accede ni comparte ese contenido
- **Limitación de responsabilidad** — la app no sustituye consejo médico
- **Propiedad intelectual** — marca, diseño y código son propiedad de LoveLust / end.works
- **Cambios en los términos** — LoveLust puede actualizar los términos con aviso previo
- **Ley aplicable** — España / UE
- **Contacto**

---

## Requisitos Funcionales

| Requisito           | Descripción                                                                         |
| ------------------- | ----------------------------------------------------------------------------------- |
| Botones de descarga | App Store (iOS) y Play Store (Android) con badges oficiales                         |
| Multiidioma         | Al menos **español** e **inglés**; valorar portugués de Brasil en el futuro         |
| Responsive          | Optimizado para móvil (la mayoría del tráfico vendrá desde la app o redes sociales) |
| Velocidad           | Carga rápida, especialmente en mobile; evitar JS innecesario                        |
| SEO básico          | Title, meta description, Open Graph para compartir en redes sociales                |
| Analytics           | Integrar Aptabase o Google Analytics para medir tráfico y clics en descarga         |
| Cookie banner       | Requerido por RGPD si se usan cookies de analítica                                  |

---

## Stack Tecnológico Recomendado

Pendiente de confirmar si end.works ya tiene un stack definido. Opciones recomendadas:

| Opción                     | Stack                                | Justificación                                                                                        |
| -------------------------- | ------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| **Opción A** (recomendada) | **Next.js + Tailwind + Vercel**      | Consistente con el stack de la web de encuestas; SSG para máxima velocidad; fácil i18n con next-intl |
| Opción B                   | HTML/CSS estático + Cloudflare Pages | Mínimo mantenimiento, cero dependencias; suficiente para una landing simple                          |
| Opción C                   | Framer / Webflow                     | Sin código; ideal si se prioriza velocidad de diseño sobre control técnico                           |

---

## Arquitectura del Proyecto (si se usa Next.js)

```
lovelust-landing/
├── app/
│   ├── [locale]/
│   │   ├── page.tsx              # landing principal
│   │   ├── privacy/page.tsx      # política de privacidad
│   │   ├── terms/page.tsx        # términos y condiciones
│   │   └── layout.tsx
├── messages/
│   ├── es.json
│   ├── en.json
│   └── pt-BR.json               # futuro
├── public/
│   ├── screenshots/             # capturas de la app
│   ├── badges/                  # badges App Store / Play Store
│   └── og-image.png             # imagen Open Graph
└── components/
    ├── HeroSection.tsx
    ├── FeaturesSection.tsx
    ├── PricingSection.tsx
    ├── DownloadButtons.tsx
    └── Footer.tsx
```

---

## Información para Rellenar

La siguiente información debe estar disponible antes del desarrollo:

| Campo                                              | Estado                   |
| -------------------------------------------------- | ------------------------ |
| URL App Store (iOS)                                | Pendiente de publicación |
| URL Play Store (Android)                           | Pendiente de publicación |
| Email de contacto/soporte                          | Por definir              |
| Nombre legal del titular (para documentos legales) | Por definir              |
| País/jurisdicción                                  | Por definir              |
| Capturas de pantalla de la app                     | Por preparar             |
| Tagline definitivo                                 | Por definir              |

---

## Relación con Otras Webs

| URL                                              | Propósito                                                                      |
| ------------------------------------------------ | ------------------------------------------------------------------------------ |
| https://end.works                                | Web corporativa del estudio / desarrollador                                    |
| https://lovelust.end.works                       | Landing de LoveLust (este documento)                                           |
| https://surveys.end.works/lovelust _(propuesta)_ | Web de encuestas anónimas — ver [spec-encuestas-web.md](spec-encuestas-web.md) |

---

## Pendiente de Definir

- [ ] ¿Se usa el mismo stack/hosting que end.works o un proyecto separado?
- [ ] ¿Quién redacta los textos legales? (recomendado: revisar con un abogado especializado en RGPD y datos de salud)
- [ ] ¿Multiidioma desde el lanzamiento o solo español inicialmente?
- [ ] ¿La landing incluye blog o sección de noticias?
- [ ] ¿Cookie banner propio o solución externa (Cookiebot, Axeptio, etc.)?
- [ ] ¿Se trackea el clic en cada botón de descarga por separado?

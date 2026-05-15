# Política de Privacidad de LoveLust

**The LoveLust Company SL** ha creado **LoveLust** con la privacidad como base. Esta política explica qué datos trata la aplicación, cómo, dónde, y los derechos que le asisten conforme al **Reglamento General de Protección de Datos (RGPD)**.

LoveLust está destinada a personas usuarias de **18 años de edad o más**.

_Última actualización: 2026-05-15_

## 1. Datos que Tratamos

### Datos de actividad sexual y de salud (categoría especial, art. 9 RGPD)

Los datos sobre actividad sexual, parejas, anticoncepción, medicación, pruebas de ITS y otra información de salud son **datos de categoría especial** conforme al art. 9 del RGPD. Estos datos:

- Se almacenan **localmente en su dispositivo**, en almacenamiento cifrado (véase la Sección 6).
- **Nunca se envían a servidores de LoveLust**, ni se venden ni se comparten con anunciantes.
- Pueden compartirse con **Apple HealthKit** (iOS) o **Health Connect** (Android) únicamente si usted habilita expresamente esa integración.
- Se incluyen en la **copia de seguridad cifrada en la nube** opcional solo si usted la habilita (véase la Sección 2).

La base jurídica para el tratamiento de estos datos es su **consentimiento explícito** conforme al art. 9(2)(a) del RGPD. Usted otorga este consentimiento mediante un control independiente y de aceptación voluntaria (desactivado por defecto), y puede retirarlo en cualquier momento (véase la Sección 4).

### Datos de suscripción y compras

Las compras dentro de la aplicación las gestiona **RevenueCat**. RevenueCat trata un identificador de cuenta interno, identificadores de transacción y el historial de compras para validar y restaurar suscripciones. LoveLust nunca recibe ni almacena los datos de su tarjeta de pago. Véase la [Política de Privacidad de RevenueCat](https://www.revenuecat.com/privacy).

### Datos de cuenta y notificaciones enviados al backend de LoveLust

LoveLust opera un servicio de backend. Cuando la aplicación se inicia y cuando cambian determinados ajustes, envía a este servicio:

- un identificador de cuenta interno (no su nombre),
- su preferencia de idioma,
- su token de notificaciones push (si las notificaciones están habilitadas),
- su plataforma (iOS/Android) y la versión de la aplicación,
- sus preferencias de comunicaciones comerciales (novedades del producto, promociones, eventos, noticias de la comunidad).

Se utiliza para enviarle las notificaciones que ha solicitado y para respetar sus preferencias de comunicación. **Nunca se envían a este backend datos de actividad sexual, parejas, medicación ni salud.** Base jurídica: consentimiento (art. 6(1)(a)) para las comunicaciones, e interés legítimo (art. 6(1)(f)) para prestar la funcionalidad de la aplicación que usted ha solicitado. Puede solicitar la supresión de este registro del backend (véase la Sección 4).

### Datos de diagnóstico y de fallos

Utilizamos **Firebase Crashlytics** (Google) para recibir informes de fallos e información de diagnóstico sobre errores, incluida información del dispositivo y del sistema operativo recopilada automáticamente por el SDK. **No** asociamos su identificador de cuenta a los informes de fallos. Utilizamos **Firebase Remote Config** (Google) para gestionar parámetros de configuración; esto implica una solicitud de configuración a Google que incluye información estándar del dispositivo. Véase la [Política de Privacidad de Google](https://policies.google.com/privacy).

### Analítica de uso anónima

Utilizamos **Aptabase** para una analítica de producto agregada y anónima (p. ej., qué pantallas se visitan, versión de la aplicación, sistema operativo, recuentos y duraciones). La analítica está desactivada hasta que usted da su consentimiento. La analítica sensible (art. 9) es una aceptación voluntaria explícita e independiente. Los eventos nunca incluyen nombres, notas, texto libre, datos de contacto, ubicaciones, fechas de nacimiento ni ningún identificador directo: solo recuentos, valores booleanos y categorías acotadas. Véase la [Política de Privacidad de Aptabase](https://aptabase.com/legal/privacy).

## 2. Copia de Seguridad en la Nube (opcional, premium)

Si habilita la copia de seguridad cifrada en la nube, sus datos de actividad, parejas, medicación, ajustes y fotos se cifran **en su dispositivo** con una clave derivada de su frase de contraseña, antes de subirse a **su propio** Google Drive o iCloud (una carpeta privada de la aplicación).

Usted establece una frase de contraseña de copia de seguridad al habilitar la copia en la nube. **The LoveLust Company SL no puede descifrar su copia de seguridad en la nube: solo usted posee la frase de contraseña.** Consérvela en lugar seguro: si la pierde, su copia de seguridad no podrá recuperarse.

Los servidores de LoveLust nunca reciben su copia de seguridad ni su frase de contraseña. La copia de seguridad reside en su cuenta personal de almacenamiento en la nube.

## 3. Dónde se Almacenan los Datos

Todos los datos de actividad sexual y de salud se almacenan localmente en su dispositivo, en almacenamiento cifrado (Sección 6). Los servidores de LoveLust no almacenan estos datos. La copia de seguridad en la nube opcional se almacena en su propio Google Drive o iCloud, cifrada antes de salir de su dispositivo.

## 4. Conservación y Supresión de Datos

Los datos locales se conservan hasta que usted los elimine. Puede:

1. **Ajustes → Almacenamiento → Borrar todos los datos** — elimina todos los datos locales del dispositivo.
2. **Eliminar su copia de seguridad en la nube por separado** — borrar los datos locales **no** elimina su copia de seguridad en la nube. Para borrarla, vaya a Ajustes → Almacenamiento en la Nube, cierre sesión y elimine la copia remota. La conservamos hasta que lo haga, de modo que pueda restaurarla tras reinstalar.
3. **Desinstalar la aplicación** — elimina únicamente los datos locales; su copia de seguridad en la nube permanece hasta que la elimine según el paso 2.
4. **Supresión del registro del backend** — al desactivar las notificaciones, o al contactarnos, se elimina el registro del backend (identificador de cuenta, token push, preferencias) mediante nuestro proceso de supresión.

## 5. Sus Derechos conforme al RGPD

- **Art. 13/14, Transparencia:** la identidad del responsable y sus datos de contacto figuran en la Sección 9.
- **Art. 15, Acceso:** solicitar una copia de los datos personales que tratamos (el registro del backend; los datos locales y en la nube están bajo su control y son exportables desde la aplicación).
- **Art. 16, Rectificación:** corregir datos inexactos, desde la aplicación o contactándonos.
- **Art. 17, Supresión:** eliminar los datos locales y en la nube desde la aplicación (Sección 4); contáctenos para suprimir el registro del backend.
- **Art. 20, Portabilidad:** exportar sus datos en formato legible por máquina (JSON) en **Ajustes → Almacenamiento → Exportar datos**.
- **Art. 7(3), Retirada del consentimiento:** retirar el consentimiento de analítica o de datos sensibles en cualquier momento en **Ajustes → Privacidad**, sin eliminar sus datos. Retirar el consentimiento es tan fácil como otorgarlo.
- **Art. 21, Oposición / Art. 18, Limitación:** contáctenos.

Para ejercer cualquier derecho, contáctenos a través de la Sección 9. Responderemos en un plazo de 30 días.

## 6. Seguridad

Los datos locales se cifran en su dispositivo mediante cifrado robusto y estándar del sector (AES-256). La clave de cifrado se genera por cada instalación y se conserva en el almacenamiento seguro de claves del sistema operativo. La copia de seguridad en la nube opcional se cifra en su dispositivo antes de la subida mediante una clave derivada de su frase de contraseña. Ningún sistema es 100 % seguro; aplicamos las mejores prácticas del sector, pero no podemos garantizar una seguridad absoluta.

## 7. Servicios y Encargados de Terceros

- **RevenueCat** — Gestión de suscripciones. [Política de privacidad](https://www.revenuecat.com/privacy)
- **Aptabase** — Analítica anónima (sujeta a consentimiento). [Política de privacidad](https://aptabase.com/legal/privacy)
- **Firebase Crashlytics (Google)** — Diagnóstico de fallos y errores. [Política de privacidad](https://policies.google.com/privacy)
- **Firebase Remote Config (Google)** — Configuración de funcionalidades. [Política de privacidad](https://policies.google.com/privacy)
- **Google Sign-In** — Autenticación para la copia de seguridad en Google Drive. [Política de privacidad](https://policies.google.com/privacy)
- **Apple HealthKit** — Integración de salud opcional (iOS, cuando se habilita). [Política de privacidad](https://www.apple.com/legal/privacy)
- **Google Health Connect** — Integración de salud opcional (Android, cuando se habilita). [Política de privacidad](https://policies.google.com/privacy)
- **Expo Notifications** — Entrega de notificaciones push (token push). [Política de privacidad](https://expo.dev/privacy)
- **Expo Updates** — Actualizaciones de la aplicación por aire (OTA). [Política de privacidad](https://expo.dev/privacy)
- **Google Play Services** — Facturación y servicios de plataforma de Android. [Política de privacidad](https://policies.google.com/privacy)
- **Backend de LoveLust** — Notificaciones y preferencias de comunicación. Véase la Sección 1 de esta política.

No vendemos sus datos a ningún tercero. No utilizamos redes publicitarias.

## 8. Restricción de Edad

LoveLust está destinada a personas usuarias de **18 años o más**. Si cree que un menor ha utilizado la aplicación, contáctenos y eliminaremos los datos asociados.

## 9. Responsable del Tratamiento y Contacto

- **Responsable:** `The LoveLust Company SL`
- **Domicilio social:** `Calle Huesa del Común 2, 2C, 50011, Zaragoza, España`
- **Contacto de Protección de Datos:** `legal@lovelust.health`
- **Delegado de Protección de Datos:** `Alin Sorin Trandafir Nedelcu`
- **Autoridad de control:** puede presentar una reclamación ante su autoridad de control local. En España, la Agencia Española de Protección de Datos (AEPD), [www.aepd.es](https://www.aepd.es).

## 10. Cambios en esta Política

Podemos actualizar esta política. Los cambios sustanciales se notificarán dentro de la aplicación, con una fecha de entrada en vigor actualizada y un registro de cambios. No consideraremos el mero uso continuado como aceptación de modificaciones sustanciales que afecten al consentimiento.

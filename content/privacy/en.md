# LoveLust Privacy Policy

**The LoveLust Company SL** built **LoveLust** with privacy as its foundation. This policy explains what data the app processes, how, where, and the rights you have under the **General Data Protection Regulation (GDPR)**.

LoveLust is for users who are **18 years of age or older**.

_Last updated: 2026-05-15_

## 1. Data We Process

### Sexual activity and health data (special category, GDPR Art. 9)

Data about sexual activity, partners, contraception, medications, STI-related and other health information is **special category data** under GDPR Art. 9. This data:

- Is stored **locally on your device**, in encrypted storage (see Section 6).
- Is **never sent to LoveLust servers**, and is never sold or shared with advertisers.
- May be shared with **Apple HealthKit** (iOS) or **Health Connect** (Android) only if you explicitly enable that integration.
- Is included in the optional **encrypted cloud backup** only if you enable it (see Section 2).

The lawful basis for processing this data is your **explicit consent** under GDPR Art. 9(2)(a). You give this consent through a separate, opt-in toggle (default off), and you can withdraw it at any time (see Section 4).

### Subscription and purchase data

In-app purchases are managed by **RevenueCat**. RevenueCat processes an internal account identifier, transaction identifiers, and purchase history to validate and restore subscriptions. LoveLust never receives or stores your payment card details. See [RevenueCat's Privacy Policy](https://www.revenuecat.com/privacy).

### Account and notification data sent to the LoveLust backend

LoveLust operates a backend service. When the app starts and when relevant settings change, it sends to this service:

- an internal account identifier (not your name),
- your language preference,
- your push-notification token (if notifications are enabled),
- your platform (iOS/Android) and app version,
- your marketing-communication preferences (product updates, promotions, events, community news).

This is used to deliver notifications you opted into and to honor your communication preferences. **No sexual activity, partner, medication, or health data is ever sent to this backend.** Lawful basis: consent (Art. 6(1)(a)) for communications, and legitimate interest (Art. 6(1)(f)) for delivering app functionality you requested. You can request deletion of this backend record (see Section 4).

### Diagnostics and crash data

We use **Firebase Crashlytics** (Google) to receive crash reports and diagnostic information about errors, including device and OS information automatically collected by the SDK. We do **not** attach your account identifier to crash reports. We use **Firebase Remote Config** (Google) to manage feature flags; this involves a configuration request to Google that includes standard device information. See [Google's Privacy Policy](https://policies.google.com/privacy).

### Anonymous usage analytics

We use **Aptabase** for aggregate, anonymous product analytics (e.g. which screens are visited, app version, OS, counts and durations). Analytics are off until you consent. Sensitive (Art. 9) analytics are a separate explicit opt-in. Events never include names, notes, free text, contact details, locations, birth dates, or any direct identifier — only counts, booleans, and bounded categories. See [Aptabase's Privacy Policy](https://aptabase.com/legal/privacy).

## 2. Cloud Backup (optional, premium)

If you enable encrypted cloud backup, your activity, partner, medication, settings, and photo data is encrypted **on your device** with a key derived from your passphrase, before upload to **your own** Google Drive or iCloud (a private app folder).

You set a backup passphrase when you enable cloud backup. **end.works cannot decrypt your cloud backup — only you hold the passphrase.** Keep it safe: if you lose it, your backup cannot be recovered.

LoveLust servers never receive your backup or your passphrase. The backup lives in your personal cloud storage account.

## 3. Where Data Is Stored

All sexual activity and health data is stored locally on your device in encrypted storage (Section 6). LoveLust servers do not store this data. The optional cloud backup is stored in your own Google Drive or iCloud, encrypted before it leaves your device.

## 4. Data Retention and Deletion

Local data is retained until you delete it. You can:

1. **Settings → Storage → Clear all Data** — erases all local data on the device.
2. **Delete your cloud backup separately** — clearing local data does **not** remove your cloud backup. To erase it, go to Settings → Cloud Storage, sign out, and delete the remote backup. We keep it until you do so, so you can restore after reinstalling.
3. **Uninstall the app** — removes local data only; your cloud backup remains until you delete it per step 2.
4. **Backend record deletion** — disabling notifications, or contacting us, deletes the backend record (account identifier, push token, preferences) through our deletion process.

## 5. Your GDPR Rights

- **Art. 13/14, Transparency:** the controller and its contact details are in Section 9.
- **Art. 15, Access:** request a copy of personal data we hold (the backend record; local/cloud data is in your control and exportable in-app).
- **Art. 16, Rectification:** correct inaccurate data, in-app or by contacting us.
- **Art. 17, Erasure:** delete local and cloud data in-app (Section 4); contact us to erase the backend record.
- **Art. 20, Portability:** export your data as machine-readable JSON via **Settings → Storage → Export Data**.
- **Art. 7(3), Withdraw consent:** withdraw analytics or sensitive-data consent at any time via **Settings → Privacy**, without deleting your data. Withdrawal is as easy as giving consent.
- **Art. 21, Object / Art. 18, Restriction:** contact us.

To exercise any right, contact us using Section 9. We respond within 30 days.

## 6. Security

Local data is encrypted on your device using strong, industry-standard encryption (AES-256). The encryption key is generated per installation and held in the operating system's secure key storage. The optional cloud backup is encrypted on your device before upload using a key derived from your passphrase. No system is 100% secure; we apply industry best practices but cannot guarantee absolute security.

## 7. Third-Party Services and Processors

| Service                         | Purpose                                             | Privacy Policy                      |
| ------------------------------- | --------------------------------------------------- | ----------------------------------- |
| RevenueCat                      | Subscription management                             | https://www.revenuecat.com/privacy  |
| Aptabase                        | Anonymous analytics (consent-gated)                 | https://aptabase.com/legal/privacy  |
| Firebase Crashlytics (Google)   | Crash & error diagnostics                           | https://policies.google.com/privacy |
| Firebase Remote Config (Google) | Feature configuration                               | https://policies.google.com/privacy |
| Google Sign-In                  | Authentication for Google Drive cloud backup        | https://policies.google.com/privacy |
| Apple HealthKit                 | Optional health integration (iOS, when enabled)     | https://www.apple.com/legal/privacy |
| Google Health Connect           | Optional health integration (Android, when enabled) | https://policies.google.com/privacy |
| Expo Notifications              | Push-notification delivery (push token)             | https://expo.dev/privacy            |
| Expo Updates                    | Over-the-air app updates                            | https://expo.dev/privacy            |
| Google Play Services            | Android billing & platform services                 | https://policies.google.com/privacy |
| LoveLust backend                | Notifications & communication preferences           | This policy, Section 1              |

We do not sell your data to any third party. We do not use advertising networks.

## 8. Age Restriction

LoveLust is for users **18 or older**. If you believe a minor has used the app, contact us and we will delete the associated data.

## 9. Data Controller and Contact

- **Controller:** `The LoveLust Company SL`
- **Registered address:** `Calle Huesa del Común 2, 2C, 50011, Zaragoza, Spain`
- **Data Protection contact:** `legal@lovelust.health`
- **Data Protection Officer:** `Alin Sorin Trandafir Nedelcu`
- **Supervisory authority:** you may lodge a complaint with your local Data Protection Authority.

## 10. Changes to This Policy

We may update this policy. Material changes will be notified in-app, with an updated effective date and a changelog. We will not rely on continued use alone as acceptance of materially changed terms affecting consent.

import { useEffect, useState } from "react";

function PrivacyPolicy() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    if (mq.matches) {
      setIsDark(true);
    }

    // This callback will fire if the perferred color scheme changes without a reload
    mq.addEventListener("change", (evt) => setIsDark(evt.matches));
  }, []);

  return (
    <div className="text-center mt-20">
      <h1
        className="text-3xl tracking-tight prose-sm prose prose-slate mx-auto"
        style={{
          color: isDark
            ? "var(--tw-prose-invert-headings)"
            : "var(--tw-prose-headings)",
        }}
      >
        LoveLust
      </h1>
      <h1 className="text-5xl font-extrabold tracking-tight light:text-slate-900 dark:text-gray-100">
        Privacy policy
      </h1>
      <div className="mx-auto max-w-4xl mb-10 px-6">
        <div
          className="prose-slate text-wrap whitespace-pre mt-14 text-start mx-auto"
          style={{
            color: isDark
              ? "var(--tw-prose-invert-body)"
              : "var(--tw-prose-body)",
          }}
        >
          <p className="mt-2 mb-4 text-lg text-gray-600 dark:text-gray-400 prose-slate text-wrap whitespace-pre">
            <b>end.works</b> built the <b>LoveLust</b> app as a Free app. This
            SERVICE is provided by end.works at no cost and is intended for use
            as is.
          </p>
          <p className="mt-2 mb-4 text-lg  text-gray-600 dark:text-gray-400 prose-slate text-wrap whitespace-pre">
            This page is used to inform visitors regarding our policies with the
            collection, use, and disclosure of Personal Information and Health
            Data, including data about sexual activity, if anyone decides to use
            our Service.
          </p>
          <p className="mt-2 mb-4 text-lg text-gray-600 dark:text-gray-400 prose-slate text-wrap whitespace-pre">
            If you choose to use our Service, then you agree to the collection
            and use of information in relation to this policy. The Personal
            Information and Health Data that we collect are used as described in
            this Privacy Policy. We will not use or share your information with
            anyone except as described in this Privacy Policy.
          </p>
          <p className="mt-2 mb-4 text-lg text-gray-600 dark:text-gray-400 prose-slate text-wrap whitespace-pre">
            The terms used in this Privacy Policy have the same meanings as in
            our Terms and Conditions, which are accessible at LoveLust unless
            otherwise defined in this Privacy Policy.
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Information Collection and Use
          </h2>
          <p className="mt-2 mb-4 text-lg text-gray-600 dark:text-gray-400 prose-slate text-wrap whitespace-pre">
            For a better experience while using our Service, we may require you
            to provide us with certain personally identifiable information and
            Health Data. The information we collect will be retained and used as
            described in this privacy policy.
          </p>
          <p className="mt-2 mb-4 text-lg text-gray-600 dark:text-gray-400 prose-slate text-wrap whitespace-pre">
            The app also uses third-party services that may collect information
            used to identify you.
          </p>
          <p className="mt-2 mb-4 text-lg text-gray-600 dark:text-gray-400 prose-slate text-wrap whitespace-pre">
            Links to the privacy policies of third-party service providers used
            by the app are provided below:
          </p>
          <ul className="mt-2 mb-4">
            <li className="mt-2 mb-4 text-lg text-indigo-700 dark:text-indigo-300">
              <a href="https://policies.google.com/privacy?hl=en-US">
                Google Play Services
              </a>
            </li>
          </ul>

          <h2 className="text-2xl pt-1 font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Health Data
          </h2>
          <p className="mt-2 mb-4 text-lg text-gray-600 dark:text-gray-400 prose-slate text-wrap whitespace-pre">
            To enable specific features of the app, we may request permission to
            collect data about sexual activity. This data is:
          </p>
          <ul className="mt-2 mb-4">
            <li className="mt-1 mb-2 text-lg text-gray-800 dark:text-gray-200">
              <b>Stored locally</b> on your device and is not transmitted to any
              server or third party, except as explicitly shared with{" "}
              <b>Health Connect</b> on Android or <b>HealthKit</b> on iOS, if
              enabled by you.
            </li>
            <li className="mt-1 mb-2 text-lg text-gray-800 dark:text-gray-200">
              <b>Used solely</b> for personal tracking and reference within the
              app.
            </li>
          </ul>

          <h2 className="text-2xl pt-1 font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Data Retention and Deletion
          </h2>

          <h3 className="text-lg pt-1 font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Retention
          </h3>

          <p className="mt-2 mb-4 text-lg text-gray-600 dark:text-gray-400 prose-slate text-wrap whitespace-pre">
            Health Data, including data about sexual activity, is stored locally
            on your device. No Health Data is transmitted to our servers or any
            external party.
          </p>

          <h3 className="text-lg pt-1 font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Deletion
          </h3>
          <p className="mt-2 mb-4 text-lg text-gray-600 dark:text-gray-400 prose-slate text-wrap whitespace-pre">
            You can delete all Health Data at any time by:
          </p>
          <ol className="mt-2 mb-4">
            <li className="mt-1 mb-2 text-lg text-gray-800 dark:text-gray-200">
              Using the <b>Settings</b> section within the app to delete all
              data.
            </li>
            <li className="mt-1 mb-2 text-lg text-gray-800 dark:text-gray-200">
              Uninstalling the app, which will delete all data stored locally on
              your device.
            </li>
            <li className="mt-1 mb-2 text-lg text-gray-800 dark:text-gray-200">
              Clearing the app data from your device settings.
            </li>
          </ol>
          <p className="mt-2 mb-4 text-lg text-gray-600 dark:text-gray-400 prose-slate text-wrap whitespace-pre">
            Since all Health Data remains on your device, no additional action
            is required to ensure it is fully deleted.
          </p>
          <h2 className="text-2xl pt-1 font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Log Data
          </h2>
          <p className="mt-2 mb-4 text-lg text-gray-600 dark:text-gray-400 prose-slate text-wrap whitespace-pre">
            We want to inform you that whenever you use our Service, in the case
            of an error in the app, we collect data and information (through
            third-party products) on your phone called Log Data. This Log Data
            may include information such as your device Internet Protocol (“IP”)
            address, device name, operating system version, the configuration of
            the app when utilizing our Service, the time and date of your use of
            the Service, and other statistics.
          </p>
          <h2 className="text-2xl pt-1 font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Cookies
          </h2>
          <p className="mt-2 mb-4 text-lg text-gray-600 dark:text-gray-400 prose-slate text-wrap whitespace-pre">
            Cookies are files with a small amount of data that are commonly used
            as anonymous unique identifiers. These are sent to your browser from
            the websites you visit and are stored on your device's internal
            memory.
          </p>
          <p className="mt-2 mb-4 text-lg text-gray-600 dark:text-gray-400 prose-slate text-wrap whitespace-pre">
            This Service does not use these “cookies” explicitly. However, the
            app may use third-party code and libraries that use “cookies” to
            collect information and improve their services. You have the option
            to either accept or refuse these cookies and know when a cookie is
            being sent to your device. If you choose to refuse our cookies, you
            may not be able to use some portions of this Service.
          </p>
          <h2 className="text-2xl pt-1 font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Service Providers
          </h2>
          <p className="mt-2 mb-4 text-lg text-gray-600 dark:text-gray-400 prose-slate text-wrap whitespace-pre">
            We may employ third-party companies and individuals due to the
            following reasons:
          </p>
          <ul className="mt-2 mb-4">
            <li className="mt-1 mb-2 text-lg text-gray-800 dark:text-gray-200">
              To facilitate our Service;
            </li>
            <li className="mt-1 mb-2 text-lg text-gray-800 dark:text-gray-200">
              To provide the Service on our behalf;
            </li>
            <li className="mt-1 mb-2 text-lg text-gray-800 dark:text-gray-200">
              To perform Service-related services; or
            </li>
            <li className="mt-1 mb-2 text-lg text-gray-800 dark:text-gray-200">
              To assist us in analyzing how our Service is used.
            </li>
          </ul>
          <p className="mt-2 mb-4 text-lg text-gray-600 dark:text-gray-400 prose-slate text-wrap whitespace-pre">
            These third parties have access to your Personal Information to
            perform tasks assigned to them on our behalf. However, they are
            obligated not to disclose or use the information for any other
            purpose.{" "}
            <b>
              Health Data, including data about sexual activity, is shared only
              with Health Connect or HealthKit and only when you have enabled
              this feature.
            </b>
          </p>
          <h2 className="text-2xl pt-1 font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Security
          </h2>
          <p className="mt-2 mb-4 text-lg text-gray-600 dark:text-gray-400 prose-slate text-wrap whitespace-pre">
            We value your trust in providing us your Personal Information and
            Health Data, thus we strive to use commercially acceptable means of
            protecting it. However, no method of transmission over the internet
            or electronic storage is 100% secure and reliable, and we cannot
            guarantee its absolute security.
          </p>
          <h2 className="text-2xl pt-1 font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Links to Other Sites
          </h2>
          <p className="mt-2 mb-4 text-lg text-gray-600 dark:text-gray-400 prose-slate text-wrap whitespace-pre">
            This Service may contain links to other sites. If you click on a
            third-party link, you will be directed to that site. Note that these
            external sites are not operated by us. Therefore, we strongly advise
            you to review the Privacy Policy of these websites. We have no
            control over and assume no responsibility for the content, privacy
            policies, or practices of any third-party sites or services.
          </p>
          <h2 className="text-2xl pt-1 font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Children’s Privacy
          </h2>
          <p className="mt-2 mb-4 text-lg text-gray-600 dark:text-gray-400 prose-slate text-wrap whitespace-pre">
            These Services do not address anyone under the age of 13. We do not
            knowingly collect personally identifiable information or
            health-related data from children under 13 years of age. If we
            discover that a child under 13 has provided us with personal
            information or health data, we will immediately delete it from our
            servers. If you are a parent or guardian and are aware that your
            child has provided us with such information, please contact us so
            that we can take the necessary actions.
          </p>
          <h2 className="text-2xl pt-1 font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Changes to This Privacy Policy
          </h2>
          <p className="mt-2 mb-4 text-lg text-gray-600 dark:text-gray-400 prose-slate text-wrap whitespace-pre">
            We may update our Privacy Policy from time to time. Thus, you are
            advised to review this page periodically for any changes. We will
            notify you of any changes by posting the new Privacy Policy on this
            page. This policy is effective as of 2024-12-04
          </p>
          <h2 className="text-2xl pt-1 font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Contact Us
          </h2>
          <p className="mt-2 mb-4 text-lg text-gray-600 dark:text-gray-400 prose-slate text-wrap whitespace-pre">
            If you have any questions or suggestions about our Privacy Policy,
            do not hesitate to contact us at <em>ender@end.works</em>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;

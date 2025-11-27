import { Section, Block, Header, ExternalLink, Tags } from "@/components";
import Link from "next/link";
export default function HomeButler() {
  return (
    <>
      <Section>
        <Block columns={3}>
          <p>
            I love the idea if <ExternalLink href="https://pontus.granstrom.me/scrappy/">scrappy</ExternalLink> apps; the handmade ones just for fun, for you or your family and friends. Especially those that find use for hardware that otherwise sits in a electronics box, gathering dust
          </p>
        </Block>
      </Section>
      <Section>
        <Header label="Home Butler">
          <div className="flex flex-col gap-8 items-end">
            <Tags tags={["iOS", "UIKit", "Theos", "Xcode","Home Assistant", "Claude.ai" ]} />
          </div>
        </Header>
        <Block columns={3}>
          <video src="/homebutler/demo.mp4" preload="auto" autoPlay controls loop className="shadow-xl border-[5px] border-black rounded">
            <source src="/homebutler/demo.mp4" type="video/mp4" />
          </video>
          
          <p>
            Next up is to view the Home Assistant web interface, which normally works great. There are, however, long-standing issues (you can&apos;t load the page to authenticate, and they have <ExternalLink href="https://github.com/home-assistant/frontend/issues?q=is%3Aissue%209.3.5">no interest in fixing</ExternalLink>, and fair enough) because:
          </p>

          <ol>
            <li className="list-[lower-alpha] list-outside">the Safari on the old iPads is major versions out of date, and</li>
            <li className="list-[lower-alpha] list-outside">you can&apos;t install any other (non-safari based) browser that you could use, as nobody builds apps that far back.</li>
          </ol>

          <p>
            So, I decided to build a small, scrappy app to control my home automation. Break out <ExternalLink href="https://developer.apple.com/xcode/">Xcode</ExternalLink>, <ExternalLink href="https://claude.ai">Claude.ai</ExternalLink> and start building. You can get pretty far with just a simulator, but eventually it&apos;s time to try deploying to the device and giving it a whirl. And that&apos;s when the sadness really begins.
          </p>

          <p>
            You just can&apos;t build apps for iOS 9.3.5 on new Xcode versions. ARM7 architecture is no longer supported (<ExternalLink href="https://www.innerfence.com/howto/apple-ios-devices-dates-versions-instruction-sets">it was only used on old devices</ExternalLink>), as newer devices moved to newer ARM64 architectures. I tried to build the app using Github Actions, but they only support building for xcode 12 and newer, which is too new to build for iOS 9.3.5. I tried to downgrade to xcode 11, but that&apos;s not supported on MacOS 26.1 Tahoe.
          </p>

          <p>
            I&apos;d have to fish out an old mac, install an old version of MacOS, and then install an old version of Xcode. And then I could build the app. Nobody got time for that. I&apos;d also have to pay the <ExternalLink href="https://developer.apple.com/support/compare-memberships/">Apple Developer Program</ExternalLink> fee, which is $149AUD per year, or I&apos;d have to redeploy the app every 7 days (or get into dependency hell and have Sideloadly redeploy the app weekly). <strong>I&apos;m not doing that.</strong>
          </p>

          <p>
            Let&apos;s jailbreak the device! Jailbreaking lets us install apps that are not signed by Apple, so no need for the developer account. It was <ExternalLink href="https://www.reddit.com/r/LegacyJailbreak/comments/1cn9yp8/a_comprehensive_guide_to_installing_working_apps/">surprisingly easy</ExternalLink> (by following <ExternalLink href="https://www.reddit.com/r/LegacyJailbreak/comments/12jx9ji/discussion_steps_i_used_to_jailbreak_and_load/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button">this tutorial</ExternalLink>) to do, but I did run into issues <Link href="#jailbreak-related-errors"><sup className="text-sm text-blue-700">2</sup></Link>.
          </p>

          <p>
            With a jailbreak in place, I was able to install the app using <ExternalLink href="https://sideloadly.io/">Sideloadly</ExternalLink>.
          </p>

          <p>
            Then, with a lot of tweaking and exploration of the Home Assistant states, services and weather APIs, I was able to get the app to work with nice interactions for changing the brightness of dimmable lights, trigger scripts (to turn on/off the TV with via IR with a <ExternalLink href="https://www.amazon.com.au/Broadlink-RM4-Universal-Automation-Infrared/dp/B0872PPSGM">RM4 Broadlink blaster</ExternalLink>), and get the weather for the day.
          </p>

          <p>If there&apos;s interest to run it on your own, <ExternalLink href="mailto:mark@markcipolla.com">drop me a line</ExternalLink> and I&apos;ll send you the app and instructions.</p>
        </Block>
        <Block columns={3}>
          <ol>
            <li id="homelab" className="list-decimal list-outside">
              It&apos;s a 2013 &quot;Trash Can&quot; <ExternalLink href="https://support.apple.com/en-us/112025">Mac Pro</ExternalLink> running a bunch of <ExternalLink href="https://docs.docker.com/compose/">Docker compose images</ExternalLink>, one of which is <ExternalLink href="https://www.home-assistant.io/">Home Assistant</ExternalLink>.
            </li>

            <li id="jailbreak-related-errors" className="list-decimal list-outside">
               I had to create a new Apple free developer account, else I couldn&apos;t sideload the apps to jailbreak the ipad. I got an error about the device not being available to the developer account&apos;s team. I was getting this error from both <ExternalLink href="https://sideloadly.io/">Sideloadly</ExternalLink> and <ExternalLink href="https://www.cydiaimpactor.com">Cydia Impactor</ExternalLink>, and it&apos;s all account-related:

              <code className="block whitespace-pre-wrap my-4">
                Sideloading failed!
              
                Install failed: Guru Meditation 0db732@1065:3aea77 Failed: (7252) There is no &apos;ios&apos; certificate with serial number &apos;[DEVICE_ID]&apos; on this team
              </code>

              Also, once you have <ExternalLink href="https://www.cydiafree.com/">Cydia</ExternalLink> installed, it&apos;s common when sideloading to install a useful library called AppSync Unified, which allows unsigned apps to be installed. This <em>used</em> to be available at <ExternalLink href="http://cydia.akemi.ai/">http://cydia.akemi.ai</ExternalLink>, but that&apos;s offline. I had to download the .deb file, and install it manually.
            </li>
          </ol>
        </Block>
      </Section>
    </>
  );
}
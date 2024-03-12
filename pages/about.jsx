import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="flex-layout">
        <div>
          <Image
            src="/images/zach6.jpg"
            alt="a pic of zach brose"
            width={500}
            height={750}
          />
        </div>
        <div id="about">
          <p>
            Zach Brose is a producer, songwriter and multi-instrumentalist from
            Minneapolis, MN and based in Los Angeles, CA. &nbsp; His music
            varies widely from indie-rock centered songwriting to experimental
            electronica to long-form ambient environments. &nbsp;Not one to
            settle on any formula, Zach&apos;s curiosity for new methods, sounds
            and forms is reflected in his wide ranging discography and projects.
          </p>

          <p>
            Zachs most recent release, <i>Smear</i>, covers expansive sonic
            ground from stomping sampled drums of &apos;Daylight&apos; to the
            hypnotic groove of &apos;Seq iiii&apos; into the swaying bossa of
            &apos;Susanne&apos;. &nbsp;<i>Smear</i> reflects his reluctance to
            relinquish to any one type of tune and instead create with doors
            wide open.{" "}
          </p>

          <p>
            Zach also writes and records in Kansas Plates and ar.birn.
            &nbsp;He&apos;s produced records for Jessica Manning, Mik Cool and
            Marathoner, and continues to exercise his instrumental diversity in
            sessions and remote recording work.
          </p>
        </div>
      </div>
    </>
  );
}

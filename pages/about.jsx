import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="flex-layout">
        <div>
          <Image
            src="/images/zach6.jpg"
            alt="an image of zach brose"
            width={500}
            height={750}
            quality={100}
          />
        </div>
        <div id="about">
          <p>
            Zach Brose is a producer, songwriter, composer, and
            multi-instrumentalist based in Los Angeles, CA. &nbsp; His music
            varies widely from indie-rock songwriting to experimental
            electronica to long-form ambient environments. &nbsp;Not one to
            settle on any formula, Zach&apos;s curiosity for new methods, sounds
            and forms is reflected in his wide ranging discography and projects.
          </p>

          <p>
            Zach co-founded Minneapolis groups Kansas Plates and ar.birn,
            produced records for Jessica Manning, Mik Cool and Marathoner, and
            continues to exercise his instrumental diversity in production and
            recording work. His music has appeared in the 2022 Winter Olympics,
            The Kelly Clarkson Show, and The Today Show and he&apos;s composed
            music for game studio Phoenix Labs.
          </p>

          <p>
            Zach&apos;s latest solo release, <i>Smear</i>, covers expansive
            sonic ground from stomping sampled drums of &apos;Daylight&apos; to
            the hypnotic groove of &apos;Seq iiii&apos; into the swaying bossa
            of &apos;Susanne&apos;. &nbsp;<i>Smear</i> reflects his reluctance
            to relinquish to any one type of tune and instead create with doors
            wide open.{" "}
          </p>

          <p>
            Zach is currently working on his follow up to <i>Smear</i> set to
            release in late 2025.
          </p>
        </div>
      </div>
    </>
  );
}

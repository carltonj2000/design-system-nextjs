export default function Typography() {
  return (
    <section style={{ margin: "4rem 0" }}>
      <h2 className="numbered-title">
        <span>02</span>typography
      </h2>
      <div className="flex">
        <div
          className="flow"
          style={{ flexBasis: "100%", "--flow-space": "4rem" }}
        >
          <div>
            <p className="text-accent">Heading 1 - Bellefair Regular - 150px</p>
            <p className="ff-serif fs-900 uppercase">Earth</p>
          </div>
          <div>
            <p className="text-accent">Heading 2 - Bellefair Regular - 100px</p>
            <p className="ff-serif fs-800 uppercase">Venus</p>
          </div>
          <div>
            <p className="text-accent">Heading 3 - Bellefair Regular - 56px</p>
            <p className="ff-serif fs-700 uppercase">Jupiter & Saturn</p>
          </div>
          <div>
            <p className="text-accent">Heading 4 - Bellefair Regular - 32px</p>
            <p className="ff-serif fs-600 uppercase">
              Uranus, Neptune, & Pluto
            </p>
          </div>
          <div>
            <p className="text-accent">
              Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space
            </p>
            <p className="ff-sans-cond fs-500 uppercase letter-spacing-1 text-accent">
              So, you want to travel to space
            </p>
          </div>
        </div>
        <div
          className="flow"
          style={{ flexBasis: "100%", "--flow-space": "4rem" }}
        >
          <div>
            <p className="text-accent">
              Subheading 1 - Bellefair Regular - 28px
            </p>
            <p className="ff-serif fs-500 uppercase">384,400 km</p>
          </div>
          <div>
            <p className="text-accent">
              Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character
              Space
            </p>
            <p className="ff-sans-cond fs-200 uppercase letter-spacing-2">
              Avg. distance
            </p>
          </div>

          <div>
            <p className="text-accent">
              Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space
            </p>
            <p className="ff-sans-cond fs-300 uppercase letter-spacing-2">
              Europa
            </p>
          </div>
          <div>
            <p className="text-accent">Body Text</p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
              ligula sollicitudin laoreet viverra, tortor libero sodales leo,
              eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
              Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh
              nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel,
              nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor
              libero sodales leo, eget blandit nunc tortor eu nibh. Nullam
              mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque
              aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id,
              mattis vel, nisi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/*

TYPOGRAPHY

03
INTERACTIVE ELEMENTS
00
ACTIVE
01
HOVERED
02
IDLE
Different States of Navigation Bar
MOON
MARS
EUROPA
EXPLORE
Tabs (Active, Hover, & Idle)
Landing Page Main Button - Idle
Slider 1 States (Active, Hover, & Idle)
1
EXPLORE
2
3
Landing Page Main Button - Hover
Slider 2 States (Active, Hover, & Idle)
*/

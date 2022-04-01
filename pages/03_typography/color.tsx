const colorBox = {
  padding: "3rem 1rem 1rem",
  border: "1px solid white",
};

const ColorBox = ({
  hex = "#0B0D17",
  rgb = "11, 13, 23",
  hsl,
  text = "text-white",
  bg = "bg-dark",
}) => (
  <div style={{ flexBasis: "100%" }}>
    <div className={`${text} ${bg}`} style={colorBox}>
      {hex}
    </div>
    <p style={{ lineHeight: 1.1 }}>
      <span className="text-accent" style={{ marginRight: "3rem" }}>
        RGB
      </span>
      {rgb}
    </p>
    <p style={{ lineHeight: 1.1 }}>
      <span className="text-accent" style={{ marginRight: "3rem" }}>
        HSL
      </span>
      {hsl}
    </p>
  </div>
);

export default function DesignSystem02() {
  return (
    <section>
      <h2 className="numbered-title">
        <span>01</span>colors
      </h2>
      <div className="flex">
        <ColorBox hsl="230&deg;, 35%, 7%" />
        <ColorBox
          hex="#D0D6F9"
          rgb="208, 214, 249"
          hsl="231&deg;, 77%, 90%"
          bg="bg-accent"
          text="text-dark"
        />
        <ColorBox
          hex="#FFFFFF"
          rgb="255, 255, 255"
          hsl="0&deg;, 0%, 100%"
          bg="bg-white"
          text="text-dark"
        />
      </div>
    </section>
  );
}

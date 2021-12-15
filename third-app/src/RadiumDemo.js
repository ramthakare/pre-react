import Redium from "radium";

const RadiumDemo = () => {
  return (
    <div style={[styles.block]}>
      <h1>In RediumDemo</h1>
      <button style={[styles.button, styles.primaryButton]}>
        Primary button
      </button>

      <br />

      <button style={[styles.button, styles.secondaryButton]}>
        Secondary button
      </button>
    </div>
  );
};

const styles = {
  block: {
    backgroundColor: "pink",
  },
  primaryButton: {
    backgroundColor: "#5d5c61",
  },
  secondaryButton: {
    backgroundColor: "#379683",
  },
  button: {
    backgroundColor: "#557a95",
  },
};
export default Redium(RadiumDemo);

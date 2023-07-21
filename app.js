particlesJS("particles-js", {
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          value_area: 900
        }
      },
      color: {
        value: "#000000" /* Replace with your desired circle color */
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.6,
        random: false,
        anim: {
          enable: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#000000" /* Replace with your desired line color */,
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false
        },
        onclick: {
          enable: false
        },
        resize: true
      }
    },
    retina_detect: true
  });
  
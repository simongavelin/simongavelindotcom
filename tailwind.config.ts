// tailwind.config.ts
export default {
  theme: {
    extend: {
      keyframes: {
        text: {
          "0%, 100%": {
            backgroundSize: "200% 200%",
            backgroundPosition: "left center",
          },
          "50%": {
            backgroundSize: "200% 200%",
            backgroundPosition: "right center",
          },
        },
      },
      animation: {
        text: "text 3s ease-in-out infinite",
      },
    },
  },
};

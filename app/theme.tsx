import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"
import { BiFontFamily } from "react-icons/bi"
import { Epilogue } from "next/font/google"



const customConfig = defineConfig({
  globalCss: {
    "*": {
      //fontFamily: "epilogue",
      fontFamily: "var(--font-epilogue)",
      fontWeight: "700",
    },
    body: {
      bg: "bg.page", // Reference a semantic token
      //color: "fg.default",
      color: "text.primary"
    },
  },
   theme: {
    // Use semantic tokens to handle light and dark mode colors
    /*semanticTokens: {
      colors: {
        "bg.page": {
          value: { _light: "#f5e2b9", _dark: "#14141e" }
        }
      }
    }*/
   semanticTokens: {
      colors: {
        "bg.page": {
          value: {
            _light: "#f09240",
            _dark: "#1E1108",
          },
        },

        "bg.card": {
          value: {
            _light: "#FFB062",
            _dark: "#352013",
          },
        },

        "accent": {
          value: {
            _light: "#F45A06",
            _dark: "#FF8C3A",
          },
        },

        "text.primary": {
          value: {
            _light: "#FFF7ED",
            _dark: "#FFF7ED",
          },
        },

        "text.secondary": {
          value: {
            _light: "#FFE0C2",
            _dark: "#D8B08C",
          },
        },

        "text.button": {
          value: {
            _light: "#fee4ca",
            _dark: "#352013",
          },
        },

        "text.button2": {
          value: {
            _light: "#382417",
            _dark: "#f9e8c6",
          },
        },

        "button.bg": {
          value: {
            _light: "#ffffff",
            _dark: "#523c2e",
          },
        },

        "frame": {
          value: {
            _light: "#FFF7ED",
            _dark: "#faa96e",
          },
        },


        "contrast": {
          value: {
            //_light: "#120A72",
            _light: "#1E1108",
            _dark: "#FFB062",
          },
        },
      },
    }
  }
})

const system = createSystem(defaultConfig, customConfig)

export default system
<<<<<<< HEAD
import { ChakraProvider } from "@chakra-ui/react";
=======
>>>>>>> aw/0.0.1
import Layout from "../components/layouts/main";
import Fonts from "../components/fonts";
import { AnimatePresence } from "framer-motion";
import { Analytics } from '@vercel/analytics/react';
import Chakra from "../components/chakra";

function Website({ Component, pageProps, router }) {
    return (
      <Chakra cookies={pageProps.cookies}>
        <Fonts />
        <Layout router={router}>
          <AnimatePresence
            mode="wait"
            initial={true}
            onExitComplete={() => {
              if (typeof window !== 'undefined') {
                window.scrollTo({ top: 0 })
              }
            }}
          >
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
          <Analytics />
        </Layout>
      </Chakra>
    )
  }

export default Website
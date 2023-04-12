import { type AppType } from "next/app";
import { dark } from "@clerk/themes";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const appearance = { baseTheme: dark };

const MyApp: AppType = ({ Component, pageProps }) => {
    return (
            <ClerkProvider appearance={appearance} {...pageProps}>
            <Component {...pageProps} />
            </ClerkProvider>  );
};

export default api.withTRPC(MyApp);

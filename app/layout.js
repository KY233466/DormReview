import { UserAuthContextProvider } from "../context/userAuthContext";

import "./globals.css";

export const metadata = {
  title: "DormReview",
  description:
    "For Tufts students! Info for making the housing selection easier :)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserAuthContextProvider>{children}</UserAuthContextProvider>
      </body>
    </html>
  );
}

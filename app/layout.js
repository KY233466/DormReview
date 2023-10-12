import Hmmm from "./hmm";

import "./globals.css";

export const metadata = {
  title: "DormReview",
  description:
    "For Tufts students! Info for making the housing selection easier :)",
};

export default function RootLayout({ children }) {
  return <Hmmm>{children}</Hmmm>;
}

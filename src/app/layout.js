 import { AppWrapper } from "@/components/AppWrapper"; 

 
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: "VoucherPay Dashboard",
  description: "Dashboard for VoucherPay",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}

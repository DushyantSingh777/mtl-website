"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe29lDNG_qzvcu-ggRsj71EwK9XADQZn6Evn3PGKJ5Zq_422w/viewform?usp=publish-editor";
const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/1o1eesWrmUaDoIk3-1dKRX4EbyxKZxYfH9Q9jHTCaTX0/edit?resourcekey=&gid=1935140731#gid=1935140731";

export default function PortalPage() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/portal/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      const url = session.user.role === "admin" ? GOOGLE_SHEET_URL : GOOGLE_FORM_URL;
      window.open(url, "_blank");
    }
  }, [status, session]);

  const redirectLabel = session?.user?.role === "admin" ? "submissions spreadsheet" : "Google Form";
  const redirectUrl = session?.user?.role === "admin" ? GOOGLE_SHEET_URL : GOOGLE_FORM_URL;

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <div className="text-[#6E7180] mb-4">Redirecting to {redirectLabel}...</div>
        <a href={redirectUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-[#9DA2B3] hover:text-[#EDEFF7] underline transition-colors">
          Click here if not redirected
        </a>
      </div>
    </div>
  );
}

import { PageHeader } from "../../../components/ui/page-header";
import { Stethoscope } from "lucide-react";

export const metadata = {
  title: "Doctor Dashboard - Skycare",
  description: "Manage your appointments and availability",
};

export default async function DoctorDashboardLayout({ children }) {
  return (
    <div className="container mx-auto px-4 py-20">
      <PageHeader icon={<Stethoscope />} title="Doctor Dashboard" />

      {children}
    </div>
  );
}
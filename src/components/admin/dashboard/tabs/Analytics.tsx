import { useTranslation } from "react-i18next";

function AdminDashboardAnalytics() {
  const { t, i18n } = useTranslation();

  return (
    <div className="w-full h-full">
      <h2 className="text-xl font-title ">Analytics</h2>
    </div>
  );
}

export default AdminDashboardAnalytics;

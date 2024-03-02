import { useTranslation } from "react-i18next";

function AdminDashboardActions() {
  const { t, i18n } = useTranslation();

  return (
    <div className="w-full h-full">
      <h2 className="text-xl font-title ">Actions</h2>
    </div>
  );
}

export default AdminDashboardActions;

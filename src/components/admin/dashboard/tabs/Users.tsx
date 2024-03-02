import { useTranslation } from "react-i18next";

function AdminDashboardUsers() {
  const { t, i18n } = useTranslation();

  return (
    <div className="w-full h-full">
      <h2 className="text-xl font-title ">Users</h2>
    </div>
  );
}

export default AdminDashboardUsers;

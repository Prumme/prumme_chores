import { useTranslation } from "react-i18next";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs";
import AdminDashboardOverview from "./tabs/Overview";
import AdminDashboardAnalytics from "./tabs/Analytics";
import AdminDashboardUsers from "./tabs/Users";
import AdminDashboardNotifications from "./tabs/Notifications";
import AdminDashboardActions from "./tabs/Actions";

function AdminDashboard() {
  const { t, i18n } = useTranslation();

  return (
    <div className="h-full relative top-0 px-10">
      <h1 className="text-2xl font-bold font-title ">Dashboard</h1>
      <div className="my-12">
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">{t("Overview")}</TabsTrigger>
            <TabsTrigger value="analytics">{t("Analytics")}</TabsTrigger>
            <TabsTrigger value="users">{t("Users")}</TabsTrigger>
            <TabsTrigger value="notifications">
              {t("Notifications")}
            </TabsTrigger>
            <TabsTrigger value="actions">{t("Actions")}</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <AdminDashboardOverview />
          </TabsContent>
          <TabsContent value="analytics">
            <AdminDashboardAnalytics />
          </TabsContent>
          <TabsContent value="users">
            <AdminDashboardUsers />
          </TabsContent>
          <TabsContent value="notifications">
            <AdminDashboardNotifications />
          </TabsContent>
          <TabsContent value="actions">
            <AdminDashboardActions />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default AdminDashboard;

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { User, Bell, Lock, Mail, Smartphone } from "lucide-react";
import { currentUser } from "@/data/mockData";

const Settings = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          Setări
        </h1>
        <p className="text-muted-foreground mt-1">
          Gestionează preferințele contului tău.
        </p>
      </div>

      <div className="grid gap-6 max-w-2xl">
        {/* Profile Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              Profil
            </CardTitle>
            <CardDescription>
              Informațiile tale personale
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Prenume</Label>
                <Input
                  id="firstName"
                  defaultValue={currentUser.firstName}
                  disabled
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Nume</Label>
                <Input
                  id="lastName"
                  defaultValue={currentUser.lastName}
                  disabled
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                defaultValue={currentUser.email}
                disabled
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Pentru a modifica datele personale, contactează secretariatul.
            </p>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-primary" />
              Notificări
            </CardTitle>
            <CardDescription>
              Configurează preferințele de notificare
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Notificări Email
                </Label>
                <p className="text-sm text-muted-foreground">
                  Primește notificări pe email pentru note noi
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4" />
                  Notificări Push
                </Label>
                <p className="text-sm text-muted-foreground">
                  Primește notificări pe dispozitivul mobil
                </p>
              </div>
              <Switch />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Reminder Termene</Label>
                <p className="text-sm text-muted-foreground">
                  Notificări pentru termenele limită apropiate
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-primary" />
              Securitate
            </CardTitle>
            <CardDescription>
              Opțiuni de securitate pentru contul tău
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="outline" className="w-full justify-start">
              Schimbă Parola
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Activează Autentificarea în Doi Pași
            </Button>
            <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive">
              Deconectează-te de pe Toate Dispozitivele
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Settings;

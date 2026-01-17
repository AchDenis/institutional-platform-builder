import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Calendar, Eye } from "lucide-react";

interface Document {
  id: number;
  name: string;
  type: string;
  category: "personal" | "academic" | "administrative";
  date: string;
  size: string;
}

const documents: Document[] = [
  {
    id: 1,
    name: "Adeverință de Student",
    type: "PDF",
    category: "personal",
    date: "2025-01-10",
    size: "125 KB",
  },
  {
    id: 2,
    name: "Situația Școlară Sem. I",
    type: "PDF",
    category: "academic",
    date: "2025-01-15",
    size: "89 KB",
  },
  {
    id: 3,
    name: "Orar Semestrul II",
    type: "PDF",
    category: "administrative",
    date: "2025-01-08",
    size: "234 KB",
  },
  {
    id: 4,
    name: "Contract de Studii",
    type: "PDF",
    category: "administrative",
    date: "2024-09-15",
    size: "1.2 MB",
  },
  {
    id: 5,
    name: "Regulament Intern",
    type: "PDF",
    category: "administrative",
    date: "2024-09-01",
    size: "567 KB",
  },
];

const categoryColors = {
  personal: "bg-info/10 text-info",
  academic: "bg-success/10 text-success",
  administrative: "bg-warning/10 text-warning",
};

const categoryLabels = {
  personal: "Personal",
  academic: "Academic",
  administrative: "Administrativ",
};

const Documents = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">
          Documente
        </h1>
        <p className="text-muted-foreground mt-1">
          Accesează și descarcă documentele tale universitare.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-medium">Solicită Adeverință</p>
                <p className="text-sm text-muted-foreground">Pentru angajator</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-success/10 rounded-xl">
                <Download className="w-6 h-6 text-success" />
              </div>
              <div>
                <p className="font-medium">Descarcă Situația</p>
                <p className="text-sm text-muted-foreground">Situație școlară</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-warning/10 rounded-xl">
                <Calendar className="w-6 h-6 text-warning" />
              </div>
              <div>
                <p className="font-medium">Vezi Orarul</p>
                <p className="text-sm text-muted-foreground">Semestrul curent</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Documents List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Toate Documentele
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="flex items-center justify-between p-4 bg-muted/30 rounded-lg border border-border/50 hover:border-primary/30 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-card rounded-lg border border-border">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{doc.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge
                        variant="secondary"
                        className={categoryColors[doc.category]}
                      >
                        {categoryLabels[doc.category]}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {new Date(doc.date).toLocaleDateString("ro-RO")}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        • {doc.size}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
};

export default Documents;

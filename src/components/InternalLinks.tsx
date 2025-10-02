import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ArrowRight } from "lucide-react";

interface InternalLink {
  title: string;
  description: string;
  href: string;
}

interface InternalLinksProps {
  title?: string;
  links: InternalLink[];
  columns?: 2 | 3 | 4;
}

export default function InternalLinks({
  title = "Servicios Relacionados",
  links,
  columns = 3
}: InternalLinksProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4"
  };

  return (
    <section className="section-spacing bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
          {title}
        </h2>
        <div className={`grid gap-6 ${gridCols[columns]}`}>
          {links.map((link, index) => (
            <Link key={index} to={link.href} className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-kilowatt-primary/50">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-kilowatt-primary transition-colors flex items-center justify-between">
                    {link.title}
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </CardTitle>
                  <CardDescription className="text-base">
                    {link.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
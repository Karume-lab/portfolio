"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionHeader } from "@/components";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CERTIFICATIONS, type Certificate } from "@/data";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleViewCert = (cert: Certificate) => {
    setSelectedCert(cert);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedCert(null);
  };

  return (
    <section className="max-w-7xl mx-auto" id="certifications">
      <SectionHeader title="WHERE'S THE PROOF?" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATIONS.map((cert) => (
          <Card key={cert.title} className="h-full flex flex-col">
            <div className="relative aspect-video mx-4">
              <Image
                src={cert.imagePath}
                alt={cert.title}
                fill
                className="object-cover hover-to-reveal"
              />
            </div>

            <CardHeader>
              <CardTitle className="font-semibold text-center">
                {cert.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-2 flex-1">
              <p className="text-sm text-muted-foreground text-center">
                {cert.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {cert.skills.map((skill) => (
                  <Badge key={skill} variant={"secondary"} className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <div className="p-4 pt-0 mt-auto">
              <div className="flex justify-end">
                <Button
                  size="sm"
                  onClick={() => handleViewCert(cert)}
                  className="text-xs"
                >
                  View Certificate
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedCert?.title}</DialogTitle>
          </DialogHeader>
          <div className="relative h-96 w-full">
            {selectedCert && (
              <Image
                src={selectedCert.imagePath}
                alt={selectedCert.title}
                fill
                className="object-contain"
              />
            )}
          </div>
          <div className="flex justify-end">
            <Button variant="outline" onClick={handleCloseDialog}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Certifications;

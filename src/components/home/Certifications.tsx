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
    <section
      className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"
      id="certifications"
    >
      <SectionHeader title="WHERE'S THE PROOF?" />

      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {CERTIFICATIONS.map((cert) => (
          <Card
            key={cert.title}
            className="h-full flex flex-col shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="relative aspect-video mx-4 mt-4 rounded-md overflow-hidden">
              <Image
                src={cert.imagePath}
                alt={cert.title}
                fill
                priority
                className="object-cover hover-to-reveal"
              />
            </div>

            <CardHeader>
              <CardTitle className="font-semibold text-center text-base sm:text-lg">
                {cert.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-2 flex-1">
              <p className="text-sm text-muted-foreground text-center">
                {cert.description}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {cert.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-xs sm:text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <div className="p-4 pt-0 mt-auto">
              <div className="flex justify-center">
                <Button
                  size="sm"
                  onClick={() => handleViewCert(cert)}
                  className="text-xs sm:text-sm"
                >
                  View Certificate
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedCert?.title}</DialogTitle>
          </DialogHeader>
          <div className="relative h-[60vh] w-full">
            {selectedCert && (
              <Image
                src={selectedCert.imagePath}
                alt={selectedCert.title}
                fill
                className="object-contain"
              />
            )}
          </div>
          <div className="flex justify-end mt-4">
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

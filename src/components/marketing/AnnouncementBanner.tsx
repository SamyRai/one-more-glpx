import React from "react";
import { Megaphone } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface AnnouncementBannerProps {
  text: string;
  actionText: string;
  onActionClick: () => void;
}

export const AnnouncementBanner: React.FC<AnnouncementBannerProps> = ({
  text,
  actionText,
  onActionClick,
}) => {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center">
            <Megaphone className="w-6 h-6 mr-3" />
            <p className="font-medium">{text}</p>
          </div>
          <Button variant="secondary" size="sm" onClick={onActionClick}>
            {actionText}
          </Button>
        </div>
      </div>
    </div>
  );
};
import React from "react";
import { Check, X } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table";
import { cn } from "@/lib/utils";

interface ComparisonTableProps {
  features: {
    feature: string;
    plans: { [key: string]: boolean | string };
  }[];
  planNames: string[];
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  features,
  planNames,
}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Feature</TableHead>
          {planNames.map((planName) => (
            <TableHead key={planName} className="text-center">
              {planName}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {features.map(({ feature, plans }) => (
          <TableRow key={feature}>
            <TableCell className="font-medium">{feature}</TableCell>
            {planNames.map((planName) => (
              <TableCell key={planName} className="text-center">
                {typeof plans[planName] === "boolean" ? (
                  plans[planName] ? (
                    <Check className="w-5 h-5 mx-auto text-green-500" />
                  ) : (
                    <X className="w-5 h-5 mx-auto text-red-500" />
                  )
                ) : (
                  <span className="text-sm">{plans[planName]}</span>
                )}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
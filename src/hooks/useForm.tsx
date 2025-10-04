import { useState } from "react";
import { ZodSchema, ZodError } from "zod";

export interface UseFormOptions<T> {
  /** Initial form values. */
  initialValues: T;
  /** Zod schema used to validate the form. */
  schema: ZodSchema<T>;
  /** Called with valid values when the form is submitted without errors. */
  onSubmit: (values: T) => Promise<void> | void;
}

/**
 * Generic form hook for handling controlled inputs with Zod validation. Returns
 * form values, error messages and helpers for handling input changes and
 * submission.
 */
export function useForm<T extends Record<string, unknown>>({
  initialValues,
  schema,
  onSubmit,
}: UseFormOptions<T>) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  /** Update a single field value. */
  const handleChange = (key: keyof T, value: T[keyof T]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  /** Validate the current values against the schema. */
  const validate = (): boolean => {
    try {
      schema.parse(values);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof ZodError) {
        const fieldErrors: Partial<Record<keyof T, string>> = {};
        for (const issue of error.issues) {
          const path = issue.path[0] as keyof T;
          fieldErrors[path] = issue.message;
        }
        setErrors(fieldErrors);
      }
      return false;
    }
  };

  /** Handle submission of the form. Prevents default submission and calls
   * onSubmit only if validation passes. */
  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await onSubmit(values);
    setSubmitting(false);
  };

  return {
    values,
    errors,
    submitting,
    handleChange,
    handleSubmit,
    validate,
    setValues,
  } as const;
}

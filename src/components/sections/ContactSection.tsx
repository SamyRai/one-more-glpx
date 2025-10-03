import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from '@/hooks/useForm';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { sendContactMessage } from '@/services/emailService';
import { useTranslation } from '@/hooks/useTranslation';

// Define Zod schema for contact form validation
const contactSchema = z.object({
  name: z.string().min(1, { message: 'Required' }),
  email: z.string().email({ message: 'Invalid email' }),
  message: z.string().min(1, { message: 'Required' }),
});

export const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { values, errors, handleChange, handleSubmit, submitting } = useForm({
    initialValues: { name: '', email: '', message: '' },
    schema: contactSchema,
    onSubmit: async (vals) => {
      try {
        await sendContactMessage(vals);
        setStatus('success');
      } catch {
        setStatus('error');
      }
    },
  });

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
          {t('contact.title')}
        </h2>
        {status === 'success' ? (
          <p className="text-green-600 dark:text-green-400 text-center">
            {t('contact.success')}
          </p>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div>
              <Input
                id="name"
                label={t('contact.nameLabel')}
                type="text"
                value={values.name}
                onChange={(e) => handleChange('name', e.target.value)}
              />
              {errors.name && (
                <p className="text-red-600 text-sm mt-1" role="alert">
                  {errors.name}
                </p>
              )}
            </div>
            <div>
              <Input
                id="email"
                label={t('contact.emailLabel')}
                type="email"
                value={values.email}
                onChange={(e) => handleChange('email', e.target.value)}
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1" role="alert">
                  {errors.email}
                </p>
              )}
            </div>
            <div>
              <Textarea
                id="message"
                label={t('contact.messageLabel')}
                value={values.message}
                onChange={(e) => handleChange('message', e.target.value)}
              />
              {errors.message && (
                <p className="text-red-600 text-sm mt-1" role="alert">
                  {errors.message}
                </p>
              )}
            </div>
            {status === 'error' && (
              <p className="text-red-600 text-sm" role="alert">
                {t('contact.error')}
              </p>
            )}
            <Button type="submit" size="lg" disabled={submitting}>
              {t('contact.submit')}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;

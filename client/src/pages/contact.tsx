import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { z } from 'zod';

// Static form schema
const contactFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission for static site
    setTimeout(() => {
      form.reset();
      setIsSubmitting(false);
      toast({
        title: "Success!",
        description: t('contact.form.success'),
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen py-20">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-forest-green mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold text-forest-green mb-6">
                {t('contact.info_title')}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sage-green bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                    {/* Corrected: Changed text-sage-green to text-forest-green for contrast */}
                    <MapPin className="text-forest-green h-6 w-6" />
                </div>
                  <div>
                    <h4 className="font-semibold text-forest-green mb-1">{t('contact.address')}</h4>
                    <p className="text-gray-600">
                      Gat no. 795<br />
                      Parola Road, Amalner<br />
                      Maharashtra, India - 425401
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lime-green bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                      {/* Corrected: Changed text-lime-green to text-forest-green for contrast */}
                      <Phone className="text-forest-green h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest-green mb-1">{t('contact.phone')}</h4>
                    <p className="text-gray-600">+91 98104 00225</p>
                    <p className="text-gray-600">+91 87654 32109</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-forest-green bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0">
                    {/* Corrected: Changed text-forest-green to text-white for contrast */}
                    <Mail className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-forest-green mb-1">{t('contact.email')}</h4>
                    <p className="text-gray-600">info@mohankrushi.com</p>
                    <p className="text-gray-600">orders@mohankrushi.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold text-forest-green mb-4 flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  {t('contact.business_hours')}
                </h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>{t('contact.monday_saturday')}</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('contact.sunday')}</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className="rounded-2xl border-0 shadow-xl">
              <CardContent className="p-6 lg:p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('contact.form.first_name')}</FormLabel>
                            <FormControl>
                              <Input placeholder={t('contact.form.first_name')} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t('contact.form.last_name')}</FormLabel>
                            <FormControl>
                              <Input placeholder={t('contact.form.last_name')} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('contact.form.email')}</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder={t('contact.form.email')} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('contact.form.phone')}</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder={t('contact.form.phone')} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('contact.form.subject')}</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder={t('contact.form.subject_placeholder')} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="product-inquiry">{t('contact.form.subject_options.product_inquiry')}</SelectItem>
                              <SelectItem value="partnership">{t('contact.form.subject_options.partnership')}</SelectItem>
                              <SelectItem value="bulk-order">{t('contact.form.subject_options.bulk_order')}</SelectItem>
                              <SelectItem value="general">{t('contact.form.subject_options.general')}</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('contact.form.message')}</FormLabel>
                          <FormControl>
                            <Textarea 
                              rows={4} 
                              placeholder={t('contact.form.message')} 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-forest-green text-white hover:bg-forest-green/90 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : t('contact.form.submit')}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section - Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Interactive Map Coming Soon</p>
              <p className="text-gray-500">Visit us at our Maharashtra facility</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

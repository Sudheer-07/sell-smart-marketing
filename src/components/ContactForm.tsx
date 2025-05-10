
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const licenseTypes = [
  "Microsoft Office",
  "Adobe Creative Cloud",
  "Salesforce",
  "Oracle",
  "SAP",
  "Atlassian",
  "AutoCAD",
  "VMware",
  "Other"
];

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });
  
  const validate = () => {
    let tempErrors = {
      name: '',
      email: '',
      company: '',
      licenseType: '',
      message: ''
    };
    let isValid = true;
    
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      tempErrors.email = "Invalid email address";
      isValid = false;
    }
    
    if (!formData.company.trim()) {
      tempErrors.company = "Company is required";
      isValid = false;
    }
    
    if (!formData.licenseType) {
      tempErrors.licenseType = "Please select a license type";
      isValid = false;
    }
    
    setErrors(tempErrors);
    return isValid;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      // Form is valid, submit here
      console.log("Form submitted:", formData);
      
      // Show success toast
      toast({
        title: "Form submitted successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: ''
      });
    }
  };
  
  return (
    <section id="contact" className="layout-section bg-gray-50">
      <div className="container-fluid max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Ready to sell your unused licenses or looking to buy? Fill out the form below 
            and our team will get back to you within 24 hours.
          </p>
        </div>
        
        <div className="card bg-white p-8 shadow-lg rounded-2xl">
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="name" className="mb-2 font-medium text-gray-700">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className={`px-4 py-3 border rounded-lg focus:ring-2 focus:ring-softsell-blue focus:border-softsell-blue outline-none transition-all ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="John Smith"
                />
                {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name}</span>}
              </div>
              
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-2 font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`px-4 py-3 border rounded-lg focus:ring-2 focus:ring-softsell-blue focus:border-softsell-blue outline-none transition-all ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="john@company.com"
                />
                {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email}</span>}
              </div>
              
              <div className="flex flex-col">
                <label htmlFor="company" className="mb-2 font-medium text-gray-700">
                  Company <span className="text-red-500">*</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className={`px-4 py-3 border rounded-lg focus:ring-2 focus:ring-softsell-blue focus:border-softsell-blue outline-none transition-all ${
                    errors.company ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Acme Inc."
                />
                {errors.company && <span className="text-red-500 text-sm mt-1">{errors.company}</span>}
              </div>
              
              <div className="flex flex-col">
                <label htmlFor="licenseType" className="mb-2 font-medium text-gray-700">
                  License Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="licenseType"
                  name="licenseType"
                  value={formData.licenseType}
                  onChange={handleChange}
                  className={`px-4 py-3 border rounded-lg focus:ring-2 focus:ring-softsell-blue focus:border-softsell-blue outline-none transition-all ${
                    errors.licenseType ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="" disabled>Select License Type</option>
                  {licenseTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
                {errors.licenseType && <span className="text-red-500 text-sm mt-1">{errors.licenseType}</span>}
              </div>
              
              <div className="flex flex-col md:col-span-2">
                <label htmlFor="message" className="mb-2 font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-softsell-blue focus:border-softsell-blue outline-none transition-all"
                  placeholder="Tell us about the licenses you want to sell or buy..."
                />
              </div>
              
              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="btn-primary w-full md:w-auto min-w-[200px]"
                >
                  Submit Request
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

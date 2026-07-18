'use client';

import { useState, type FormEvent } from 'react';
import { BUSINESS } from '@/lib/constants';
import { services } from '@/data/services';
import { serviceAreas } from '@/data/serviceAreas';

type Status = 'idle' | 'opening' | 'error';

const inputClasses =
  'w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-navy-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-cyan-500';
const labelClasses = 'text-sm font-medium text-navy-900';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const fullName = String(formData.get('fullName') ?? '').trim();
    const phone = String(formData.get('phone') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const suburb = String(formData.get('suburb') ?? '').trim();
    const serviceRequired = String(formData.get('serviceRequired') ?? '').trim();
    const vehicleMake = String(formData.get('vehicleMake') ?? '').trim();
    const vehicleModel = String(formData.get('vehicleModel') ?? '').trim();
    const vehicleYear = String(formData.get('vehicleYear') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();
    const consent = formData.get('consent') === 'on';

    if (!fullName || !phone || !email || !suburb || !serviceRequired) {
      setStatus('error');
      setErrorMessage('Please complete all required fields before continuing.');
      return;
    }

    if (!EMAIL_PATTERN.test(email)) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    if (!consent) {
      setStatus('error');
      setErrorMessage('Please confirm you consent to being contacted about your enquiry.');
      return;
    }

    const vehicle = [vehicleYear, vehicleMake, vehicleModel].filter(Boolean).join(' ');
    const subject = `Website Enquiry: ${serviceRequired} (${suburb})`;
    const bodyLines = [
      `Name: ${fullName}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Suburb: ${suburb}`,
      `Service required: ${serviceRequired}`,
      vehicle ? `Vehicle: ${vehicle}` : null,
      '',
      'Message:',
      message || '(no message provided)',
    ].filter((line): line is string => line !== null);

    const mailtoUrl = `mailto:${BUSINESS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      bodyLines.join('\n'),
    )}`;

    setStatus('opening');
    window.location.href = mailtoUrl;
  }

  if (status === 'opening') {
    return (
      <div role="status" className="rounded-2xl border border-cyan-200 bg-cyan-50 p-6 text-navy-950">
        <p className="font-semibold">Your email application is being opened.</p>
        <p className="mt-1 text-sm text-slate-600">
          A pre-filled email to Auto Locksmith Dandenong should now be open in your email app — please
          review and send it from there. If nothing opened, email{' '}
          <a href={BUSINESS.emailHref} className="font-semibold text-cyan-700">
            {BUSINESS.email}
          </a>{' '}
          directly, or call{' '}
          <a href={BUSINESS.phoneHref} className="font-semibold text-cyan-700">
            {BUSINESS.phoneDisplay}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-4 text-sm font-semibold text-cyan-700 hover:text-cyan-600"
        >
          Back to the form
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="fullName" className={labelClasses}>
            Full Name <span aria-hidden="true">*</span>
          </label>
          <input id="fullName" name="fullName" type="text" required className={inputClasses} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className={labelClasses}>
            Phone Number <span aria-hidden="true">*</span>
          </label>
          <input id="phone" name="phone" type="tel" required className={inputClasses} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className={labelClasses}>
            Email Address <span aria-hidden="true">*</span>
          </label>
          <input id="email" name="email" type="email" required className={inputClasses} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="suburb" className={labelClasses}>
            Current Suburb <span aria-hidden="true">*</span>
          </label>
          <select id="suburb" name="suburb" required className={inputClasses}>
            <option value="">Select suburb</option>
            {serviceAreas.map((area) => (
              <option key={area.slug} value={area.name}>
                {area.name}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="vehicleMake" className={labelClasses}>
            Vehicle Make
          </label>
          <input id="vehicleMake" name="vehicleMake" type="text" className={inputClasses} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="vehicleModel" className={labelClasses}>
            Vehicle Model
          </label>
          <input id="vehicleModel" name="vehicleModel" type="text" className={inputClasses} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="vehicleYear" className={labelClasses}>
            Vehicle Year
          </label>
          <input id="vehicleYear" name="vehicleYear" type="text" inputMode="numeric" className={inputClasses} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="serviceRequired" className={labelClasses}>
          Service Required <span aria-hidden="true">*</span>
        </label>
        <select id="serviceRequired" name="serviceRequired" required className={inputClasses}>
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service.slug} value={service.name.replace(' Dandenong', '')}>
              {service.name.replace(' Dandenong', '')}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <textarea id="message" name="message" rows={4} className={inputClasses} />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-5 w-5 shrink-0 rounded border-slate-300 text-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500"
        />
        <label htmlFor="consent" className="text-sm text-slate-600">
          I consent to Auto Locksmith Dandenong contacting me about my enquiry. <span aria-hidden="true">*</span>
        </label>
      </div>

      {status === 'error' ? (
        <p role="alert" className="text-sm font-medium text-red-600">
          {errorMessage}
        </p>
      ) : null}

      <p className="text-xs text-slate-500">
        Submitting this form opens your email application with a pre-filled message addressed to Auto
        Locksmith Dandenong. It does not send automatically — you will need to press send from your own
        email app.
      </p>

      <button
        type="submit"
        className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-navy-950 hover:bg-cyan-400 sm:w-auto"
      >
        Open Email to Send Message
      </button>
    </form>
  );
}

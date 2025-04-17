"use client";

import ContactForm from "@/components/ContactForm";
import UseAlert from "@/hooks/useAlert";
import Alert from "@/components/Alert";
import ContactExperience from "@/components/models/ContactExperience";

const Contact = () => {
  const { alert } = UseAlert();

  return (
    <section className="flex-center section-padding">
       {alert.show && <Alert {...alert} />}

    <div className="w-full h-full md:px-10 px-5">
        <h3 className="head-text">Let&apos;s talk</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you&apos;re looking to build a new website, improve your
            existing platform, or bring a unique project to life, I&apos;m here to help.
          </p>
      <div className="grid-12-cols mt-16">
        <div className="xl:col-span-5">
          <div className="flex-center card-border rounded-xl p-10">
            <ContactForm />
          </div>
        </div>
        <div className="xl:col-span-7 min-h-96">
          <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
            <ContactExperience />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Contact;

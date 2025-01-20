import React from 'react'

const Service = () => {
  return (
    <div className="services text-center p-8 bg-white py-20">
    <h2 className="services-title text-3xl font-medium' text-blue-800 mb-2">Amazing Services</h2>
    <p className="services-description max-w-2xl mx-auto text-gray-600 text-base leading-7 mb-8">
      Seamlessly integrate digital healthcare solutions that empower patients with on-demand consultations, holistic health record access, and a unified health journey—driving proactive, patient-centered care that adapts to evolving health landscapes and optimizes clinic efficiency.
    </p>
    <div className="services-cards flex justify-center gap-4 flex-wrap mt-4 ">
      {[
        {
        //   img: "/images/doctoravailable.jpg",
          title: "Doctor Availability & Scheduling",
          description: "Real-time availability of doctors for appointments and simplified scheduling interface.",
        },
        {
        //   img: "/images/medicalrecord.png",
          title: "Medical Records Access",
          description: "A secure portal where users can access their medical records, prescriptions, and test results.",
        },
        {
        //   img: "/images/medicalreminder.png",
          title: "Medication Reminders",
          description: "Notifications for upcoming medication schedules and refills.",
        },
        {
        //   img: "/images/telemedicine.png",
          title: "Telemedicine",
          description: "Video call feature for virtual consultations with health professionals.",
        },
        {
        //   img: "/images/emergency.png",
          title: "Emergency Contact & Support",
          description: "Access to urgent care and emergency contact or hotline in case of immediate health needs.",
        },
        {
        //   img: "/images/healthy.png",
          title: "Health Insights & Tips",
          description: "Personalized health articles and lifestyle tips based on user history and health goals.",
        },
        {
        //   img: "/images/checker.png",
          title: "Symptom Checker",
          description: "A quick symptom checker to guide users on whether they should consult a doctor with links to relevant services.",
        },
      ].map((service, index) => (
        <div
          key={index}
          className="service-card w-full max-w-xs 'bg-blue-500 rounded-lg shadow-lg p-4 transition-transform hover:scale-105"
        >
          {/* <img
            src={service.img}
            alt={service.title}
            className="service-image w-full h-auto rounded-full"
          /> */}
          <div className="service-content mt-4">
            <h3 className="service-title text-lg text-blue-800 mb-2">{service.title}</h3>
            <p className="service-description text-sm text-gray-600">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Service
import {
  FaAmbulance,
  FaStethoscope,
  FaUserMd,
  FaXRay,
  FaPills,
  FaBed,
  FaSyringe,
  FaHeartbeat,
  FaVial,
  FaTooth,
  FaEye,
  FaBriefcaseMedical,
} from "react-icons/fa";

export const services = [
  {
    id: 1,
    title: "Emergency Care",
    description:
      "24/7 urgent care for critical injuries and medical conditions requiring immediate attention.",
    icon: <FaHeartbeat />,
  },
  {
    id: 2,
    title: "Ambulance Services",
    description:
      "Emergency medical transport services for patients needing urgent care or hospital transfer.",
    icon: <FaAmbulance />,
  },
  {
    id: 3,
    title: "Surgical Services",
    description:
      "Comprehensive surgical procedures, from routine to complex operations, with post-surgical care.",
    icon: <FaUserMd />,
  },
  {
    id: 4,
    title: "Inpatient Care",
    description:
      "Overnight hospital stays with full medical care and monitoring for patients needing extended treatment.",
    icon: <FaBed />,
  },
  {
    id: 5,
    title: "Radiology and Imaging",
    description:
      "Diagnostic imaging services, including X-rays, MRIs, CT scans, and ultrasounds for accurate diagnosis.",
    icon: <FaXRay />,
  },
  {
    id: 6,
    title: "Laboratory Services",
    description:
      "Comprehensive testing and diagnostic services including blood work and pathology analysis.",
    icon: <FaVial />,
  },
  {
    id: 7,
    title: "Pharmacy Services",
    description:
      "On-site pharmacy providing prescription medications, patient counseling, and medication management for ongoing treatment.",
    icon: <FaPills />,
  },
  {
    id: 8,
    title: "Dental Services",
    description:
      "Comprehensive dental care including checkups, cleaning, fillings, and orthodontic services.",
    icon: <FaTooth />,
  },
  {
    id: 9,
    title: "Eye Care Services",
    description:
      "Optometry and ophthalmology services for eye exams, glasses, and treatment of eye conditions.",
    icon: <FaEye />,
  },
  {
    id: 10,
    title: "Vaccination Services",
    description:
      "Routine immunizations and vaccinations for adults and children to prevent common diseases.",
    icon: <FaSyringe />,
  },
  {
    id: 11,
    title: "Health Checkups",
    description:
      "Comprehensive routine checkups to monitor your health and detect any medical issues early.",
    icon: <FaStethoscope />,
  },
  {
    id: 12,
    title: "Occupational Health",
    description:
      "Health services for workplace wellness, injury prevention, and treatment for work-related injuries.",
    icon: <FaBriefcaseMedical />,
  },
];

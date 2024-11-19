"use client";
import { useState, ChangeEvent } from "react";

interface Doctor {
  name: string;
  department: string;
  branch: string;
  slots: string[];
}

interface PatientDetails {
  name: string;
  phone: string;
}

const Form = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [patientDetails, setPatientDetails] = useState<PatientDetails>({
    name: "",
    phone: "",
  });

  const doctors: Doctor[] = [
    {
      name: "Dr. Linda Flores",
      department: "Gynecology",
      branch: "Main Hospital",
      slots: ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM"],
    },
    {
      name: "Dr. Glenn Arredondo",
      department: "Family Medicine",
      branch: "North Branch",
      slots: ["09:30 AM", "10:30 AM", "11:30 AM", "02:30 PM", "03:30 PM"],
    },
    {
      name: "Dr. Dorthy Winters",
      department: "Gastroenterology",
      branch: "South Branch",
      slots: ["08:00 AM", "09:00 AM", "10:00 AM", "02:00 PM", "04:00 PM"],
    },
  ];

  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string>("");

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDoctorSelect = (doctor: Doctor): void => {
    setSelectedDoctor(doctor);
    setSearchTerm(doctor.name);
    setShowSuggestions(false);
  };

  const handlePatientDetailsChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = e.target;
    setPatientDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (): void => {
    if (
      !selectedDoctor ||
      !selectedSlot ||
      !patientDetails.name ||
      !patientDetails.phone
    ) {
      alert("Please fill in all fields");
      return;
    }
    console.log({
      doctor: selectedDoctor,
      slot: selectedSlot,
      patient: patientDetails,
    });
  };

  return (
    <div className="bg-white md:p-10 p-5 rounded-lg border-sky-500 border-2 m-2 md:m-0">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        Book Appointment
      </h3>
      <div className="mb-4 relative">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Search Doctor
        </label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setSearchTerm(e.target.value);
            setShowSuggestions(true);
            setSelectedDoctor(null);
          }}
          onFocus={() => setShowSuggestions(true)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type doctor's name..."
        />
        {showSuggestions && searchTerm && (
          <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-48 overflow-y-auto scrollbar-hide shadow-lg">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.name}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleDoctorSelect(doctor)}
              >
                <div className="font-semibold">{doctor.name}</div>
                <div className="text-sm text-gray-600">{doctor.department}</div>
                <div className="text-sm text-gray-500">{doctor.branch}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedDoctor && (
        <>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Department
            </label>
            <input
              type="text"
              value={selectedDoctor.department}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
              disabled
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Branch
            </label>
            <input
              type="text"
              value={selectedDoctor.branch}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
              disabled
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Available Slots
            </label>
            <select
              value={selectedSlot}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setSelectedSlot(e.target.value)
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a time slot</option>
              {selectedDoctor.slots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Patient Name
            </label>
            <input
              type="text"
              name="name"
              value={patientDetails.name}
              onChange={handlePatientDetailsChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter patient name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={patientDetails.phone}
              onChange={handlePatientDetailsChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter phone number"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Book Appointment
          </button>
        </>
      )}
    </div>
  );
};

export default Form;

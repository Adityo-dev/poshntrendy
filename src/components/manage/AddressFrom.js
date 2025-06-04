import { useEffect, useState } from "react";

export default function AddressForm({ onSubmit, initialData }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    district: "",
    zone: "",
    addressLine: "",
    remark: "",
  });
  const [districts, setDistricts] = useState([]);
  const [zones, setZones] = useState([]);
  const [districtsFetched, setDistrictsFetched] = useState(false);

  useEffect(() => {
    const fetchDistricts = async () => {
      try {
        const res = await fetch(
          "https://locator-api.declives.com/api/v1/districts"
        );
        const result = await res.json();
        if (result.success && Array.isArray(result.data)) {
          setDistricts(result.data);
          setDistrictsFetched(true);
        }
      } catch (error) {
        console.error("Failed to fetch districts:", error);
      }
    };

    if (!districtsFetched) {
      fetchDistricts();
    }
  }, [districtsFetched]);

  useEffect(() => {
    const fetchZones = async () => {
      const selectedDistrict = districts.find(
        (district) => district.name === formData.district
      );
      if (selectedDistrict?.id) {
        try {
          const res = await fetch(
            `https://locator-api.declives.com/api/v1/upazilas/${selectedDistrict.id}`
          );
          const result = await res.json();
          if (result.success && Array.isArray(result.data)) {
            setZones(result.data);
          }
        } catch (error) {
          console.error("Failed to fetch zones:", error);
        }
      } else {
        setZones([]);
      }
    };

    if (formData.district) {
      fetchZones();
    }
  }, [formData.district, districts]);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* District and Zone */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="district"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Select district <span className="text-red-500">*</span>
            </label>
            <select
              id="district"
              name="district"
              value={formData.district}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select</option>
              {districts.map((district) => (
                <option key={district.id} value={district.name}>
                  {district.name} ({district.bn_name})
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="zone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Zone <span className="text-red-500">*</span>
            </label>
            <select
              id="zone"
              name="zone"
              value={formData.zone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select</option>
              {zones.map((zone) => (
                <option key={zone.id} value={zone.name}>
                  {zone.name} ({zone.bn_name})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Address Line */}
        <div>
          <label
            htmlFor="addressLine"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Address line <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="addressLine"
            name="addressLine"
            value={formData.addressLine}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Remark */}
        <div>
          <label
            htmlFor="remark"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Remark
          </label>
          <textarea
            id="remark"
            name="remark"
            value={formData.remark}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-primary text-white py-2 px-4 rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        {initialData ? "Update Address" : "Save Address"}
      </button>
    </form>
  );
}

import { useState } from "react";

function Password() {
  const [formData, setFormData] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.new !== formData.confirm) {
      setError("New passwords do not match.");
      return;
    }

    // Handle password change logic here (e.g., API call)

    // Reset form
    setFormData({ current: "", new: "", confirm: "" });
    setError("");
    // Optionally show success toast/message
  };

  const isDisabled = !formData.current || !formData.new || !formData.confirm;

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {error && (
        <p className="text-red-600 bg-red-50 border border-red-200 p-3 rounded-md">
          {error}
        </p>
      )}
      <div>
        <label className="block text-gray-700 mb-1">Current Password</label>
        <input
          name="current"
          type="password"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Enter current password"
          value={formData.current}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-1">New Password</label>
        <input
          name="new"
          type="password"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Enter new password"
          value={formData.new}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-1">Confirm New Password</label>
        <input
          name="confirm"
          type="password"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Confirm new password"
          value={formData.confirm}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        disabled={isDisabled}
        className={`px-6 py-3 rounded-lg text-white transition mt-4 ${
          isDisabled
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-primary hover:bg-opacity-90"
        }`}
      >
        Change Password
      </button>
    </form>
  );
}

export default Password;

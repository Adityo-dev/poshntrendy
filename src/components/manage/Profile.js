import { useState } from "react";
const defaultProfile = {
  name: "Aditto Dev Barmon Koushik",
  email: "adittodev01770@gmail.com",
  phone: "+8801770365981",
};

const inputFields = [
  { label: "Name", name: "name", type: "text" },
  { label: "Email", name: "email", type: "email" },
  { label: "Phone", name: "phone", type: "tel" },
];

function Profile() {
  const [profile, setProfile] = useState(defaultProfile);
  const [backupProfile, setBackupProfile] = useState(defaultProfile);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setBackupProfile(profile);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setProfile(backupProfile);
    setIsEditing(false);
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const isChanged = JSON.stringify(profile) !== JSON.stringify(backupProfile);

  return (
    <form className="space-y-4" onSubmit={handleUpdateProfile}>
      {inputFields.map(({ label, name, type }) => (
        <div key={name}>
          <label htmlFor={name} className="block text-gray-700 mb-1">
            {label}
          </label>
          <input
            id={name}
            name={name}
            type={type}
            value={profile[name]}
            onChange={handleChange}
            readOnly={!isEditing}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      ))}

      {isEditing ? (
        <div className="flex space-x-3">
          <button
            type="submit"
            disabled={!isChanged}
            className={`px-6 py-3 rounded-lg text-white transition ${
              isChanged
                ? "bg-primary hover:bg-opacity-90"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Update Profile
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition"
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={handleEdit}
          className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition"
        >
          Edit Profile
        </button>
      )}
    </form>
  );
}

export default Profile;

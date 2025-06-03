import { useRef, useState } from "react";

function NameAndImage() {
  const [profileImage, setProfileImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      // Create a preview URL for the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="flex items-center gap-4 mb-12">
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        accept="image/*"
        className="hidden"
      />

      <div
        onClick={handleImageClick}
        className="w-20 h-20 rounded-full flex items-center justify-center text-black bg-gray-100 overflow-hidden cursor-pointer relative"
      >
        {previewImage ? (
          <img
            src={previewImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gray-300 transition-all duration-200 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        )}
      </div>

      <p className="flex flex-col">
        <span className="text-primary">Hi</span>
        <span className="text-secondary">Aditto Dev Barmon</span>
      </p>
    </div>
  );
}

export default NameAndImage;

import { Share2 as FiShare2 } from "lucide-react";

function Referral() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="bg-gradient-to-r from-primary to-secondary p-1 rounded-lg mb-6">
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-2xl font-bold text-dark mb-3">
            Invite Friends & Earn Rewards
          </h2>
          <p className="text-gray-600 mb-4">
            Share your referral link with friends and earn 100 points for each
            friend who signs up and makes a purchase.
          </p>
          <div className="flex mb-6">
            <input
              type="text"
              value="https://poshntrendy.com/ref/yourusername"
              readOnly
              className="flex-1 p-3 border rounded-l-lg bg-gray-50"
            />
            <button className="bg-primary text-white px-4 py-3 rounded-r-lg hover:bg-opacity-90">
              Copy Link
            </button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="text-4xl font-bold text-accent mb-2">5</div>
            <p className="text-gray-700">Friends Referred</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-opacity-90 flex items-center">
          <FiShare2 className="mr-2" /> Share via Facebook
        </button>
        <button className="bg-blue-400 text-white px-6 py-2 rounded-lg hover:bg-opacity-90 flex items-center">
          <FiShare2 className="mr-2" /> Share via Twitter
        </button>
      </div>
    </div>
  );
}

export default Referral;

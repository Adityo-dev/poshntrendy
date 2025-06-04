function Points() {
  return (
    <div className="text-center py-1">
      <div className="text-6xl font-bold text-accent mb-4">200</div>
      <p className="text-gray-600">Loyalty Points</p>
      <div className="max-w-md mx-auto mt-6">
        <p className="text-gray-700 mb-4">
          You've earned 200 points so far. Every $1 spent equals 1 point. Redeem
          your points for discounts on future purchases.
        </p>
        <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition">
          Redeem Points
        </button>
      </div>
    </div>
  );
}

export default Points;

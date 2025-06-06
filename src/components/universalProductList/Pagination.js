function Pagination({ filteredTotalPages, currentPage, handlePageChange }) {
  return (
    <>
      {filteredTotalPages > 1 && (
        <div className="flex justify-center mt-8">
          <nav className="flex items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 cursor-pointer"
            >
              Previous
            </button>
            {Array.from({ length: filteredTotalPages }, (_, i) => i + 1).map(
              (page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-3 py-1 rounded cursor-pointer transition-all duration-200 ${
                    currentPage === page
                      ? "bg-[#E60CD9] text-white"
                      : "bg-[#DBCCCC] hover:bg-[#E60CD9] hover:text-white"
                  }`}
                >
                  {page}
                </button>
              )
            )}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === filteredTotalPages}
              className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 cursor-pointer"
            >
              Next
            </button>
          </nav>
        </div>
      )}
    </>
  );
}

export default Pagination;

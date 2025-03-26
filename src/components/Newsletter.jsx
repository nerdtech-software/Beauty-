export default function Newsletter() {
  return (
    <div className="bg-white flex justify-between items-center p-10 max-w-5xl mx-auto">
     <div className="w-full"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK6mpS87LHxDctbb4PAiSRfcShX9b3T5Cc5g&s" alt="Newsletter" className="w-1/3 rounded-lg" /></div>
      <div className="w-2/3 text-left">
        <h2 className="text-2xl font-bold text-gray-900 pl-12">Join our newsletter</h2>
        <p className="text-gray-600 mt-2 w-[90%]">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give.
        </p>
        
<form className="max-w-md mx-auto">   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-emerald-950  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-green-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600  dark:hover:bg-green-700 dark:focus:ring-blue-800">Subscribe</button>
    </div>
</form>

      </div>
    </div>
  );
}

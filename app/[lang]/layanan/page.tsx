export default function LayananPage() {
  return (
    <div className="bg-[#0a0f1f] min-h-screen flex flex-col">
      <main className="flex-grow px-3 pt-20 pb-16 max-w-[98vw] mx-auto w-full space-y-8">
        <section>
          <h2 className="text-white text-center font-extrabold text-3xl leading-snug mb-4 max-w-[480px] mx-auto">
            Mulai Bisnis Mudah & Cepat
          </h2>
          <p className="text-center text-gray-400 text-base font-normal max-w-[480px] mx-auto mb-10 leading-relaxed">
            Bisnovo bantu kamu bikin bisnis online sendiri, lengkap dari awal sampai siap jalan. Nggak perlu jago IT!
          </p>
          <div className="bg-white rounded-xl overflow-hidden mx-auto max-w-[98vw]">
            <div className="relative w-[90%] mx-auto mt-4 mb-2 rounded-xl overflow-hidden" style={{ height: '140px' }}>
              <img
                alt="Epic Account website preview"
                className="w-full h-full object-cover rounded-xl"
                height={400}
                src="https://storage.googleapis.com/a1aa/image/8fd00e27-f52f-4999-4c28-ee158835b55d.jpg"
                width={600}
              />
            </div>
            <div className="flex items-center px-5 py-2 border-b border-gray-200">
              <h3 className="font-semibold text-gray-700 text-sm">Epic Account</h3>
            </div>
            <div className="flex items-center justify-between px-5 py-3 font-semibold text-gray-700 text-sm">
              <span>Rp 1.500.000</span>
              <button className="border border-gray-300 rounded-md px-3 py-1 text-sm font-normal text-gray-700 hover:bg-gray-100">
                Beli Sekarang
              </button>
            </div>
          </div>
        </section>
        {Array.from({ length: 4 }).map((_, index) => (
          <section key={index}>
            <div className="bg-white rounded-xl overflow-hidden mx-auto max-w-[98vw]">
              <div className="relative w-[90%] mx-auto mt-4 mb-2 rounded-xl overflow-hidden" style={{ height: '140px' }}>
                <img
                  alt="Epic Account website preview"
                  className="w-full h-full object-cover rounded-xl"
                  height={400}
                  src="https://storage.googleapis.com/a1aa/image/8fd00e27-f52f-4999-4c28-ee158835b55d.jpg"
                  width={600}
                />
              </div>
              <div className="flex items-center px-5 py-2 border-b border-gray-200">
                <h3 className="font-semibold text-gray-700 text-sm">Epic Account</h3>
              </div>
              <div className="flex items-center justify-between px-5 py-3 font-semibold text-gray-700 text-sm">
                <span>Rp 1.500.000</span>
                <button className="border border-gray-300 rounded-md px-3 py-1 text-sm font-normal text-gray-700 hover:bg-gray-100">
                  Beli Sekarang
                </button>
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

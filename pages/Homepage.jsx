import { Link } from "react-router";

function Homepage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-50 p-4">
            <div className="text-center max-w-2xl">
                {/* Icon */}
                <div className="mb-8">
                    <div className="inline-block p-6 bg-slate-800 rounded-2xl shadow-lg">
                        <svg
                            className="w-20 h-20 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                            />
                        </svg>
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
                    QR Code Scanner
                </h1>

                {/* Description */}
                <p className="text-xl text-slate-600 mb-12">
                    Scan QR codes instantly with your camera
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                        <div className="text-3xl mb-3">⚡</div>
                        <h3 className="text-slate-900 font-semibold mb-2">
                            Fast & Easy
                        </h3>
                        <p className="text-slate-600 text-sm">
                            Instant QR code detection
                        </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                        <div className="text-3xl mb-3">🔒</div>
                        <h3 className="text-slate-900 font-semibold mb-2">
                            Secure
                        </h3>
                        <p className="text-slate-600 text-sm">
                            No data stored or shared
                        </p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                        <div className="text-3xl mb-3">📱</div>
                        <h3 className="text-slate-900 font-semibold mb-2">
                            Multi-Device
                        </h3>
                        <p className="text-slate-600 text-sm">
                            Works on mobile & desktop
                        </p>
                    </div>
                </div>

                {/* CTA Button */}
                <Link to="/qr-scan">
                    <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-slate-800 rounded-lg shadow-md hover:bg-slate-900 transition-colors">
                        <span className="mr-2">Start Scanning</span>
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                        </svg>
                    </button>
                </Link>

                {/* Footer */}
                <p className="text-slate-500 text-sm mt-8">
                    Click the button above to access your camera and scan QR
                    codes
                </p>
            </div>
        </div>
    );
}

export default Homepage;

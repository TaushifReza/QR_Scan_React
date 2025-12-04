import React, { useEffect } from "react";
import { Link } from "react-router";
import { useQRScanner } from "../hooks/useQRScanner";
import ResultView from "../components/ResultView";
import { isMobileDevice } from "../utils/deviceDetection";

const QrScan = () => {
    const { decodedText, error, startScanner, stopScanner, resetScanner } =
        useQRScanner("qr-reader");

    useEffect(() => {
        const timer = setTimeout(() => {
            startScanner();
        }, 100);

        return () => {
            clearTimeout(timer);
            stopScanner();
        };
    }, []);

    const deviceType = isMobileDevice() ? "mobile" : "desktop";

    return (
        <div className="flex items-center justify-center min-h-screen p-4 bg-slate-50">
            <div className="w-full max-w-md">
                {/* Back Button */}
                <Link
                    to="/"
                    className="inline-flex items-center text-slate-600 hover:text-slate-900 mb-4 transition-colors"
                >
                    <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                    Back to Home
                </Link>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                    <h1 className="text-3xl font-bold text-center mb-2 text-slate-900">
                        QR Code Scanner
                    </h1>
                    <p className="text-xs text-center text-slate-500 mb-6">
                        Using {deviceType === "mobile" ? "back" : "front"}{" "}
                        camera
                    </p>

                    {!decodedText && (
                        <div className="space-y-4">
                            <div
                                id="qr-reader"
                                className="w-full rounded-lg overflow-hidden"
                                style={{ width: "100%" }}
                            ></div>
                            {error && (
                                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                                    <p className="text-red-700 text-sm mb-3">
                                        {error}
                                    </p>
                                    <button
                                        onClick={startScanner}
                                        className="w-full bg-slate-800 hover:bg-slate-900 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                                    >
                                        Try Again
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {decodedText && (
                        <ResultView
                            decodedText={decodedText}
                            onScanAgain={resetScanner}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default QrScan;

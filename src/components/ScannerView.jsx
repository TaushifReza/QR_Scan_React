import React from "react";

/**
 * Component for displaying the QR scanner view
 * @param {Object} props - Component props
 * @param {boolean} props.isScanning - Whether the scanner is currently active
 * @param {string} props.error - Error message if any
 */
const ScannerView = ({ isScanning, error }) => {
    return (
        <div className="space-y-6">
            {/* Scanner container - html5-qrcode will inject video element here */}
            <div
                id="qr-reader"
                className="w-full border-4 border-indigo-400 rounded-xl overflow-hidden shadow-xl bg-gray-900 aspect-square"
            >
                {!isScanning && !error && (
                    <div className="flex items-center justify-center h-full p-6 text-center text-white text-lg font-medium">
                        Initializing Camera...
                    </div>
                )}
                {error && (
                    <div className="flex items-center justify-center h-full p-6 text-center text-red-400 text-lg font-medium">
                        {error}
                    </div>
                )}
            </div>

            {isScanning && !error && (
                <p className="text-center text-sm text-gray-500">
                    Point your camera at a QR code to scan
                </p>
            )}
        </div>
    );
};

export default ScannerView;

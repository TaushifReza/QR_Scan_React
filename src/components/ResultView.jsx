import React from "react";

/**
 * Component for displaying QR scan results
 * @param {Object} props - Component props
 * @param {string} props.decodedText - The decoded QR code text
 * @param {Function} props.onScanAgain - Callback to trigger another scan
 */
const ResultView = ({ decodedText, onScanAgain }) => {
    return (
        <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h2 className="text-xl font-semibold text-slate-900 mb-2">
                    Scan Successful!
                </h2>
                <p className="text-slate-700 break-words">
                    <span className="font-medium text-sm text-slate-500">
                        Decoded Content:
                    </span>
                    <span className="font-mono text-sm block mt-2 p-3 bg-white rounded-lg border border-slate-200 select-all">
                        {decodedText}
                    </span>
                </p>
            </div>
            <button
                onClick={onScanAgain}
                className="w-full bg-slate-800 hover:bg-slate-900 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
            >
                Scan Another QR Code
            </button>
        </div>
    );
};

export default ResultView;

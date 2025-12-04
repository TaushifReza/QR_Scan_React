import React from "react";

/**
 * Component for requesting camera permission
 * @param {Object} props - Component props
 * @param {Function} props.onRequestPermission - Callback to request camera permission
 * @param {string} props.error - Error message if permission was denied
 */
const PermissionView = ({ onRequestPermission, error }) => {
    return (
        <div className="space-y-6">
            <div className="bg-blue-100 p-4 rounded-xl border border-blue-300 shadow-md text-center">
                <h2 className="text-xl font-semibold text-blue-800 mb-2">
                    Camera Access Required
                </h2>
                <p className="text-gray-700 mb-4">
                    This app needs access to your camera to scan QR codes.
                    Permission will only be requested once.
                </p>
                {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
                <button
                    onClick={onRequestPermission}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition duration-150 ease-in-out transform hover:scale-[1.01]"
                >
                    Allow Camera Access
                </button>
            </div>
        </div>
    );
};

export default PermissionView;

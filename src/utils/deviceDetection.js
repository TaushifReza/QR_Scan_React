/**
 * Detects if the current device is a mobile device
 * @returns {boolean} - true if mobile, false otherwise
 */
export const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    );
};

/**
 * Gets the appropriate camera facing mode based on device type
 * @returns {string} - 'environment' for mobile (back camera), 'user' for desktop (front camera)
 */
export const getCameraFacingMode = () => {
    return isMobileDevice() ? "environment" : "user";
};

import { useState, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { getCameraFacingMode } from "../utils/deviceDetection";

export const useQRScanner = (elementId) => {
    const [decodedText, setDecodedText] = useState(null);
    const [error, setError] = useState(null);
    const scannerRef = useRef(null);

    const startScanner = async () => {
        try {
            setError(null); // Clear previous errors

            // If scanner exists and is scanning, stop it first
            if (scannerRef.current) {
                try {
                    const isScanning = scannerRef.current.getState() === 2; // 2 = SCANNING state
                    if (isScanning) {
                        await scannerRef.current.stop();
                    }
                } catch (e) {
                    // Ignore stop errors
                }
            }

            // Create new scanner instance if needed
            if (!scannerRef.current) {
                scannerRef.current = new Html5Qrcode(elementId);
            }

            const config = {
                fps: 10,
                qrbox: { width: 250, height: 250 },
            };

            await scannerRef.current.start(
                { facingMode: getCameraFacingMode() },
                config,
                (text) => {
                    setDecodedText(text);
                    stopScanner();
                },
                () => {} // Error callback
            );
        } catch (err) {
            setError("Camera access denied or unavailable");
            console.error(err);
        }
    };

    const stopScanner = async () => {
        if (scannerRef.current) {
            try {
                const isScanning = scannerRef.current.getState() === 2;
                if (isScanning) {
                    await scannerRef.current.stop();
                }
            } catch (err) {
                console.error(err);
            }
        }
    };

    const resetScanner = async () => {
        setDecodedText(null);
        setError(null);
        // Wait a moment before restarting
        await new Promise((resolve) => setTimeout(resolve, 100));
        startScanner();
    };

    return {
        decodedText,
        error,
        startScanner,
        stopScanner,
        resetScanner,
    };
};

// Create a custom hook for smooth navigation
import { useNavigate } from 'react-router-dom';

export const useSmoothNavigate = () => {
    const navigate = useNavigate();

    const smoothNavigate = (to, options = {}) => {
        if (!document.startViewTransition) {
            // Fallback for browsers that don't support View Transitions
            navigate(to, options);
            return;
        }

        document.startViewTransition(() => {
            navigate(to, options);
        });
    };

    return smoothNavigate;
};
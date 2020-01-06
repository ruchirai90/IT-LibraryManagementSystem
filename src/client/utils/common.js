//debounce function - helps in avoiding poling up of event triggers,
// helps in imporoving performance
export function debounced(fn, delay) {
    let timerId;
    return function (...args) {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            fn(...args);
            timerId = null;
        }, delay);
    }
}

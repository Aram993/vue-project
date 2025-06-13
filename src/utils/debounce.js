
export default function debounce(fn, delay = 300) {
    let timeout;

    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn();
        }, delay)
    }
}
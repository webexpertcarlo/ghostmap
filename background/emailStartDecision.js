// Pure seam for the email-start queue decision. It has no Chrome dependency so
// the guard's state rules can be tested in Node.
export function decideStartAction({
    active = 0,
    pending = 0,
    isProcessing: _isProcessing = false,
    isPaused = false,
    circuitOpen = false,
} = {}) {
    // Only active jobs prove that a worker is running. isProcessing can be
    // stale after the worker loop exits.
    if (active > 0) return 'reject_running';
    if (circuitOpen) return 'circuit_open';
    if (isPaused) return 'paused';
    // An empty queue is a fresh start only when no lifecycle hold is active.
    if (pending <= 0) return 'start';
    return 'resume_wedged';
}
